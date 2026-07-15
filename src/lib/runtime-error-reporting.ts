type RuntimeErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  console.error(error);
  const details = {
    source: "react_error_boundary",
    route: window.location.pathname,
    ...context,
  };

  if (typeof window !== "undefined") {
    console.debug("Runtime error context", details);
  }
}
