import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Shield,
  Target,
  Eye,
  Globe,
  Users,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — NetShield DPI Security",
  description: "Meet NetShield — the team building deep packet inspection technology that protects the world's most critical networks.",
};

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Security is not a feature — it's our default. Every line of code we ship is audited, hardened, and pentested.",
  },
  {
    icon: Target,
    title: "Radical Transparency",
    description: "We publish our detection research, share threat intel openly, and are honest about what our technology can and cannot do.",
  },
  {
    icon: Eye,
    title: "Relentless Curiosity",
    description: "The threat landscape evolves daily. We invest heavily in R&D to stay ahead of attackers and share what we learn.",
  },
  {
    icon: Globe,
    title: "Global Duty",
    description: "Critical infrastructure protects everyone. We work to make advanced DPI accessible to organizations of all sizes worldwide.",
  },
];

const stats = [
  { value: 2019, label: "Founded", suffix: "" },
  { value: 250, label: "Team Members", suffix: "+" },
  { value: 40, label: "Countries Served", suffix: "+" },
  { value: 99.99, label: "Uptime SLA", suffix: "%", decimal: 2 },
];

const leaders = [
  { name: "Dr. Sarah Chen", role: "Co-Founder & CEO", bio: "Former principal security researcher at a national cyber defense agency." },
  { name: "Marcus Rivera", role: "Co-Founder & CTO", bio: "Built high-performance packet processing engines for 15+ years." },
  { name: "Priya Patel", role: "VP of Engineering", bio: "Led platform teams at major cloud providers. Scaled NetShield to 400G." },
  { name: "Alex Morgan", role: "VP of Product", bio: "Security product veteran focused on making DPI accessible to every team." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <Shield className="w-3.5 h-3.5" />
              ABOUT US
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Protecting the <span className="text-gradient-cyan">Networks</span> That Protect the World
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              NetShield was founded with a simple conviction: every organization — from regional hospitals to global banks —
              deserves deep visibility into the traffic flowing across its network. We build deep packet inspection technology
              that makes that possible at any scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ShimmerButton
                shimmerColor="#00f0ff"
                background="rgba(0, 240, 255, 0.15)"
                borderRadius="0.5rem"
                className="!px-6 !py-3 !text-sm !font-semibold !border-electric/20 !text-electric"
              >
                Join Our Team
              </ShimmerButton>
              <Link
                href="/auth/sign-up"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s) => (
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

        {/* Mission */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-xs font-semibold tracking-wide mb-6">
                <Target className="w-3.5 h-3.5" />
                OUR MISSION
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                See Everything. <span className="text-gradient-blue">Stop Everything.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Modern attacks hide in encrypted traffic, sneak through legitimate protocols, and dwell for months before
                anyone notices. NetShield gives security teams the ability to see every packet, understand every flow, and
                respond to threats in real time — without drowning in noise.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our inspection engine processes traffic at line rate, our ML models surface anomalies humans would miss, and
                our open detection language lets your team write custom rules in minutes — not weeks.
              </p>
              <Link href="/how-it-works" className="inline-flex items-center gap-2 text-electric font-semibold hover:gap-3 transition-all">
                Learn how it works <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative p-8 rounded-3xl bg-surface-card border border-white/10 overflow-hidden">
              <BorderBeam duration={8} size={120} colorFrom="#00f0ff" colorTo="#06d6a0" />
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-3">R&D at NetShield</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                30% of our team is dedicated to research: protocol analysis, ML model training, hardware acceleration, and
                the study of emerging attack techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ML Research", "Protocol Analysis", "Hardware Acceleration", "Threat Intel", "Security Labs"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-md bg-electric/10 border border-electric/20 text-electric text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Stand For</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide every decision we make.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="group relative p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all overflow-hidden card-glow">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-electric" />
                  </div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  <BorderBeam duration={6} size={60} colorFrom="#00f0ff" colorTo="#06d6a0" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Leadership</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">The team behind NetShield&apos;s mission.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((l) => (
                <div key={l.name} className="p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-electric/20 to-shield-blue/20 border border-electric/20 flex items-center justify-center mb-4 text-electric font-bold text-lg">
                    {l.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="font-bold">{l.name}</h3>
                  <p className="text-sm text-electric mb-2">{l.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{l.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Come Build With Us</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We&apos;re hiring researchers, engineers, and product folks passionate about network security.
            </p>
            <Link
              href="/company/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-electric-foreground font-semibold rounded-lg hover:bg-electric/90 transition-colors"
            >
              See Open Roles <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}