import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — NetShield DPI Security",
  description: "The agreement governing your use of the NetShield platform.",
};

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Terms of Service</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              These Terms of Service (“Terms”) govern your access to and use of the NetShield platform,
              website, and related services (collectively, the “Service”).
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By creating an account or using the Service, you agree to be bound by these Terms. If you are using
                the Service on behalf of an organization, you represent that you have authority to bind that
                organization to these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Use of the Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms. You will not:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>Use the Service to violate any applicable law or regulation.</li>
                <li>Attempt to gain unauthorized access to the Service, other accounts, or connected systems.</li>
                <li>Reverse engineer, decompile, or disassemble the Service or its components.</li>
                <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                <li>Resell or sublicense the Service without our prior written consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Accounts & Credentials</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activity that occurs under your account. You must notify us immediately of any unauthorized use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                API keys act as credentials. Treat them like passwords — never commit them to source control or
                share them with unauthorized parties. We may rotate or revoke keys suspected of exposure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Fees & Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                Paid plans are billed in advance on a monthly or annual basis. Fees are non-refundable except where
                required by law. We may change pricing with 30 days&apos; notice; continued use after the change
                constitutes acceptance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service, including all software, documentation, and branding, is owned by NetShield and its
                licensors. We grant you a limited, non-exclusive, non-transferable license to use the Service
                during your subscription term. Custom detection rules you author remain your intellectual property.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service may expose information about your network traffic and security posture. Both parties
                agree to hold each other&apos;s confidential information in confidence and use it only to perform
                obligations under these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may cancel your subscription at any time from the dashboard. We may suspend or terminate
                accounts that violate these Terms. Upon termination, your data will be deleted in accordance with
                our retention policy, unless legal obligations require otherwise.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Disclaimers & Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Service is provided “as is” without warranties of any kind. NetShield is not liable for
                indirect, incidental, or consequential damages. Our total liability is limited to the amount paid
                by you in the 12 months preceding the claim.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                NetShield is a detection tool, not a guarantee of security. No technology can prevent all attacks.
                You remain responsible for your overall security posture.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. Material changes will be communicated via email or
                in-product notice at least 30 days in advance. Continued use of the Service constitutes acceptance
                of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about these Terms? Contact us at{" "}
                <a href="mailto:legal@netshield.io" className="text-electric font-medium hover:underline">legal@netshield.io</a>.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-xs text-muted-foreground">
                These Terms were last updated on June 1, 2026, and are governed by the laws of the State of
                California, without regard to conflict-of-law principles.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}