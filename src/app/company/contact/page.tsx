import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Mail, MessageSquare, Phone, MapPin, Clock, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — NetShield DPI Security",
  description: "Get in touch with NetShield for sales inquiries, support, partnerships, or general questions.",
};

const offices = [
  {
    city: "San Francisco",
    address: "200 King St, Suite 1200",
    timezone: "PST (UTC−8)",
    label: "Headquarters",
  },
  {
    city: "London",
    address: "30 St Mary Axe, 9th Floor",
    timezone: "GMT (UTC±0)",
    label: "EMEA",
  },
  {
    city: "Tel Aviv",
    address: "14 Rothschild Blvd, Tower A",
    timezone: "IST (UTC+2)",
    label: "R&D Center",
  },
];

const channels = [
  { icon: MessageSquare, title: "Live Chat", description: "Chat with our team — usually replies within 2 minutes.", link: "#", label: "Start chat" },
  { icon: Mail, title: "Email", description: "Reach out for any question — sales, support, or general.", link: "mailto:hello@netshield.io", label: "hello@netshield.io" },
  { icon: Phone, title: "Phone", description: "Call us during business hours for immediate assistance.", link: "tel:+14155551234", label: "+1 (415) 555-1234" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 border-b border-white/5 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wide mb-6">
              <MessageSquare className="w-3.5 h-3.5" />
              CONTACT
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Let&apos;s Talk
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need a demo, have a technical question, or want to explore a partnership — we&apos;re here.
            </p>
          </div>
        </section>

        {/* Contact channels */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
            {/* Left: Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">First name</label>
                    <input
                      type="text"
                      placeholder="Sarah"
                      className="w-full px-4 py-2.5 bg-surface-dark border border-white/10 rounded-lg text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Last name</label>
                    <input
                      type="text"
                      placeholder="Chen"
                      className="w-full px-4 py-2.5 bg-surface-dark border border-white/10 rounded-lg text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/30 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Work email</label>
                  <input
                    type="email"
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-2.5 bg-surface-dark border border-white/10 rounded-lg text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className="w-full px-4 py-2.5 bg-surface-dark border border-white/10 rounded-lg text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Topic</label>
                  <select className="w-full px-4 py-2.5 bg-surface-dark border border-white/10 rounded-lg text-sm text-white/80 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/30 transition-colors">
                    <option>Technical Support</option>
                    <option>Sales Inquiry</option>
                    <option>Partnership</option>
                    <option>Press / Media</option>
                    <option>General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-2.5 bg-surface-dark border border-white/10 rounded-lg text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/30 transition-colors resize-none"
                  />
                </div>
                <ShimmerButton
                  shimmerColor="#00f0ff"
                  background="rgba(0, 240, 255, 0.15)"
                  borderRadius="0.5rem"
                  className="!w-full !py-3 !text-sm !font-semibold !border-electric/20 !text-electric"
                >
                  Send Message
                </ShimmerButton>
              </form>
            </div>

            {/* Right: channels + offices */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">Other ways to reach us</h2>
                <div className="space-y-4">
                  {channels.map((ch) => (
                    <div key={ch.title} className="p-5 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0">
                          <ch.icon className="w-5 h-5 text-electric" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{ch.title}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5 mb-2">{ch.description}</p>
                          <a href={ch.link} className="text-sm text-electric font-medium hover:underline">
                            {ch.label}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Global Offices</h3>
                <div className="space-y-3">
                  {offices.map((o) => (
                    <div key={o.city} className="flex items-start gap-3 p-4 rounded-xl bg-surface-dark/50 border border-white/5">
                      <MapPin className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{o.city}</span>
                          <span className="px-2 py-0.5 rounded bg-white/5 text-xs text-muted-foreground">{o.label}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{o.address}</p>
                        <p className="text-xs text-muted-foreground/60 mt-0.5 inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {o.timezone}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}