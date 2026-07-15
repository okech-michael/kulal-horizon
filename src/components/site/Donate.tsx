import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, ArrowRight, Building2, Smartphone, Copy, Check, Loader2, AlertCircle } from "lucide-react";
import seedlingImg from "@/assets/seedling.jpg";

const amounts = [
  { v: 500, label: "10 seedlings" },
  { v: 2000, label: "A community day" },
  { v: 10000, label: "A school nursery" },
  { v: 50000, label: "A hectare restored" },
];

const bankDetails = [
  { label: "Bank", value: "Cooperative Bank of Kenya" },
  { label: "Account Name", value: "Ntarakwai CBO" },
  { label: "Account Number", value: "01129876543210" },
  { label: "Paybill Number", value: "400200" },
  { label: "Account Reference", value: "NTARAKWAI" },
  { label: "Branch", value: "Marsabit" },
];

function normalizeKenyanPhone(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  if (/^254(7|1)\d{8}$/.test(digits)) return digits;
  if (/^0(7|1)\d{8}$/.test(digits)) return "254" + digits.slice(1);
  if (/^(7|1)\d{8}$/.test(digits)) return "254" + digits;
  return null;
}

export function Donate() {
  const [tab, setTab] = useState<"bank" | "mpesa">("mpesa");
  const [amount, setAmount] = useState(2000);
  const [custom, setCustom] = useState("");
  const finalAmount = Number(custom) > 0 ? Number(custom) : amount;

  return (
    <section id="donate" className="relative py-24 md:py-32 overflow-hidden bg-foreground text-white">
      <div className="absolute inset-0 -z-0 opacity-40">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-highlight/30 blur-3xl" />
      </div>

      <div className="container-editorial relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-highlight">
              <span className="h-px w-8 bg-highlight" /> Support the mission
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] text-white">
              Give a <span className="italic text-gradient-sunrise">seedling</span> a lifetime.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed max-w-lg">
              Your gift funds indigenous seedlings, community training and the field work
              that keeps young forests alive through their most vulnerable years.
            </p>

            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] max-w-sm mt-8 hidden md:block">
              <img src={seedlingImg} alt="A seedling cradled in red volcanic soil" loading="lazy" className="h-full w-full object-cover animate-slow-zoom" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass-dark rounded-2xl p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-highlight">100% transparent</div>
                <p className="mt-1 text-sm text-white/85">Every contribution is tracked from seedling to standing tree.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl glass-dark p-5 sm:p-7 md:p-8 border-white/15">
              {/* Amount picker */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">Choose amount (KES)</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {amounts.map((a) => (
                    <button
                      key={a.v}
                      type="button"
                      onClick={() => { setAmount(a.v); setCustom(""); }}
                      className={`group rounded-xl border p-3 text-left transition-all ${
                        amount === a.v && !custom
                          ? "border-highlight bg-highlight/10"
                          : "border-white/15 hover:border-white/35 bg-white/5"
                      }`}
                    >
                      <div className="font-display text-lg sm:text-xl font-semibold text-white">
                        {a.v.toLocaleString()}
                      </div>
                      <div className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-white/60">{a.label}</div>
                    </button>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                  <span className="text-sm text-white/60">KES</span>
                  <input
                    type="number"
                    min={1}
                    placeholder="Other amount"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                  />
                </div>
              </div>

              {/* Tab picker */}
              <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white/5 p-1.5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setTab("mpesa")}
                  className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                    tab === "mpesa" ? "bg-highlight text-highlight-foreground shadow-lg" : "text-white/75 hover:text-white"
                  }`}
                >
                  <Smartphone className="h-4 w-4" /> M-Pesa
                </button>
                <button
                  type="button"
                  onClick={() => setTab("bank")}
                  className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                    tab === "bank" ? "bg-highlight text-highlight-foreground shadow-lg" : "text-white/75 hover:text-white"
                  }`}
                >
                  <Building2 className="h-4 w-4" /> Cooperative Bank
                </button>
              </div>

              <div className="mt-6">
                {tab === "mpesa" ? <MpesaForm amount={finalAmount} /> : <BankCard />}
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-white/50">
                <span>Corporate partnerships</span>
                <span>Community sponsorship</span>
                <span>In-kind giving</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BankCard() {
  const [copied, setCopied] = useState<string | null>(null);
  const onCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div>
      <div className="mb-4 flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-highlight/15 text-highlight">
          <Building2 className="h-5 w-5" />
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white">Bank Transfer</div>
          <p className="text-xs text-white/65">Send directly to our Cooperative Bank account. Use the reference so we can thank you.</p>
        </div>
      </div>

      <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
        {bankDetails.map((d) => (
          <li key={d.label} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">{d.label}</div>
              <div className="mt-0.5 truncate text-sm font-medium text-white">{d.value}</div>
            </div>
            <button
              type="button"
              onClick={() => onCopy(d.label, d.value)}
              aria-label={`Copy ${d.label}`}
              className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs text-white/85 hover:bg-white/10 transition"
            >
              {copied === d.label ? <><Check className="h-3.5 w-3.5 text-highlight" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-white/60 leading-relaxed">
        After sending, email a copy of your slip to <span className="text-white">giving@ntarakwai.org</span> so we can send you a receipt and update on the trees your gift plants.
      </p>
    </div>
  );
}

type Status = "idle" | "loading" | "success" | "error";

function MpesaForm({ amount }: { amount: number }) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    const normalized = normalizeKenyanPhone(phone);
    if (!normalized) {
      setStatus("error");
      setMessage("Enter a valid Kenyan phone number (e.g. 0712 345 678).");
      return;
    }
    if (!amount || amount < 10) {
      setStatus("error");
      setMessage("Please choose an amount of at least KES 10.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/public/mpesa-stk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalized, amount }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(data?.message || "We couldn't reach M-Pesa. Please try again shortly.");
        return;
      }
      setStatus("success");
      setMessage(data?.message || "Check your phone for the M-Pesa prompt and enter your PIN to complete the gift.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={submit} noValidate>
      <div className="mb-4 flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-highlight/15 text-highlight">
          <Smartphone className="h-5 w-5" />
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white">M-Pesa STK Push</div>
          <p className="text-xs text-white/65">Enter your Safaricom number and we'll send a prompt to your phone.</p>
        </div>
      </div>

      <label className="block">
        <span className="block text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2">Phone number</span>
        <input
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="0712 345 678"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); if (status === "error") setStatus("idle"); }}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-highlight focus:ring-4 focus:ring-highlight/20 transition"
          required
        />
      </label>

      <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <span className="text-xs uppercase tracking-[0.18em] text-white/60">You give</span>
        <span className="font-display text-xl font-semibold text-white">KES {amount.toLocaleString()}</span>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-highlight px-7 py-4 text-sm font-semibold text-highlight-foreground hover:bg-highlight/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:shadow-[0_20px_50px_-15px_rgba(232,185,75,0.6)]"
      >
        {status === "loading" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending prompt to your phone...</>
        ) : (
          <><Heart className="h-4 w-4" /> Donate KES {amount.toLocaleString()} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>
        )}
      </button>

      {status === "success" && message && (
        <div role="status" className="mt-4 flex items-start gap-3 rounded-xl border border-highlight/40 bg-highlight/10 px-4 py-3 text-sm text-white">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-highlight" />
          <span>{message}</span>
        </div>
      )}
      {status === "error" && message && (
        <div role="alert" className="mt-4 flex items-start gap-3 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-white">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" />
          <span>{message}</span>
        </div>
      )}
    </form>
  );
}
