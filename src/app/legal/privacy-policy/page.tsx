import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CalendarDays, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — NetShield DPI Security",
  description: "How NetShield collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 border-b border-white/5 bg-grid">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6 text-xs font-semibold tracking-widest text-electric uppercase">
              <CalendarDays className="w-4 h-4" />
              <span>Effective: June 1, 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              NetShield Security, Inc. (“NetShield”, “we”, “us”) is committed to protecting the privacy of our users,
              customers, and visitors. This Privacy Policy explains what information we collect, how we use it, and
              the choices you have.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-content space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-electric mb-2">Account & personal data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you create an account, we collect your name, work email, company, and billing information.
                This data is used to provide the service, send transactional emails, and manage your subscription.
              </p>
              <h3 className="text-lg font-semibold text-electric mb-2">Network traffic data</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a deep packet inspection platform, NetShield processes network traffic that flows through your
                infrastructure. We process this data solely on your behalf and under your instructions. We do not
                sell, rent, or share inspection data with third parties for their own purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>To provide, maintain, and improve the NetShield platform.</li>
                <li>To detect, investigate, and prevent security incidents.</li>
                <li>To send service notifications and account communications.</li>
                <li>To comply with legal obligations and enforce our agreements.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We share data only with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li><strong className="text-white">Service providers</strong> — infrastructure, payment processing, and support vendors bound by data processing agreements.</li>
                <li><strong className="text-white">Legal authorities</strong> — when required by law, or to protect the rights and safety of our users.</li>
                <li><strong className="text-white">Business transferees</strong> — in the event of a merger, acquisition, or asset sale.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal data only as long as necessary for the purposes described in this policy.
                Network inspection data is retained according to your configured retention policies (default 90 days)
                and can be purged on demand. You may request deletion of your account and associated data at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have rights to access, correct, delete, or port your personal data,
                and to object to or restrict certain processing. To exercise any of these rights:
              </p>
              <a href="mailto:privacy@netshield.io" className="inline-flex items-center gap-2 px-5 py-3 bg-electric text-electric-foreground font-semibold rounded-lg hover:bg-electric/90 transition-colors">
                privacy@netshield.io
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use industry-standard technical and organizational measures to protect your data, including
                encryption in transit and at rest, access controls, and continuous monitoring. See our{" "}
                <Link href="/legal/security" className="text-electric font-medium hover:underline">Security page</Link> for details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy questions or requests, contact our Data Protection Officer at{" "}
                <a href="mailto:privacy@netshield.io" className="text-electric font-medium hover:underline">privacy@netshield.io</a>{" "}
                or by mail at 200 King St, Suite 1200, San Francisco, CA 94107.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-xs text-muted-foreground">
                This policy was last updated on June 1, 2026. We will notify you of material changes via email or in-product notice.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}