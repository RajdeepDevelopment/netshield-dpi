import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
  Coffee,
  GraduationCap,
  Globe,
  HeartPulse,
  Laptop,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — NetShield DPI Security",
  description: "Join NetShield and help build the deep packet inspection platform protecting critical networks worldwide.",
};

const jobs = [
  { title: "Senior Backend Engineer — Packet Processing", team: "Engineering", location: "Remote · US / EU", type: "Full-time", icon: Briefcase },
  { title: "Machine Learning Engineer — Network Anomaly Detection", team: "Research", location: "San Francisco, CA", type: "Full-time", icon: Briefcase },
  { title: "Security Researcher — Protocol & Malware Analysis", team: "Threat Intel", location: "Remote · Global", type: "Full-time", icon: Briefcase },
  { title: "Frontend Engineer — Security Analytics Platform", team: "Engineering", location: "Remote · US / EU", type: "Full-time", icon: Briefcase },
  { title: "Solutions Engineer — Post-Sales", team: "Customer Success", location: "London, UK", type: "Full-time", icon: Briefcase },
  { title: "Technical Writer — Security Documentation", team: "Documentation", location: "Remote · Global", type: "Contract", icon: Briefcase },
];

const perks = [
  { icon: Coffee, title: "Remote-first", description: "Work from anywhere. We fund home offices and co-working memberships." },
  { icon: HeartPulse, title: "Health & Wellness", description: "100% paid health, dental, and vision. Mental health support included." },
  { icon: GraduationCap, title: "Learning Budget", description: "$2k/year for courses, conferences, certifications, and books." },
  { icon: Laptop, title: "Latest Gear", description: "Top-of-the-line laptop, monitors, and any hardware you need." },
  { icon: Globe, title: "Global Retreats", description: "We meet twice a year for company retreats across the world." },
  { icon: Rocket, title: "Equity Package", description: "Every employee gets meaningful equity in the company." },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <Briefcase className="w-3.5 h-3.5" />
              CAREERS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Do the Most Important Work <span className="text-gradient-cyan">of Your Career</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Join a team of 250+ security researchers, engineers, and product builders working on
              the hardest problems in network security.
            </p>
            <ShimmerButton
              shimmerColor="#00f0ff"
              background="rgba(0, 240, 255, 0.15)"
              borderRadius="0.5rem"
              className="!px-6 !py-3 !text-sm !font-semibold !border-electric/20 !text-electric"
            >
              View Open Roles
            </ShimmerButton>
          </div>
        </section>

        {/* Perks */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why NetShield</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We take care of the essentials so you can focus on the mission.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((p) => (
                <div key={p.title} className="p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all card-glow">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-electric" />
                  </div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">Open Roles</h2>
                <p className="text-muted-foreground mt-2">{jobs.length} positions · Updated weekly</p>
              </div>
              <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 font-semibold rounded-lg hover:bg-white/10 text-sm transition-colors">
                <Globe className="w-4 h-4" /> All Locations
              </Link>
            </div>
            <div className="space-y-4">
              {jobs.map((job) => (
                <Link
                  key={job.title}
                  href="#"
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-electric/20 hover:bg-surface-card/50 transition-all"
                >
                  <div className="flex-1">
                    <h3 className="font-bold group-hover:text-electric transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5"><job.icon className="w-4 h-4" /> {job.team}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-electric group-hover:translate-x-1 transition-all flex-shrink-0" />
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