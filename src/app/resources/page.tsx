import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Video,
  Download,
  Code,
  Users,
  Calendar,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — NetShield DPI Security",
  description: "Documentation, case studies, whitepapers, webinars, and developer resources for NetShield DPI Security.",
};

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides, API references, and configuration manuals.",
    items: [
      "Quick Start Guide",
      "Installation Manual",
      "API Reference v3.2",
      "Configuration Guide",
      "Troubleshooting Handbook",
    ],
    color: "electric",
  },
  {
    icon: FileText,
    title: "Whitepapers",
    description: "Deep technical research and analysis from our security team.",
    items: [
      "The State of DPI Security 2026",
      "ML-Based Threat Detection: A Deep Dive",
      "Encrypted Traffic Analysis Without Decryption",
      "Zero-Day Detection Using Behavioral Baselining",
    ],
    color: "cyan",
  },
  {
    icon: Video,
    title: "Webinars & Videos",
    description: "Live and recorded sessions with our security engineers.",
    items: [
      "Introduction to NetShield (45 min)",
      "Advanced Threat Hunting with DPI",
      "Compliance Automation Workshop",
      "Customer Panel: Enterprise Deployments",
    ],
    color: "success",
  },
  {
    icon: Code,
    title: "Developer Resources",
    description: "SDKs, code samples, and integration guides for developers.",
    items: [
      "Python SDK",
      "REST API Examples",
      "Go Client Library",
      "Terraform Provider",
      "Docker Compose Templates",
    ],
    color: "warning",
  },
];

const caseStudies = [
  {
    company: "GlobalBank Financial",
    industry: "Financial Services",
    result: "Reduced incident response time by 85%",
    description: "How a Fortune 500 bank deployed NetShield across 200+ branches to achieve real-time threat visibility.",
  },
  {
    company: "MedCore Health Systems",
    industry: "Healthcare",
    result: "Achieved HIPAA compliance in 30 days",
    description: "A regional hospital network used NetShield to monitor medical device traffic and protect patient data.",
  },
  {
    company: "SecureGov Agency",
    industry: "Government",
    result: "Blocked 2.3M threats in the first quarter",
    description: "A federal agency deployed NetShield to protect critical infrastructure from advanced persistent threats.",
  },
];

const colorMap: Record<string, string> = {
  electric: "text-electric bg-electric/10 border-electric/20",
  success: "text-success bg-success/10 border-success/20",
  cyan: "text-cyan bg-cyan/10 border-cyan/20",
  warning: "text-warning bg-warning/10 border-warning/20",
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-success/5 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-8">
                <BookOpen className="w-4 h-4" />
                Resources
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Learn, Build,<br />
                <span className="text-gradient-cyan">Secure.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Everything you need to deploy, configure, and maximize NetShield — from quick starts to deep technical guides.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {resourceCategories.map((cat) => {
                const colorClass = colorMap[cat.color] || colorMap.electric;
                return (
                  <div
                    key={cat.title}
                    className="p-8 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${colorClass}`}>
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">{cat.title}</h2>
                    <p className="text-sm text-muted-foreground mb-6">{cat.description}</p>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group"
                          >
                            <div className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-white transition-colors" />
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Customer Success Stories</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                See how organizations across industries protect their networks with NetShield.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((cs) => (
                <div
                  key={cs.company}
                  className="p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all"
                >
                  <p className="text-xs text-electric font-semibold uppercase tracking-wider mb-2">{cs.industry}</p>
                  <h3 className="font-bold mb-2">{cs.company}</h3>
                  <p className="text-sm text-success font-semibold mb-3">{cs.result}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-electric" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Connect with 12,000+ security professionals using NetShield. Share tips, get help, and stay updated.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/RajdeepDevelopment/netshield-dpi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Code className="w-4 h-4" />
                GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Users className="w-4 h-4" />
                Discord
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
