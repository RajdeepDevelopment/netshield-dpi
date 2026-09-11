import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Shield,
  FileText,
  ScrollText,
  Lock,
  Award,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legal — NetShield DPI Security",
  description: "Legal resources for NetShield: privacy policy, terms of service, security, and compliance information.",
};

const legalPages = [
  {
    href: "/legal/privacy-policy",
    title: "Privacy Policy",
    icon: Lock,
    description: "How we collect, use, and protect your data — and your rights over it.",
  },
  {
    href: "/legal/terms-of-service",
    title: "Terms of Service",
    icon: ScrollText,
    description: "The agreement governing your use of the NetShield platform.",
  },
  {
    href: "/legal/security",
    title: "Security",
    icon: Shield,
    description: "Our security practices, certifications, vulnerability reporting, and responsible disclosure.",
  },
  {
    href: "/legal/compliance",
    title: "Compliance",
    icon: Award,
    description: "Regulatory certifications and standards we adhere to, including SOC 2 and GDPR.",
  },
];

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <FileText className="w-3.5 h-3.5" />
              LEGAL
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Legal & <span className="text-gradient-cyan">Compliance</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Everything you need to know about how we handle data, security, and compliance —
              written in plain language.
            </p>
          </div>
        </section>

        {/* Legal pages grid */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {legalPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group relative p-8 rounded-3xl bg-surface-dark/50 border border-white/5 hover:border-electric/20 transition-all overflow-hidden card-glow"
                >
                  <BorderBeam duration={8} size={80} colorFrom="#00f0ff" colorTo="#06d6a0" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-5">
                    <page.icon className="w-6 h-6 text-electric" />
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-electric transition-colors">{page.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{page.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
                    Read more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact legal */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions about legal?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Our legal team is available for questions about your data, contracts, or compliance needs.
            </p>
            <a
              href="mailto:legal@netshield.io"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-electric-foreground font-semibold rounded-lg hover:bg-electric/90 transition-colors"
            >
              legal@netshield.io <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}