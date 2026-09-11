import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  FileText,
  Calendar,
  Clock,
  ArrowRight,
  Download,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Whitepapers — NetShield DPI Security",
  description: "Deep technical research and analysis from the NetShield security team.",
};

const whitepapers = [
  {
    title: "The State of DPI Security 2026",
    summary: "Our annual report covering the global threat landscape, new attack vectors, and how deep packet inspection is evolving to meet modern challenges.",
    date: "2026",
    pages: 64,
    color: "electric",
  },
  {
    title: "ML-Based Threat Detection: A Deep Dive",
    summary: "How we train and deploy machine learning models for real-time threat classification at line rate — from feature engineering to model serving.",
    date: "2026",
    pages: 42,
    color: "cyan-glow",
  },
  {
    title: "Encrypted Traffic Analysis Without Decryption",
    summary: "Techniques for identifying malware, C2 channels, and exfiltration patterns in TLS 1.3 traffic using metadata analysis and behavioral fingerprinting.",
    date: "2025",
    pages: 38,
    color: "neon-green",
  },
  {
    title: "Zero-Day Detection Using Behavioral Baselining",
    summary: "A practical guide to building behavioral baselines that automatically surface anomalous network activity indicative of zero-day exploits.",
    date: "2025",
    pages: 51,
    color: "shield-blue",
  },
];

const colorMap: Record<string, string> = {
  electric: "text-electric bg-electric/10 border-electric/20",
  "cyan-glow": "text-cyan-glow bg-cyan-glow/10 border-cyan-glow/20",
  "neon-green": "text-neon-green bg-neon-green/10 border-neon-green/20",
  "shield-blue": "text-shield-blue bg-shield-blue/10 border-shield-blue/20",
};

export default function WhitepapersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <FileText className="w-3.5 h-3.5" />
              WHITEPAPERS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Deep <span className="text-gradient-cyan">Research</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Peer-reviewed technical research from our security engineering and data science teams.
            </p>
          </div>
        </section>

        {/* Marquee ticker */}
        <section className="py-6 border-b border-white/5 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            {["Deep Packet Inspection", "Threat Intelligence", "Machine Learning", "Zero Trust", "Encrypted Traffic", "Network Forensics", "Behavioral Analysis", "Incident Response"].map((tag) => (
              <span key={tag} className="mx-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground whitespace-nowrap">
                {tag}
              </span>
            ))}
          </Marquee>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {whitepapers.map((wp) => (
              <div key={wp.title} className="group flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all card-glow">
                <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2 w-full sm:w-32">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium border ${colorMap[wp.color]}`}>
                    <Shield className="w-3 h-3" />
                    {wp.date}
                  </span>
                  <span className="text-xs text-muted-foreground">{wp.pages} pages</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-electric transition-colors">{wp.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{wp.summary}</p>
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-electric/10 text-electric border border-electric/20 text-sm font-semibold rounded-lg hover:bg-electric/20 transition-all">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors">
                      Read Online <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}