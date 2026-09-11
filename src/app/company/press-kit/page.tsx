import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Download,
  Image,
  FileText,
  Shield,
  Copy,
  ArrowDown,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Press Kit — NetShield DPI Security",
  description: "Brand assets, logos, boilerplate copy, and press resources for NetShield DPI Security.",
};

const assets = [
  {
    title: "Primary Logo (SVG)",
    description: "NetShield mark for light and dark backgrounds.",
    icon: Image,
    format: "SVG",
    size: "2 KB",
  },
  {
    title: "Wordmark (SVG)",
    description: "Full NetShield wordmark with tagline.",
    icon: Image,
    format: "SVG",
    size: "4 KB",
  },
  {
    title: "Logo Lockup (PNG)",
    description: "Mark + wordmark lockup for social and press.",
    icon: Image,
    format: "PNG",
    size: "85 KB",
  },
  {
    title: "Product Screenshot Pack",
    description: "High-res dashboard and detection UI screenshots.",
    icon: Image,
    format: "ZIP",
    size: "4.2 MB",
  },
  {
    title: "Brand Guidelines",
    description: "Color palette, typography, usage rules, and examples.",
    icon: FileText,
    format: "PDF",
    size: "1.8 MB",
  },
  {
    title: "Company Overview",
    description: "One-pager with key stats, mission, and timeline.",
    icon: FileText,
    format: "PDF",
    size: "320 KB",
  },
];

const boilerplates = [
  {
    label: "Short",
    text: "NetShield is an enterprise deep packet inspection platform that delivers real-time network visibility, ML-powered anomaly detection, and zero-day threat identification at line rate.",
  },
  {
    label: "Long",
    text: "NetShield is an enterprise-grade deep packet inspection (DPI) platform built for organizations requiring full network visibility and real-time threat detection. Powered by hardware-accelerated inspection engines and machine-learning anomaly detection, NetShield analyzes traffic at line rate across 10 Gbps+ links with sub-millisecond latency. Trusted by banks, telcos, hospitals, and government agencies in 40+ countries, NetShield combines protocol detection (70+ protocols), zero-day identification, custom Lua rule authoring, and forensics-grade packet capture in a single, auditable platform.",
  },
];

export default function PressKitPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <Shield className="w-3.5 h-3.5" />
              PRESS KIT
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              NetShield Brand Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Logos, brand guidelines, product screenshots, and boilerplate copy for press coverage.
            </p>
            <ShimmerButton
              shimmerColor="#00f0ff"
              background="rgba(0, 240, 255, 0.15)"
              borderRadius="0.5rem"
              className="!px-6 !py-3 !text-sm !font-semibold !border-electric/20 !text-electric"
            >
              <Download className="w-4 h-4 mr-2 inline" />
              Download Full Kit
            </ShimmerButton>
          </div>
        </section>

        {/* Assets */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Brand Assets</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assets.map((a) => (
                <div key={a.title} className="group relative p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all overflow-hidden card-glow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center">
                      <a.icon className="w-5 h-5 text-electric" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 rounded bg-white/5 font-mono">{a.format}</span>
                      <span>{a.size}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-sm mb-1">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{a.description}</p>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
                    <ArrowDown className="w-4 h-4" /> Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Boilerplate */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Boilerplate Copy</h2>
            <div className="space-y-6">
              {boilerplates.map((bp) => (
                <div key={bp.label} className="relative p-6 rounded-2xl bg-surface-dark/50 border border-white/5 overflow-hidden">
                  <BorderBeam duration={8} size={80} colorFrom="#00f0ff" colorTo="#06d6a0" className="opacity-30" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded bg-white/5 text-xs font-semibold text-white/70">{bp.label}</span>
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10 transition-colors">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{bp.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Press Inquiries</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              For interview requests, press coverage, or media assets, contact our communications team.
            </p>
            <a
              href="mailto:press@netshield.io"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-electric-foreground font-semibold rounded-lg hover:bg-electric/90 transition-colors"
            >
              press@netshield.io <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}