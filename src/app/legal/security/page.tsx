import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Shield, Lock, Eye, Bug, Server, Fingerprint, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Security — NetShield DPI Security",
  description: "NetShield's security practices, certifications, encryption, and vulnerability disclosure program.",
};

const practices = [
  {
    icon: Lock,
    title: "Encryption Everywhere",
    description: "TLS 1.3 in transit, AES-256 at rest. Keys are managed by a dedicated HSM-backed key management service.",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "24/7 SOC monitors our infrastructure. Real-time anomaly detection flags suspicious activity instantly.",
  },
  {
    icon: Bug,
    title: "Proactive Pentesting",
    description: "Annual third-party penetration tests and a continuous bug bounty program with top researchers.",
  },
  {
    icon: Server,
    title: "Isolated Tenancy",
    description: "Customer data is isolated at the network, compute, and storage layers. No shared inspection state between tenants.",
  },
  {
    icon: Fingerprint,
    title: "Zero Trust Access",
    description: "SSO with enforced MFA, short-lived credentials, and least-privilege access to production systems.",
  },
  {
    icon: Shield,
    title: "Secure Development",
    description: "Threat modeling, SAST/DAST in CI, and mandatory code review for every change shipped to production.",
  },
];

const certifications = ["SOC 2 Type II", "ISO 27001", "ISO 27701", "GDPR", "CCPA", "HIPAA"];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <Shield className="w-3.5 h-3.5" />
              SECURITY
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Trust Is Our <span className="text-gradient-cyan">Security Posture</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              We secure the networks of organizations that can&apos;t afford to fail. Our own infrastructure is held
              to the same standard we help you enforce.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ShimmerButton
                shimmerColor="#00f0ff"
                background="rgba(0, 240, 255, 0.15)"
                borderRadius="0.5rem"
                className="!px-6 !py-3 !text-sm !font-semibold !border-electric/20 !text-electric"
              >
                Report a Vulnerability
              </ShimmerButton>
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Security Team
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: 24, suffix: "/7", label: "SOC Monitoring" },
                { value: 365, suffix: "", label: "Days of Log Retention" },
                { value: 99.999, suffix: "%", label: "Security Uptime", decimal: 3 },
                { value: 0, suffix: "", label: "Reported Breaches" },
              ].map((s) => (
                <div key={s.label} className="text-center p-6 rounded-2xl bg-surface-dark/50 border border-white/5">
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-cyan font-mono mb-2">
                    <NumberTicker value={s.value} decimalPlaces={s.decimal || 0} />{s.suffix}
                  </div>
                  <div className="text-sm font-semibold text-white">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practices */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Secure Your Data</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Defense in depth — at every layer of the stack.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practices.map((p) => (
                <div key={p.title} className="group relative p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all overflow-hidden card-glow">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-electric" />
                  </div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  <BorderBeam duration={6} size={60} colorFrom="#00f0ff" colorTo="#06d6a0" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications & Compliance</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Independently audited, so you can trust our claims.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((c) => (
                <div key={c} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-dark/50 border border-white/10 font-semibold">
                  <Check className="w-4 h-4 text-success" />
                  {c}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              Need a copy of our SOC 2 report or ISO certificates?{" "}
              <a href="mailto:security@netshield.io" className="text-electric font-medium hover:underline">Request access</a>.
            </p>
          </div>
        </section>

        {/* Vulnerability disclosure */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative p-10 rounded-3xl bg-surface-card border border-white/10 overflow-hidden text-center">
              <BorderBeam duration={8} size={150} colorFrom="#00f0ff" colorTo="#06d6a0" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Responsible Disclosure</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Found a vulnerability in NetShield? We welcome responsible disclosure. Report it via
                <a href="mailto:security@netshield.io" className="text-electric font-medium hover:underline"> security@netshield.io </a>
                with details and reproduction steps, and we&apos;ll respond within 24 hours. No legal action will be taken
                against researchers acting in good faith.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["PGP Key", "HackerOne", "Bugcrowd"].map((v) => (
                  <Link key={v} href="#" className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 font-semibold text-sm hover:bg-white/10 transition-colors">
                    {v}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}