import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  Building2,
  ArrowRight,
  Shield,
  Activity,
  FileBarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — NetShield DPI Security",
  description: "Real-world deployments of NetShield DPI across finance, healthcare, telecom, and government.",
};

const cases = [
  {
    icon: Building2,
    name: "Global Investment Bank",
    pattern: "text-electric",
    description:
      "Deployed NetShield across 14 data centers to detect lateral movement and data exfiltration. Reduced mean time to detect from 12 days to 40 minutes.",
    href: "#",
    cta: "Read Case Study",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-transparent" />
    ),
  },
  {
    icon: Shield,
    name: "National Healthcare Network",
    pattern: "text-cyan-glow",
    description:
      "HIPAA compliance and zero-trust segmentation across 900 hospitals. Cut policy violations by 82% and eliminated stale-network-segment risk.",
    href: "#",
    cta: "Read Case Study",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 via-transparent to-transparent" />
    ),
  },
  {
    icon: Activity,
    name: "Tier-1 Telecommunications Provider",
    pattern: "text-neon-green",
    description:
      "Carrier-grade DPI for lawful intercept and QoS enforcement across 60M subscribers. Processed 1.2 Tbps aggregate traffic with zero packet loss.",
    href: "#",
    cta: "Read Case Study",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-transparent" />
    ),
  },
  {
    icon: FileBarChart,
    name: "Federal Government Agency",
    pattern: "text-shield-blue",
    description:
      "Air-gapped deployment for critical infrastructure monitoring, achieving FIPS 140-2 compliance while inspecting 100% of encrypted traffic flows.",
    href: "#",
    cta: "Read Case Study",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-shield-blue/10 via-transparent to-transparent" />
    ),
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <Building2 className="w-3.5 h-3.5" />
              CASE STUDIES
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Proven in <span className="text-gradient-blue">Production</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              How leading organizations secure their networks with NetShield deep packet inspection.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { value: 24, suffix: "+", label: "Countries Deployed" },
                { value: 415, suffix: "+", label: "Enterprise Customers" },
                { value: 9.8, suffix: " PB", label: "Traffic Inspected Daily", decimal: 1 },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-cyan font-mono">
                    <NumberTicker value={s.value} decimalPlaces={s.decimal || 0} />{s.suffix}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Deployments</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click through to see how NetShield solves real security challenges at enterprise scale.
              </p>
            </div>
            <BentoGrid className="grid-cols-1 lg:grid-cols-3">
              {cases.map((c) => (
                <BentoCard
                  key={c.name}
                  name={c.name}
                  className={c.className}
                  background={c.background}
                  Icon={c.icon}
                  description={c.description}
                  href={c.href}
                  cta={c.cta}
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Success Story Starts Here</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Schedule a technical deep-dive with our solutions architects.
            </p>
            <Link
              href="/auth/sign-up"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-electric-foreground font-semibold rounded-lg hover:bg-electric/90 transition-colors"
            >
              Talk to an Architect
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}