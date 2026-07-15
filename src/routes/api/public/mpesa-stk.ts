import { createFileRoute } from "@tanstack/react-router";

async function getAccessToken(consumerKey: string, consumerSecret: string, baseUrl: string) {
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
  const res = await fetch(`${baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: { Authorization: `Basic ${auth}` },
  });
  if (!res.ok) throw new Error("Failed to authenticate with M-Pesa.");
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

export const Route = createFileRoute("/api/public/mpesa-stk")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { phone?: string; amount?: number };
          const phone = String(body.phone || "").replace(/\D/g, "");
          const amount = Math.floor(Number(body.amount) || 0);

          if (!/^254(7|1)\d{8}$/.test(phone)) {
            return Response.json({ message: "Invalid Kenyan phone number." }, { status: 400 });
          }
          if (amount < 10) {
            return Response.json({ message: "Minimum donation is KES 10." }, { status: 400 });
          }

          const consumerKey = process.env.MPESA_CONSUMER_KEY;
          const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
          const shortcode = process.env.MPESA_SHORTCODE;
          const passkey = process.env.MPESA_PASSKEY;
          const env = (process.env.MPESA_ENV || "sandbox").toLowerCase();
          const callbackUrl = process.env.MPESA_CALLBACK_URL || "";

          if (!consumerKey || !consumerSecret || !shortcode || !passkey) {
            return Response.json(
              {
                message:
                  "M-Pesa is not yet configured for this site. Please use the Cooperative Bank option, or contact giving@ntarakwai.org.",
              },
              { status: 503 }
            );
          }

          const baseUrl = env === "production" ? "https://api.safaricom.co.ke" : "https://sandbox.safaricom.co.ke";
          const token = await getAccessToken(consumerKey, consumerSecret, baseUrl);

          const now = new Date();
          const pad = (n: number) => String(n).padStart(2, "0");
          const timestamp =
            now.getFullYear().toString() +
            pad(now.getMonth() + 1) +
            pad(now.getDate()) +
            pad(now.getHours()) +
            pad(now.getMinutes()) +
            pad(now.getSeconds());
          const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");

          const stkRes = await fetch(`${baseUrl}/mpesa/stkpush/v1/processrequest`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              BusinessShortCode: shortcode,
              Password: password,
              Timestamp: timestamp,
              TransactionType: "CustomerPayBillOnline",
              Amount: amount,
              PartyA: phone,
              PartyB: shortcode,
              PhoneNumber: phone,
              CallBackURL: callbackUrl,
              AccountReference: "NTARAKWAI",
              TransactionDesc: "Donation to Ntarakwai CBO",
            }),
          });
          const stkData = (await stkRes.json()) as {
            ResponseCode?: string;
            CustomerMessage?: string;
            errorMessage?: string;
          };
          if (stkData.ResponseCode === "0") {
            return Response.json({
              message: stkData.CustomerMessage || "Check your phone and enter your M-Pesa PIN to complete the gift.",
            });
          }
          return Response.json(
            { message: stkData.errorMessage || "M-Pesa could not process the request. Please try again." },
            { status: 502 }
          );
        } catch (err) {
          const msg = err instanceof Error ? err.message : "Unexpected error.";
          return Response.json({ message: msg }, { status: 500 });
        }
      },
    },
  },
});
