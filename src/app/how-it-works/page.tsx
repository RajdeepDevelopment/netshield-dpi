import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Upload,
  Settings,
  Play,
  CheckCircle2,
  Shield,
  Activity,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works — NetShield DPI Security",
  description: "Learn how NetShield inspects network traffic, detects threats, and responds in real-time — deployed in under 15 minutes.",
};

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Deploy & Connect",
    description:
      "Deploy NetShield as a virtual appliance, container, or hardware appliance. Connect it to your network span, tap, or inline position. Zero configuration changes to your existing infrastructure.",
    details: [
      "OVA, QCOW2, Docker, or bare-metal deployment",
      "Passive monitoring or inline blocking modes",
      "Auto-discovery of network topology",
      "First packet analysis in under 15 minutes",
    ],
    color: "electric",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure & Calibrate",
    description:
      "Our AI assistant analyzes your traffic patterns and automatically configures inspection policies, threat detection thresholds, and alert rules tailored to your environment.",
    details: [
      "AI-powered initial policy generation",
      "Automatic traffic baseline within 24 hours",
      "Pre-built compliance templates",
      "Custom rule creation with visual editor",
    ],
    color: "cyan",
  },
  {
    number: "03",
    icon: Play,
    title: "Monitor & Analyze",
    description:
      "Watch real-time traffic analysis on your dashboard. Every packet is classified, every flow is tracked, and every anomaly is flagged — with full context and risk scoring.",
    details: [
      "Real-time traffic classification dashboard",
      "Per-application and per-user visibility",
      "Historical analysis and trend detection",
      "Customizable alerting and escalation",
    ],
    color: "success",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Respond & Protect",
    description:
      "Automated or manual response to threats — block malicious IPs, quarantine compromised hosts, generate forensic captures, or trigger SOAR playbook workflows.",
    details: [
      "Automated threat containment",
      "SOAR integration for playbook execution",
      "One-click forensic packet capture",
      "Incident timeline reconstruction",
    ],
    color: "warning",
  },
];

const colorMap: Record<string, string> = {
  electric: "text-electric bg-electric/10 border-electric/20",
  success: "text-success bg-success/10 border-success/20",
  cyan: "text-cyan bg-cyan/10 border-cyan/20",
  warning: "text-warning bg-warning/10 border-warning/20",
};

const colorLineMap: Record<string, string> = {
  electric: "bg-electric",
  success: "bg-success",
  cyan: "bg-cyan",
  warning: "bg-warning",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-success/5 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-8">
                <Activity className="w-4 h-4" />
                How It Works
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                From Zero to Protected<br />
                <span className="text-gradient-cyan">In 15 Minutes</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Four simple steps to enterprise-grade deep packet inspection. No consultants required. No infrastructure changes needed.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-0">
              {steps.map((step, idx) => (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-white/10 hidden md:block" />
                  )}

                  <div className="flex gap-6 md:gap-10 py-10">
                    {/* Number */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border font-bold text-lg ${colorMap[step.color]}`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-5 h-5 text-muted-foreground" />
                        <h2 className="text-2xl font-bold">{step.title}</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                        {step.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${step.color === "electric" ? "text-electric" : step.color === "cyan" ? "text-cyan" : step.color === "success" ? "text-success" : "text-warning"}`} />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Under the Hood</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our inspection pipeline processes every packet through multiple analysis stages in microseconds.
            </p>
            <div className="inline-flex flex-wrap items-center gap-3 p-6 rounded-2xl bg-surface-dark/50 border border-white/5">
              {["Packet Capture", "Protocol Decode", "Deep Inspection", "Threat Analysis", "Policy Engine", "Alert & Response"].map((stage, idx) => (
                <div key={stage} className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-lg bg-electric/10 border border-electric/20 text-electric text-sm font-medium">
                    {stage}
                  </div>
                  {idx < 5 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-electric" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your Free Trial</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              30-day full-featured trial. No credit card required. Deploy in your environment today.
            </p>
            <Link
              href="/auth/sign-up"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-electric-foreground font-semibold rounded-lg hover:bg-electric/90 transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
