import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import { Award, ShieldCheck, Check, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance — NetShield DPI Security",
  description: "NetShield's compliance certifications and the regulatory frameworks we support.",
};

const frameworks = [
  {
    name: "SOC 2 Type II",
    description: "Independently audited for security, availability, and confidentiality controls.",
    status: "Certified",
    scope: "Full platform",
  },
  {
    name: "ISO 27001",
    description: "Information security management system certified against international standards.",
    status: "Certified",
    scope: "Full platform",
  },
  {
    name: "GDPR",
    description: "Compliant with EU data protection requirements, including data residency and DPA.",
    status: "Compliant",
    scope: "All EU customers",
  },
  {
    name: "HIPAA",
    description: "Suitable for customers handling protected health information (PHI).",
    status: "Ready",
    scope: "Healthcare",
  },
  {
    name: "FedRAMP",
    description: "In-process authorization for US federal government deployments.",
    status: "In Process",
    scope: "US Government",
  },
  {
    name: "PCI DSS",
    description: "Supports customers with cardholder data environments through segmentation and monitoring.",
    status: "Supporting",
    scope: "Financial services",
  },
];

export default function CompliancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <Award className="w-3.5 h-3.5" />
              COMPLIANCE
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Built for <span className="text-gradient-cyan">Regulated Environments</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              From healthcare to finance to government — NetShield is designed to meet the strictest
              compliance requirements.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { value: 6, label: "Certifications" },
                { value: 40, suffix: "+", label: "Countries Covered" },
                { value: 3, label: "Industry Audits / Year" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-cyan font-mono mb-1">
                    <NumberTicker value={s.value} />{s.suffix || ""}
                  </div>
                  <div className="text-xs font-semibold text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks table */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Certifications & Frameworks</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Our compliance posture, at a glance.</p>
            </div>
            <div className="space-y-4">
              {frameworks.map((f) => (
                <div
                  key={f.name}
                  className="group relative flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all overflow-hidden"
                >
                  <div className="flex-1">
                    <h3 className="font-bold group-hover:text-electric transition-colors">{f.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                      {f.scope}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                      f.status === "Certified" || f.status === "Compliant"
                        ? "bg-success/10 border-success/30 text-success"
                        : f.status === "In Process"
                        ? "bg-warning/10 border-warning/30 text-warning"
                        : "bg-electric/10 border-electric/30 text-electric"
                    }`}>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {f.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 relative p-8 rounded-3xl bg-surface-card border border-white/10 overflow-hidden text-center">
              <BorderBeam duration={8} size={120} colorFrom="#00f0ff" colorTo="#06d6a0" />
              <h3 className="text-xl font-bold mb-3">Need documentation?</h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
                Request our compliance pack — includes SOC 2 report, ISO certificates, DPAs, and security questionnaires.
              </p>
              <a
                href="mailto:compliance@netshield.io"
                className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-electric-foreground font-semibold rounded-lg hover:bg-electric/90 transition-colors"
              >
                compliance@netshield.io <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}