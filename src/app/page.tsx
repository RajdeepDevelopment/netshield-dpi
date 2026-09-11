"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Activity,
  Eye,
  Lock,
  Zap,
  Globe,
  Server,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Network,
  Fingerprint,
  FileSearch,
  Radio,
  Layers,
  ArrowUpRight,
  Play,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

/* ──────────────────────────── HERO SECTION ──────────────────────── */


/* ──────────────────────── HERO SECTION ──────────────────────── */

function HeroSection() {
  const [packetCount, setPacketCount] = useState(0);
  const [threatCount, setThreatCount] = useState(0);

  useEffect(() => {
    const packetInterval = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 12000) + 8000);
    }, 100);
    const threatInterval = setInterval(() => {
      setThreatCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 800);
    return () => {
      clearInterval(packetInterval);
      clearInterval(threatInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-shield-blue/5 rounded-full blur-3xl" />
        {/* Scan line */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent animate-scan-line" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 bg-electric rounded-full animate-pulse" />
              NEXT-GEN DPI ENGINE v4.0
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              See Every
              <br />
              <span className="text-gradient-cyan">Packet.</span>
              <br />
              Stop Every
              <br />
              <span className="text-gradient-blue">Threat.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
              Enterprise-grade deep packet inspection that analyzes traffic at line
              rate — detecting, classifying, and blocking threats before they reach
              your network.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-electric text-surface-dark text-sm font-bold rounded-lg hover:bg-electric/90 transition-all shadow-lg shadow-electric/20"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/5 text-white text-sm font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-all"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Live counters */}
            <div className="flex flex-wrap gap-6">
              <div>
                <div className="text-2xl font-bold font-mono text-electric tabular-nums">
                  {packetCount.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                  Packets Analyzed
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-2xl font-bold font-mono text-red-400 tabular-nums">
                  {threatCount.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                  Threats Blocked
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">
                  99.99%
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                  Uptime SLA
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Animated Shield Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-electric/10 animate-spin" style={{ animationDuration: "30s" }} />
              <div className="absolute inset-4 rounded-full border border-electric/15 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }} />
              <div className="absolute inset-8 rounded-full border border-electric/10 animate-spin" style={{ animationDuration: "20s" }} />

              {/* Rotating data points */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <div
                  key={deg}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `rotate(${deg}deg) translateY(-160px) rotate(-${deg}deg)`,
                  }}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      i % 2 === 0 ? "bg-electric" : "bg-cyan-glow"
                    }`}
                    style={{ opacity: 0.4 + (i % 3) * 0.2 }}
                  />
                </div>
              ))}

              {/* Center shield */}
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="relative animate-shield-pulse">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-electric/20 to-shield-blue/20 rounded-2xl rotate-45 border border-electric/20 flex items-center justify-center">
                    <Shield className="w-16 h-16 lg:w-20 lg:h-20 text-electric -rotate-45" />
                  </div>
                </div>
              </div>

              {/* Floating data packets */}
              {[
                { top: "10%", left: "20%", icon: Lock, delay: 0 },
                { top: "15%", right: "10%", icon: Eye, delay: 0.5 },
                { bottom: "20%", left: "10%", icon: Zap, delay: 1 },
                { bottom: "15%", right: "15%", icon: Fingerprint, delay: 1.5 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-card/80 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <item.icon className="w-5 h-5 text-electric/70" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── TRUSTED BY BAR ────────────────────── */

function TrustedByBar() {
  const companies = [
    "Fortune 500 Finance",
    "Global Telco",
    "Cloud Provider",
    "Defense Agency",
    "Healthcare Network",
    "Tech Unicorn",
  ];

  return (
    <section className="border-y border-white/5 py-8 bg-surface-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/60 mb-6">
          Trusted by security teams at leading enterprises
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((c) => (
            <div
              key={c}
              className="text-sm font-semibold text-white/20 hover:text-white/40 transition-colors tracking-wide"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── FEATURES ──────────────────────── */

const features = [
  {
    icon: Eye,
    title: "Deep Packet Inspection",
    description:
      "Analyze packet payloads at the application layer — identifying protocols, detecting anomalies, and classifying traffic with sub-millisecond latency.",
    color: "from-electric to-cyan-glow",
  },
  {
    icon: AlertTriangle,
    title: "Real-Time Threat Detection",
    description:
      "AI-powered threat intelligence engine identifies malware, C2 communications, data exfiltration, and zero-day exploits as they happen.",
    color: "from-red-400 to-orange-400",
  },
  {
    icon: Fingerprint,
    title: "Application Fingerprinting",
    description:
      "Identify and classify over 5,000+ applications regardless of port, protocol, encryption, or tunneling — including encrypted traffic analysis.",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: BarChart3,
    title: "Network Analytics Dashboard",
    description:
      "Visualize bandwidth usage, top talkers, application mix, and security events with real-time dashboards and historical trend analysis.",
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: Lock,
    title: "TLS/SSL Decryption",
    description:
      "Inspect encrypted traffic at scale with hardware-accelerated TLS decryption, supporting TLS 1.3, Perfect Forward Secrecy, and certificate pinning bypass.",
    color: "from-blue-400 to-indigo-400",
  },
  {
    icon: Zap,
    title: "Inline Threat Prevention",
    description:
      "Block threats at wire speed with integrated IPS, URL filtering, DNS security, and automated response — all without impacting network performance.",
    color: "from-yellow-400 to-amber-400",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-4"
          >
            <Activity className="w-3.5 h-3.5" />
            CORE CAPABILITIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Full Visibility Into
            <br />
            <span className="text-gradient-cyan">Every Packet</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            NetShield DPI combines hardware-accelerated inspection with machine
            learning to deliver unmatched network visibility and threat prevention.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 lg:p-8 rounded-2xl bg-surface-card/50 border border-white/5 hover:border-white/10 transition-all duration-300 card-glow"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-[1px] mb-5`}
              >
                <div className="w-full h-full rounded-xl bg-surface-card flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white/80" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-electric/60 group-hover:text-electric transition-colors">
                Learn more
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── STATS ──────────────────────── */

function StatsSection() {
  const stats = [
    { value: "400Gbps", label: "Inspection Throughput", sublabel: "per appliance" },
    { value: "<1μs", label: "Added Latency", sublabel: "at line rate" },
    { value: "10M+", label: "Packets Per Second", sublabel: "processed inline" },
    { value: "5,000+", label: "Applications", sublabel: "identifiable" },
    { value: "99.99%", label: "Detection Rate", sublabel: "known threats" },
    { value: "24/7", label: "Threat Intel Feed", sublabel: "always updated" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Built for <span className="text-gradient-cyan">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built hardware and software delivering carrier-grade inspection
            without compromising network speed.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 rounded-2xl bg-surface-dark/50 border border-white/5"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gradient-cyan font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── SOLUTIONS ──────────────────────── */

const solutions = [
  {
    icon: Server,
    title: "Data Center Security",
    description:
      "Protect east-west and north-south traffic with inline DPI across your data center fabric.",
    tags: ["Zero Trust", "Microsegmentation", "East-West"],
  },
  {
    icon: Globe,
    title: "Enterprise Perimeter",
    description:
      "Deploy at the network edge for comprehensive perimeter inspection, threat prevention, and compliance reporting.",
    tags: ["NGFW", "IPS", "URL Filtering"],
  },
  {
    icon: Network,
    title: "ISP & Telecom",
    description:
      "Carrier-grade DPI for lawful intercept, traffic management, QoS enforcement, and subscriber analytics.",
    tags: ["Lawful Intercept", "QoS", "Analytics"],
  },
  {
    icon: Radio,
    title: "5G & Edge Networks",
    description:
      "Inline security at the mobile edge with ultra-low latency inspection for 5G core and MEC deployments.",
    tags: ["5G Core", "MEC", "vDPI"],
  },
];

function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-shield-blue/10 border border-shield-blue/20 text-shield-blue text-xs font-semibold tracking-wide mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            SOLUTIONS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Security That <span className="text-gradient-blue">Scales</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From data center to 5G edge, NetShield adapts to your deployment
            model with flexible form factors and cloud-native orchestration.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-surface-card/50 border border-white/5 hover:border-electric/20 transition-all duration-300 card-glow"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center shrink-0">
                  <sol.icon className="w-6 h-6 text-electric" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {sol.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sol.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-electric/70 bg-electric/5 border border-electric/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── HOW IT WORKS ──────────────────────── */

const steps = [
  {
    step: "01",
    title: "Capture",
    icon: Network,
    description:
      "Inline or tap mode captures 100% of network traffic at wire speed via SPAN, TAP, or GRE tunnels.",
  },
  {
    step: "02",
    title: "Inspect",
    icon: FileSearch,
    description:
      "Deep packet and flow analysis decodes protocols, extracts metadata, and decrypts TLS/SSL traffic.",
  },
  {
    step: "03",
    title: "Classify",
    icon: Fingerprint,
    description:
      "Machine learning models classify applications, users, devices, and content with high accuracy.",
  },
  {
    step: "04",
    title: "Protect",
    icon: Shield,
    description:
      "Threat signatures, behavioral analytics, and policy enforcement block threats in real time.",
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-surface-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide mb-4"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            HOW IT WORKS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Four-Stage <span className="text-gradient-cyan">Protection Pipeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            A deterministic, high-throughput pipeline that inspects every packet
            without buffering or introducing latency.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-electric/20 via-electric/40 to-electric/20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-surface-card border border-white/10 flex items-center justify-center relative z-10">
                  <step.icon className="w-7 h-7 text-electric" />
                </div>
                <span className="absolute -top-2 -right-2 text-xs font-bold text-electric/50 font-mono">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <ChevronRight className="hidden lg:block absolute top-16 -right-4 w-6 h-6 text-electric/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── PRICING TEASER ──────────────────────── */

function PricingTeaser() {
  const plans = [
    {
      name: "Express",
      price: "Custom",
      description: "For small to mid-size networks",
      features: [
        "Up to 10 Gbps throughput",
        "Basic DPI + threat detection",
        "500 application signatures",
        "Web-based management",
        "8x5 support",
      ],
      highlighted: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large enterprise networks",
      features: [
        "Up to 100 Gbps throughput",
        "Full DPI + IPS + TLS decrypt",
        "5,000+ application signatures",
        "Centralized management console",
        "24/7 support + SOC integration",
        "API & automation",
      ],
      highlighted: true,
    },
    {
      name: "Carrier",
      price: "Custom",
      description: "For ISPs and telecom operators",
      features: [
        "Up to 400 Gbps throughput",
        "Lawful intercept ready",
        "Subscriber-aware DPI",
        "Carrier-grade HA clustering",
        "Dedicated support team",
        "Custom integrations",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wide mb-4"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            PRICING
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Enterprise <span className="text-gradient-cyan">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Flexible deployment models. Transparent pricing. Contact us for a
            custom quote.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-electric/5 to-surface-card/50 border-electric/30 shadow-lg shadow-electric/5"
                  : "bg-surface-card/50 border-white/5 hover:border-white/10 card-glow"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-electric text-surface-dark text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-gradient-cyan mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-lg transition-all ${
                  plan.highlighted
                    ? "bg-electric text-surface-dark hover:bg-electric/90"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── CTA SECTION ──────────────────────── */

function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-surface-card to-surface-dark border border-white/5 p-12 lg:p-20 text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Ready to See <span className="text-gradient-cyan">Every Threat</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Start a 30-day free trial or schedule a live demo with our security
              engineers. Deploy in under 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-electric text-surface-dark text-sm font-bold rounded-lg hover:bg-electric/90 transition-all shadow-lg shadow-electric/20"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/5 text-white text-sm font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-all"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustedByBar />
        <FeaturesSection />
        <StatsSection />
        <SolutionsSection />
        <HowItWorksSection />
        <PricingTeaser />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
