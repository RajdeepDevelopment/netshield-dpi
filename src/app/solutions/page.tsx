import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Building2,
  Shield,
  Factory,
  HeartPulse,
  Banknote,
  GraduationCap,
  Server,
  ArrowRight,
  Globe,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — NetShield DPI Security",
  description: "Industry-specific deep packet inspection solutions for enterprise, healthcare, finance, manufacturing, and government.",
};

const industries = [
  {
    icon: Building2,
    title: "Enterprise & Corporate",
    description: "Protect your corporate network from advanced persistent threats, data exfiltration, and insider threats with comprehensive visibility into all network traffic.",
    benefits: [
      "Full visibility across hybrid cloud environments",
      "Shadow IT detection and application control",
      "Employee productivity monitoring",
      "Data exfiltration prevention",
    ],
    color: "electric",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & HIPAA",
    description: "Meet HIPAA compliance requirements while protecting patient data with specialized medical device monitoring and PHI detection.",
    benefits: [
      "Medical device network segmentation monitoring",
      "PHI/PII detection and alerting",
      "HIPAA audit trail generation",
      "IoMT (Internet of Medical Things) visibility",
    ],
    color: "success",
  },
  {
    icon: Banknote,
    title: "Financial Services & PCI DSS",
    description: "Protect transaction data and meet PCI DSS requirements with real-time monitoring of cardholder data flows and SWIFT message inspection.",
    benefits: [
      "Cardholder data flow monitoring",
      "PCI DSS evidence collection",
      "SWIFT and payment protocol inspection",
      "Fraud pattern detection",
    ],
    color: "cyan",
  },
  {
    icon: Factory,
    title: "Industrial & OT/ICS",
    description: "Secure operational technology networks with deep inspection of SCADA, Modbus, DNP3, and industrial protocols without impacting uptime.",
    benefits: [
      "SCADA/ICS protocol deep inspection",
      "OT network baseline and anomaly detection",
      "IT/OT convergence security",
      "Zero-disruption passive monitoring",
    ],
    color: "warning",
  },
  {
    icon: GraduationCap,
    title: "Education & Research",
    description: "Protect campus networks from threats while maintaining open access for research. Monitor BYOD traffic and prevent data breaches.",
    benefits: [
      "BYOD device profiling and control",
      "Research data protection",
      "Bandwidth management and abuse prevention",
      "FERPA compliance monitoring",
    ],
    color: "electric",
  },
  {
    icon: Shield,
    title: "Government & Defense",
    description: "Mission-critical packet inspection for classified and unclassified networks with government-grade security certifications.",
    benefits: [
      "Common Criteria certified components",
      "NSA/CSS evaluated configurations",
      "Cross-domain solution support",
      "Insider threat detection",
    ],
    color: "danger",
  },
];

const colorMap: Record<string, string> = {
  electric: "text-electric bg-electric/10 border-electric/20",
  success: "text-success bg-success/10 border-success/20",
  cyan: "text-cyan bg-cyan/10 border-cyan/20",
  warning: "text-warning bg-warning/10 border-warning/20",
  danger: "text-danger bg-danger/10 border-danger/20",
};

const colorDotMap: Record<string, string> = {
  electric: "bg-electric",
  success: "bg-success",
  cyan: "bg-cyan",
  warning: "bg-warning",
  danger: "bg-danger",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-8">
                <Building2 className="w-4 h-4" />
                Industry Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Security Tailored to<br />
                <span className="text-gradient-cyan">Your Industry</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Purpose-built DPI solutions that address the unique compliance requirements and threat landscapes of your sector.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {industries.map((industry, idx) => (
                <div
                  key={industry.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    idx % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 ${colorMap[industry.color]}`}>
                      <industry.icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{industry.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{industry.description}</p>
                    <Link
                      href="/auth/sign-up"
                      className="inline-flex items-center gap-2 text-electric font-semibold hover:underline"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`p-6 rounded-2xl bg-surface-dark/50 border border-white/5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <ul className="space-y-4">
                      {industry.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${colorDotMap[industry.color]}`} />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why NetShield */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Organizations Choose NetShield</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Global Deployment",
                  description: "Deployed across 40+ countries in enterprises, governments, and critical infrastructure.",
                },
                {
                  icon: Lock,
                  title: "Compliance Ready",
                  description: "Pre-built compliance modules for HIPAA, PCI DSS, GDPR, SOX, and NIST frameworks.",
                },
                {
                  icon: Server,
                  title: "Proven at Scale",
                  description: "Inspecting 10+ petabytes of traffic daily across our customer deployments worldwide.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center p-6 rounded-2xl bg-surface-dark/50 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get a Custom Solution</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Talk to our solutions architects about your industry-specific requirements.
            </p>
            <Link
              href="/auth/sign-up"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-electric-foreground font-semibold rounded-lg hover:bg-electric/90 transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
