import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — NetShield DPI Security",
  description: "Latest insights, tutorials, and news from the NetShield security engineering team.",
};

const posts = [
  {
    tag: "Threat Intelligence",
    title: "Understanding Encrypted DNS: How Attackers Hide C2 Traffic",
    excerpt: "Deep analysis of DNS-over-HTTPS and DNS-over-TLS abuse by threat actors, and how DPI can still detect anomalies in encrypted channels.",
    author: "Dr. Sarah Chen",
    date: "Sep 8, 2026",
    readTime: "12 min",
  },
  {
    tag: "Engineering",
    title: "Scaling DPI to 400G: Our Packet Processing Pipeline Rewrite",
    excerpt: "How we rebuilt our inspection engine from the ground up to handle 400 Gbps line-rate traffic using DPDK and hardware offloading.",
    author: "Marcus Rivera",
    date: "Sep 2, 2026",
    readTime: "18 min",
  },
  {
    tag: "Compliance",
    title: "PCI DSS 4.0 and Network Segmentation: A DPI-First Approach",
    excerpt: "Meeting the new PCI DSS 4.0 requirements with automated network segmentation powered by real-time packet classification.",
    author: "Priya Patel",
    date: "Aug 25, 2026",
    readTime: "9 min",
  },
  {
    tag: "Product",
    title: "NetShield v4.2 Release: ML-Powered Anomaly Detection Goes GA",
    excerpt: "Announcing the general availability of our machine learning anomaly detection engine — now with 99.7% accuracy on synthetic traffic.",
    author: "Alex Morgan",
    date: "Aug 18, 2026",
    readTime: "6 min",
  },
  {
    tag: "Research",
    title: "Zero-Day Exploits in IoT Protocols: Lessons from a 6-Month Study",
    excerpt: "Our security research team reveals critical vulnerabilities in MQTT, CoAP, and Zigbee protocols used across 50M+ deployed IoT devices.",
    author: "Dr. Sarah Chen",
    date: "Aug 11, 2026",
    readTime: "15 min",
  },
  {
    tag: "Tutorial",
    title: "Building a Custom Detection Rule with NetShield's Lua API",
    excerpt: "Step-by-step guide to writing Lua detection scripts that trigger alerts on specific application-layer payloads and traffic patterns.",
    author: "Marcus Rivera",
    date: "Aug 4, 2026",
    readTime: "10 min",
  },
];

const tagColors: Record<string, string> = {
  "Threat Intelligence": "bg-electric/10 text-electric border-electric/20",
  Engineering: "bg-cyan-glow/10 text-cyan-glow border-cyan-glow/20",
  Compliance: "bg-shield-blue/10 text-shield-blue border-shield-blue/20",
  Product: "bg-neon-green/10 text-neon-green border-neon-green/20",
  Research: "bg-warning/10 text-warning border-warning/20",
  Tutorial: "bg-electric/10 text-electric border-electric/20",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              BLOG
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Security <span className="text-gradient-cyan">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Technical deep-dives, threat research, product updates, and tutorials from the NetShield engineering team.
            </p>
            <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-card border border-white/10 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20"
                />
              </div>
              <ShimmerButton
                shimmerColor="#00f0ff"
                background="rgba(0, 240, 255, 0.1)"
                borderRadius="0.5rem"
                className="!px-4 !py-2.5 !border-electric/20 !text-electric !text-sm !font-semibold"
              >
                Search
              </ShimmerButton>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.title} href="#" className="group block p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all card-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${tagColors[post.tag] || "bg-white/5 text-white border-white/10"}`}>
                      <Tag className="w-3 h-3" />
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-electric transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-electric opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}