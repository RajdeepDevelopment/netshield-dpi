"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, Loader2, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

function ConfirmContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  const handleConfirm = useCallback(async () => {
    const tokenHash = searchParams.get("token_hash");
    const type = searchParams.get("type") as "signup" | "magiclink" | "recovery" | "invite" | "email_change" | null;
    const code = searchParams.get("code");

    // PKCE flow (used by passwordless / OAuth): exchange the code for a session.
    if (code) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) {
        setStatus("error");
        setMessage(error.message);
        return;
      }
      setStatus("success");
      router.replace("/dashboard");
      return;
    }

    // Email-link flow (signup confirmation / magic link / recovery):
    // verify the token hash sent in the confirmation link.
    if (tokenHash && type) {
      const { error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type });
      if (error) {
        setStatus("error");
        setMessage(error.message);
        return;
      }
      setStatus("success");
      // delay slightly so the user sees the confirmation state before redirect
      setTimeout(() => router.replace("/dashboard"), 1200);
      return;
    }

    // Fallback: no token in the URL — maybe the session was already stored.
    const { data } = await supabase.auth.getUser();
    if (data.user) {
      setStatus("success");
      router.replace("/dashboard");
      return;
    }
    setStatus("error");
    setMessage(
      "This confirmation link is invalid or has expired. Please request a new one."
    );
  }, [router, searchParams]);

  useEffect(() => {
    (async () => {
      await handleConfirm();
    })();
  }, [handleConfirm]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-surface-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-cyan/5" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative text-center max-w-md"
      >
        <div
          className={`w-16 h-16 rounded-2xl border flex items-center justify-center mx-auto mb-6 ${
            status === "error"
              ? "bg-red-500/10 border-red-500/20"
              : "bg-success/10 border-success/20"
          }`}
        >
          {status === "loading" && <Loader2 className="w-8 h-8 text-electric animate-spin" />}
          {status === "success" && <Check className="w-8 h-8 text-success" />}
          {status === "error" && <X className="w-8 h-8 text-red-500" />}
        </div>

        <h1 className="text-2xl font-bold mb-2 text-white">
          {status === "loading" && "Confirming your email…"}
          {status === "success" && "Email confirmed!"}
          {status === "error" && "Confirmation failed"}
        </h1>
        <p className="text-muted-foreground mb-6">
          {status === "loading" &&
            "Please wait while we verify your confirmation link."}
          {status === "success" &&
            "Your account is now active. Taking you to your dashboard…"}
          {status === "error" && message}
        </p>

        {status === "error" && (
          <Link
            href="/auth/sign-in"
            className="inline-flex items-center gap-2 text-electric font-semibold hover:underline"
          >
            Go to Sign In <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </motion.div>
    </div>
  );
}

export default function ConfirmPage() {
  return (
    <Suspense fallback={null}>
      <ConfirmContent />
    </Suspense>
  );
}