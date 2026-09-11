import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Video,
  Play,
  Calendar,
  Clock,
  ArrowRight,
  Users,
  CheckCircle2,
  Shield,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Webinars — NetShield DPI Security",
  description: "Live and recorded sessions with NetShield security engineers and industry experts.",
};

const upcoming = [
  {
    title: "Building a Zero-Day Detection Pipeline with NetShield + ELK",
    speaker: "Dr. Sarah Chen, Principal Security Researcher",
    date: "Sep 25, 2026",
    time: "2:00 PM EST",
    description: "Learn how to build an end-to-end zero-day detection pipeline combining NetShield's ML engine with Elastic SIEM.",
    live: true,
  },
];

const recorded = [
  {
    title: "Introduction to NetShield: 15-Minute Quick Start",
    duration: "45 min",
    views: "12,400+",
    speaker: "Marcus Rivera",
    topics: ["Architecture overview", "Installation walkthrough", "First detection rule"],
  },
  {
    title: "Advanced Protocol Analysis: HTTP/3, QUIC & TLS 1.3",
    duration: "60 min",
    views: "8,200+",
    speaker: "Priya Patel",
    topics: ["QUIC handshake analysis", "HTTP/3 inspection", "Encrypted SNI detection"],
  },
  {
    title: "Threat Hunting with NetShield: From Alert to Investigation",
    duration: "50 min",
    views: "9,800+",
    speaker: "Alex Morgan",
    topics: ["PCAP forensics", "Custom detection rules", "SIEM integration"],
  },
  {
    title: "Scaling DPI: Performance Tuning for High-Throughput Networks",
    duration: "55 min",
    views: "6,100+",
    speaker: "Marcus Rivera",
    topics: ["DPDK acceleration", "Multi-core scaling", "Hardware offloading"],
  },
];

export default function WebinarsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <Video className="w-3.5 h-3.5" />
              WEBINARS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Learn from <span className="text-gradient-cyan">Experts</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Live workshops and recorded deep-dives with our security engineering team.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-electric" /><NumberTicker value={36500} />+ attendees</span>
              <span className="flex items-center gap-2"><Video className="w-4 h-4 text-electric" /><NumberTicker value={120} />+ sessions</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-electric" /><NumberTicker value={48} />+ hours</span>
            </div>
          </div>
        </section>

        {/* Upcoming */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Upcoming Live Sessions</h2>
            {upcoming.map((w) => (
              <div key={w.title} className="p-8 rounded-2xl bg-surface-dark/50 border border-electric/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 blur-3xl rounded-full" />
                <div className="relative flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    Live
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">{w.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{w.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{w.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{w.time}</span>
                      <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{w.speaker}</span>
                    </div>
                  </div>
                  <ShimmerButton
                    shimmerColor="#00f0ff"
                    background="rgba(0, 240, 255, 0.15)"
                    borderRadius="0.5rem"
                    className="!px-5 !py-2.5 !border-electric/20 !text-electric !text-sm !font-semibold whitespace-nowrap"
                  >
                    Register Now
                  </ShimmerButton>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recorded */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Recorded Sessions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {recorded.map((w) => (
                <div key={w.title} className="group p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all card-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-electric transition-colors">{w.title}</h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{w.duration}</span>
                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{w.views}</span>
                        <span>{w.speaker}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {w.topics.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-electric" />
                        {t}
                      </span>
                    ))}
                  </div>
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