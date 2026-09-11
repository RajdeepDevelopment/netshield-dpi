"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  ArrowRight,
  Mail,
  Lock,
  User,
  Building2,
  Eye,
  EyeOff,
  Loader2,
  Check,
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";

const benefits = [
  "30-day free trial, no credit card required",
  "Full access to Professional features",
  "Deploy in under 15 minutes",
  "Cancel anytime, no contracts",
];

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          company,
        },
        // Send users back to our app after they confirm their email.
        // Use window.location.origin so it works on localhost during dev and
        // on the deployed Vercel domain in production (no hardcoded URL).
        emailRedirectTo: `${window.location.origin}/auth/confirm`,
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // Best-effort waitlist entry — never block the confirmation screen if it fails.
    try {
      await supabase.from("waitlist").insert({
        email,
        full_name: fullName,
        company,
        plan_interest: "professional",
        status: "pending",
      });
    } catch (e) {
      // Non-fatal: auth signup already succeeded — log only.
      console.error("Waitlist insert skipped:", e);
    }

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-surface-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-cyan/5" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-success" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Check your email</h1>
          <p className="text-muted-foreground mb-6">
            We&apos;ve sent a confirmation link to <strong className="text-white">{email}</strong>.
            Please verify your email to activate your account.
          </p>
          <Link
            href="/auth/sign-in"
            className="inline-flex items-center gap-2 text-electric font-semibold hover:underline"
          >
            Go to Sign In <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-surface-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-cyan/5" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-lg"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Shield className="w-10 h-10 text-electric" />
              <div className="absolute inset-0 w-10 h-10 bg-electric/20 blur-lg rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">
                Net<span className="text-gradient-cyan">Shield</span>
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground -mt-1">
                DPI Security
              </span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold">Start your free trial</h1>
          <p className="text-sm text-muted-foreground mt-1">30 days free. No credit card required.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          {/* Benefits */}
          <div className="hidden lg:block space-y-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{b}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="p-6 rounded-2xl bg-surface-dark/80 border border-white/5 backdrop-blur-xl">
            <form onSubmit={handleSignUp} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-danger/10 border border-danger/20 text-danger text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-white block mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-white block mb-1.5">Company</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-white block mb-1.5">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-white block mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    required
                    minLength={8}
                    className="w-full pl-10 pr-12 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric/50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-electric text-electric-foreground font-semibold rounded-lg hover:bg-electric/90 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="#" className="text-electric hover:underline">Terms</Link>
                {" "}and{" "}
                <Link href="#" className="text-electric hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-electric font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
