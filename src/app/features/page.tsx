import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Eye,
  Shield,
  Activity,
  Zap,
  Globe,
  Server,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Network,
  Fingerprint,
  FileSearch,
  Layers,
  BarChart3,
  Lock,
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — NetShield DPI Security",
  description: "Explore deep packet inspection, real-time threat detection, protocol analysis, and compliance-ready security monitoring.",
};

const coreFeatures = [
  {
    icon: Eye,
    title: "Deep Packet Inspection",
    description: "Analyze packet payloads at Layer 7 to identify malicious content, data exfiltration, and policy violations invisible to traditional firewalls.",
    color: "electric" as const,
  },
  {
    icon: Activity,
    title: "Real-Time Threat Detection",
    description: "Identify and classify threats as they happen using behavioral analysis, signature matching, and anomaly detection powered by machine learning.",
    color: "success" as const,
  },
  {
    icon: Network,
    title: "Protocol Analysis",
    description: "Dissect and validate 50+ network protocols including HTTP/HTTPS, DNS, SMTP, FTP, SSH, and custom industrial protocols.",
    color: "cyan" as const,
  },
  {
    icon: Shield,
    title: "Zero-Day Protection",
    description: "Detect previously unknown threats through behavioral baselining and entropy analysis without relying on signature databases.",
    color: "warning" as const,
  },
  {
    icon: Lock,
    title: "Encrypted Traffic Analysis",
    description: "Inspection of TLS/SSL traffic without decryption using JA3 fingerprinting, certificate analysis, and metadata inspection.",
    color: "electric" as const,
  },
  {
    icon: Fingerprint,
    title: "Application Fingerprinting",
    description: "Identify applications regardless of port, protocol, or encryption — including shadow IT and unauthorized software usage.",
    color: "cyan" as const,
  },
  {
    icon: FileSearch,
    title: "Data Loss Prevention",
    description: "Monitor and prevent sensitive data from leaving your network through content inspection, regex pattern matching, and DLP policies.",
    color: "danger" as const,
  },
  {
    icon: AlertTriangle,
    title: "Automated Response",
    description: "Trigger automated remediation workflows — block IPs, quarantine hosts, generate tickets, or alert SOC teams within seconds.",
    color: "warning" as const,
  },
  {
    icon: BarChart3,
    title: "Traffic Analytics Dashboard",
    description: "Visualize network traffic patterns, bandwidth utilization, top talkers, and application usage with drill-down capabilities.",
    color: "success" as const,
  },
];

const advancedCapabilities = [
  {
    title: "ML-Powered Classification",
    description: "Our proprietary deep learning models classify traffic with 99.7% accuracy across 200+ application categories.",
    icon: Zap,
  },
  {
    title: "Packet Replay & Forensics",
    description: "Full packet capture and replay capabilities for incident investigation and forensic analysis.",
    icon: Radio,
  },
  {
    title: "Multi-Tenant Architecture",
    description: "Isolated analysis pipelines for managed security service providers (MSSPs) and multi-department deployments.",
    icon: Layers,
  },
  {
    title: "Global Threat Intelligence",
    description: "Real-time feeds from 50+ threat intelligence sources including government CIRTs and private research teams.",
    icon: Globe,
  },
  {
    title: "Hardware Acceleration",
    description: "FPGA and SmartNIC support for line-rate inspection at 100Gbps+ without impacting network performance.",
    icon: Server,
  },
  {
    title: "SIEM Integration",
    description: "Native integrations with Splunk, Elastic SIEM, Microsoft Sentinel, and 40+ other security platforms.",
    icon: CheckCircle2,
  },
];

const colorMap: Record<string, string> = {
  electric: "text-electric bg-electric/10 border-electric/20",
  success: "text-success bg-success/10 border-success/20",
  cyan: "text-cyan bg-cyan/10 border-cyan/20",
  warning: "text-warning bg-warning/10 border-warning/20",
  danger: "text-danger bg-danger/10 border-danger/20",
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-electric/5 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-8">
                <Eye className="w-4 h-4" />
                Platform Features
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                See Every Packet.<br />
                <span className="text-gradient-cyan">Stop Every Threat.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Enterprise-grade deep packet inspection with machine learning-powered threat detection, real-time analytics, and automated response capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Inspection Engine</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The most comprehensive packet analysis engine built for modern network security.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature) => {
                const colorClass = colorMap[feature.color] || colorMap.electric;
                return (
                  <div
                    key={feature.title}
                    className="group p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all hover:bg-surface-dark/80"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${colorClass}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advanced Capabilities */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Advanced Capabilities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technology that goes beyond traditional network monitoring.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCapabilities.map((cap) => (
                <div key={cap.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to See It in Action?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a live demo with our security engineers to see how NetShield protects your network.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/auth/sign-up"
                className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-electric-foreground font-semibold rounded-lg hover:bg-electric/90 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
