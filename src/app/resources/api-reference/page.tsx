import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Code,
  ArrowRight,
  Shield,
  Key,
  Zap,
  BookOpen,
  ExternalLink,
  Copy,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "API Reference — NetShield DPI Security",
  description: "Complete REST API reference for the NetShield DPI platform.",
};

const endpoints = [
  { method: "GET", path: "/api/v1/sessions", description: "List active inspection sessions", tag: "Core" },
  { method: "GET", path: "/api/v1/sessions/:id", description: "Get details for a specific session", tag: "Core" },
  { method: "POST", path: "/api/v1/sessions", description: "Create a new inspection session", tag: "Core" },
  { method: "DELETE", path: "/api/v1/sessions/:id", description: "Terminate an active session", tag: "Core" },
  { method: "GET", path: "/api/v1/alerts", description: "Query alerts with filters", tag: "Alerts" },
  { method: "POST", path: "/api/v1/alerts/:id/ack", description: "Acknowledge an alert", tag: "Alerts" },
  { method: "GET", path: "/api/v1/traffic/stats", description: "Real-time traffic statistics", tag: "Analytics" },
  { method: "GET", path: "/api/v1/traffic/protocols", description: "Protocol distribution breakdown", tag: "Analytics" },
  { method: "GET", path: "/api/v1/rules", description: "List custom detection rules", tag: "Rules" },
  { method: "POST", path: "/api/v1/rules", description: "Create a detection rule (Lua)", tag: "Rules" },
  { method: "PUT", path: "/api/v1/rules/:id", description: "Update a detection rule", tag: "Rules" },
  { method: "POST", path: "/api/v1/pcap/capture", description: "Start a packet capture", tag: "Forensics" },
];

const methodColors: Record<string, string> = {
  GET: "bg-success/15 text-success border-success/20",
  POST: "bg-electric/15 text-electric border-electric/20",
  PUT: "bg-warning/15 text-warning border-warning/20",
  DELETE: "bg-destructive/15 text-destructive border-destructive/20",
};

const quickstarts = [
  { title: "Authentication", icon: Key, description: "Generate API keys, manage tokens, and configure OAuth for programmatic access." },
  { title: "Quick Start", icon: Zap, description: "Make your first API call in 5 minutes — from authentication to querying live traffic data." },
  { title: "Webhooks", icon: Terminal, description: "Configure real-time event webhooks for alerts, threshold breaches, and session lifecycle events." },
];

export default function APIReferencePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <Code className="w-3.5 h-3.5" />
              API REFERENCE
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Build on <span className="text-gradient-cyan">NetShield</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Full REST API for sessions, alerts, analytics, detection rules, and forensic capture.
            </p>
            <div className="flex items-center justify-center gap-3 max-w-lg mx-auto bg-surface-card border border-white/10 rounded-lg p-1">
              <code className="flex-1 px-4 py-2.5 text-sm font-mono text-muted-foreground">
                curl -H &quot;Authorization: Bearer nsk_...&quot; https://api.netshield.io/v1/sessions
              </code>
              <button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Quickstarts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {quickstarts.map((qs) => (
                <Link key={qs.title} href="#" className="group p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all card-glow">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center mb-4">
                    <qs.icon className="w-5 h-5 text-electric" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-electric transition-colors">{qs.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{qs.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Endpoints</h2>
            <div className="space-y-3">
              {endpoints.map((ep) => (
                <div key={ep.path} className="group flex items-center gap-4 p-4 rounded-xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all">
                  <span className={`flex-shrink-0 inline-flex items-center px-2.5 py-1 rounded text-xs font-bold font-mono border ${methodColors[ep.method]}`}>
                    {ep.method}
                  </span>
                  <code className="flex-shrink-0 text-sm font-mono text-white/80">{ep.path}</code>
                  <span className="hidden sm:block flex-shrink-0 px-2.5 py-1 rounded bg-white/5 text-xs text-muted-foreground">{ep.tag}</span>
                  <span className="ml-auto text-sm text-muted-foreground hidden md:block">{ep.description}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-electric transition-colors flex-shrink-0" />
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