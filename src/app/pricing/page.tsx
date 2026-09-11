import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Check,
  ArrowRight,
  Zap,
  Shield,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — NetShield DPI Security",
  description: "Transparent pricing for NetShield DPI. Start free, scale to enterprise. No hidden fees.",
};

const plans = [
  {
    name: "Community",
    description: "For small labs and evaluation",
    price: "Free",
    period: "forever",
    icon: Shield,
    color: "electric",
    highlight: false,
    features: [
      "Up to 1 Gbps throughput",
      "5 concurrent inspection sessions",
      "Basic protocol analysis",
      "Community support",
      "7-day log retention",
      "Open-source integrations",
    ],
    cta: "Start Free",
    ctaHref: "/auth/sign-up",
  },
  {
    name: "Professional",
    description: "For growing security teams",
    price: "$299",
    period: "/month",
    icon: Zap,
    color: "cyan",
    highlight: true,
    features: [
      "Up to 10 Gbps throughput",
      "Unlimited inspection sessions",
      "ML-powered threat detection",
      "Real-time alerting dashboard",
      "90-day log retention",
      "Email & chat support",
      "API access",
      "SIEM integrations",
      "Custom detection rules",
    ],
    cta: "Start 30-Day Trial",
    ctaHref: "/auth/sign-up",
  },
  {
    name: "Enterprise",
    description: "For large-scale deployments",
    price: "Custom",
    period: "",
    icon: Building2,
    color: "warning",
    highlight: false,
    features: [
      "100 Gbps+ throughput",
      "Unlimited everything",
      "Advanced ML & zero-day detection",
      "Dedicated support engineer",
      "Unlimited log retention",
      "On-premise deployment option",
      "FPGA/SmartNIC acceleration",
      "Multi-tenant architecture",
      "Custom compliance modules",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    ctaHref: "/#contact",
  },
];

const colorMap: Record<string, string> = {
  electric: "border-electric/30",
  cyan: "border-cyan/50",
  warning: "border-warning/30",
};


const colorBtnMap: Record<string, string> = {
  electric: "bg-electric/10 text-electric border-electric/20 hover:bg-electric/20",
  cyan: "bg-cyan text-white hover:bg-cyan/90",
  warning: "bg-warning/10 text-warning border-warning/20 hover:bg-warning/20",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-warning/5 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 text-warning text-sm font-medium mb-8">
                Simple Pricing
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Start Free.<br />
                <span className="text-gradient-cyan">Scale Without Limits.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                No surprise fees. No per-node licensing. Choose the plan that fits your security needs.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 border bg-surface-dark/50 transition-all hover:bg-surface-dark/80 ${
                    plan.highlight
                      ? `${colorMap[plan.color]} shadow-lg shadow-cyan/5 scale-[1.02]`
                      : "border-white/5"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan text-white text-xs font-bold rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${
                    plan.color === "cyan"
                      ? "bg-cyan/10 border-cyan/20 text-cyan"
                      : plan.color === "electric"
                      ? "bg-electric/10 border-electric/20 text-electric"
                      : "bg-warning/10 border-warning/20 text-warning"
                  }`}>
                    <plan.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.ctaHref}
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-lg border transition-all ${colorBtnMap[plan.color]}`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is there really a free tier?",
                  a: "Yes. The Community plan is completely free forever with up to 1 Gbps inspection. Perfect for labs, education, and small environments.",
                },
                {
                  q: "Can I switch plans at any time?",
                  a: "Absolutely. Upgrade or downgrade your plan at any time. When upgrading, you get immediate access to new features. When downgrading, the change takes effect at the end of your billing cycle.",
                },
                {
                  q: "Do you offer annual billing discounts?",
                  a: "Yes. Annual billing saves you 20% on Professional and Enterprise plans. Contact our sales team for custom annual pricing.",
                },
                {
                  q: "What's included in the 30-day trial?",
                  a: "The Professional trial includes all Enterprise features — unlimited throughput, all detection modules, full API access, and SIEM integrations. No credit card required.",
                },
                {
                  q: "How does throughput pricing work?",
                  a: "Our pricing is per-appliance, not per-bandwidth. The Professional plan supports up to 10 Gbps per appliance. For higher throughput, the Enterprise plan scales with hardware acceleration.",
                },
              ].map((item) => (
                <div key={item.q} className="p-6 rounded-2xl bg-surface-dark/50 border border-white/5">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
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
