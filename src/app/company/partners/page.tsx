import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Check, Handshake, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners — NetShield DPI Security",
  description: "Join NetShield's partner ecosystem — technology alliances, MSSP partnerships, and the system integrator network.",
};

const tiers = [
  {
    name: "Technology Partner",
    description: "Integrate NetShield into your platform, appliance, or SOC tooling.",
    highlights: ["API access & sandbox", "Technical co-marketing", "Joint solution briefs", "Priority roadmap influence"],
    cta: "Become a tech partner",
  },
  {
    name: "MSSP Partner",
    description: "Deliver managed DPI detection and response to your customers.",
    highlights: ["Multi-tenant management", "MDR playbooks & runbooks", "Dedicated partner SE", "Service margin model"],
    cta: "Become an MSSP",
    featured: true,
  },
  {
    name: "System Integrator",
    description: "Deploy NetShield as part of broader security architectures.",
    highlights: ["Certification tracks", "Deployment toolkits", "Joint GTM motion", "Partner portal & deal reg"],
    cta: "Join the SI network",
  },
];

const partnerLogos = ["NORTHGRID", "AEGIS", "SENTINEL+", "CloudCore", "IronWall", "Lattice"];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <Handshake className="w-3.5 h-3.5" />
              PARTNERS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Scale Your Reach With <span className="text-gradient-cyan">NetShield</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              We partner with technology companies, managed security providers, and system integrators to
              deliver deep network visibility everywhere it matters.
            </p>
            <ShimmerButton
              shimmerColor="#00f0ff"
              background="rgba(0, 240, 255, 0.15)"
              borderRadius="0.5rem"
              className="!px-6 !py-3 !text-sm !font-semibold !border-electric/20 !text-electric"
            >
              Become a Partner
            </ShimmerButton>
          </div>
        </section>

        {/* Partner logos */}
        <section className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-8">Trusted by leading security vendors</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {partnerLogos.map((logo) => (
                <div key={logo} className="flex items-center justify-center p-6 rounded-xl bg-surface-dark/50 border border-white/5 opacity-60 hover:opacity-100 transition-opacity">
                  <span className="font-bold text-lg tracking-wider text-white/70">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Three ways to grow alongside NetShield.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col p-8 rounded-3xl border overflow-hidden transition-all ${
                    tier.featured
                      ? "bg-surface-card/80 border-electric/30 card-glow"
                      : "bg-surface-dark/50 border-white/5 hover:border-white/10"
                  }`}
                >
                  {tier.featured && <BorderBeam duration={8} size={100} colorFrom="#00f0ff" colorTo="#06d6a0" />}
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-colors ${
                      tier.featured
                        ? "bg-electric text-electric-foreground hover:bg-electric/90"
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {tier.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}