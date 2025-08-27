import { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Shield, Lock, Eye, Users, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Text Hey | SMS Appointment Booking",
  description:
    "Learn how Text Hey protects your privacy and handles your personal information. Our comprehensive privacy policy explains data collection, usage, and your rights.",
  keywords:
    "privacy policy, data protection, GDPR compliance, SMS booking privacy, personal data, Text Hey privacy",
  openGraph: {
    title: "Privacy Policy - Text Hey",
    description:
      "Learn how Text Hey protects your privacy and handles your personal information.",
    url: "https://texthey.com/privacy",
    siteName: "Text Hey",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 mr-3" style={{ color: "#0fcbf7" }} />
              <h1 className="text-4xl md:text-5xl font-bold gradient-brand-text">
                Privacy Policy
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-sm bg-gray-100">
                <Clock className="w-3 h-3 mr-1" />
                Effective Date: June 30, 2025
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Globe className="w-3 h-3 mr-1" />
                Governed by California Law
              </Badge>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This Privacy Policy describes how Text Hey (&quot;Text Hey&quot;,
              &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects,
              uses, stores, and protects your personal information when you
              interact with our services, website, or SMS-based platform. We are
              committed to maintaining the privacy of all users, whether
              you&apos;re a business client or an end-customer booking service.
            </p>
          </div>

          {/* Introduction Card */}
          <Card className="mb-8 border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: "rgba(15, 203, 247, 0.1)" }}
                >
                  <Users className="w-6 h-6" style={{ color: "#0fcbf7" }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About Text Hey
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Text Hey is a product owned and operated by{" "}
                    <strong>Seroft, Inc.</strong>, a company based in
                    California, USA. All data handling, privacy, and security
                    responsibilities are governed by Seroft, Inc. under
                    applicable U.S. and international laws.
                  </p>
                  <p className="text-gray-700 mt-3 font-medium">
                    By using Text Hey&apos;s website or services, you agree to
                    this Privacy Policy. If you do not agree, please do not use
                    our platform.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: "rgba(15, 203, 247, 0.1)" }}
                  >
                    <Eye className="w-6 h-6" style={{ color: "#0fcbf7" }} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. Information We Collect
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  We may collect the following types of information:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      a. From End-Users (Consumers):
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>· First and last name</li>
                      <li>· Mobile number, Email, Address, Date of Birth</li>
                      <li>· Payment and billing data</li>
                      <li>· Booking preferences (service, date, time)</li>
                      <li>· SMS communications with businesses</li>
                      <li>· Geolocation data</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      b. From Businesses (Clients):
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>· Owner or authorized representative&apos;s name</li>
                      <li>· Mobile number, Email, Address, Date of Birth</li>
                      <li>· Business name, legal name, address, Tax ID</li>
                      <li>
                        · Business registration documents (if and where
                        required)
                      </li>
                      <li>· Service types, duration, fee, and schedules</li>
                      <li>· Staff information</li>
                      <li>· Payment and billing data</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Collect Information */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. How We Collect Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect information in the following ways:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <ul className="space-y-2 text-gray-700">
                    <li>· When users register via SMS or on our website</li>
                    <li>· When businesses onboard through our signup flow</li>
                    <li>
                      · Through cookies, logs, and analytics on our website
                    </li>
                    <li>· From transactional records (payments, SMS logs)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. How We Use Information
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-gray-900 font-medium mb-3">
                    We use the information to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>· Facilitate SMS-based bookings</li>
                    <li>· Verify users through OTP</li>
                    <li>
                      · Send confirmations, reminders, and promotional messages
                    </li>
                    <li>· Provide customer support</li>
                    <li>· Process payments and issue invoices</li>
                    <li>· Improve our platform and user experience</li>
                    <li>
                      · Maintain compliance with legal and regulatory
                      obligations
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Consent and Opt-In */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Consent and Opt-In
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-900 font-medium mb-2">
                    You give explicit consent to receive SMS messages by:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>· Registering via our platform</li>
                    <li>· Sending &quot;Hey&quot; to a business number</li>
                    <li>· Submitting your mobile number for bookings</li>
                  </ul>
                </div>
                <div
                  className="border-l-4 p-4 rounded"
                  style={{
                    borderColor: "#d90d65",
                    backgroundColor: "rgba(217, 13, 101, 0.05)",
                  }}
                >
                  <p className="text-gray-900 font-medium">
                    You can withdraw consent at any time by replying{" "}
                    <strong>&quot;UNSUB&quot;</strong> to our messages.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sharing of Information */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Sharing of Information
                </h2>
                <div
                  className="border-l-4 p-4 rounded mb-4"
                  style={{
                    borderColor: "#0fcbf7",
                    backgroundColor: "rgba(15, 203, 247, 0.05)",
                  }}
                >
                  <p className="text-gray-900 font-bold text-lg mb-2">
                    We do not sell or trade your personal data.
                  </p>
                </div>
                <p className="text-gray-700 mb-3">
                  We only share information with:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>· Subcontractors necessary to deliver services</li>
                  <li>· Regulatory authorities when legally required</li>
                  <li>
                    · Technology providers for hosting, analytics, and
                    performance
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-3 italic">
                  These partners are under contractual obligation to use data
                  only for delivering Text Hey&apos;s services.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention and Storage */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Data Retention and Storage
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-gray-900 font-medium mb-2">
                    We retain your information:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>· As long as you have an account</li>
                    <li>· As needed to provide services</li>
                    <li>· To comply with legal obligations</li>
                  </ul>
                  <p className="text-gray-700 mt-3 font-medium">
                    Top-up credit balances do not expire and will carry forward
                    to the next billing cycle unless used.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: "rgba(217, 13, 101, 0.1)" }}
                  >
                    <Lock className="w-6 h-6" style={{ color: "#d90d65" }} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    7. Security
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  We implement safeguards including:
                </p>

                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>· SSL encryption</li>
                    <li>· Two-factor authentication via OTP</li>
                    <li>· Access controls and firewalls</li>
                    <li>· Regular security audits</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-900 font-medium">
                    While we use industry-standard protections, no method is
                    100% secure.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Sections */}
            {[
              {
                title: "8. Cookies and Web Tracking",
                content: (
                  <div>
                    <p className="text-gray-700 mb-3">
                      Our website may use cookies and third-party analytics
                      (like Google Analytics) to:
                    </p>
                    <ul className="text-gray-700 space-y-1">
                      <li>· Track usage</li>
                      <li>· Save user preferences</li>
                      <li>· Measure engagement</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      Users can manage cookie preferences in their browsers.
                    </p>
                  </div>
                ),
              },
              {
                title: "9. Third-Party Links",
                content: (
                  <p className="text-gray-700">
                    Our site may link to third-party websites. We are not
                    responsible for the privacy practices of these sites.
                  </p>
                ),
              },
              {
                title: "10. Children's Privacy",
                content: (
                  <p className="text-gray-700">
                    Text Hey is not intended for use by children under the age
                    of 13. We do not knowingly collect data from minors.
                  </p>
                ),
              },
              {
                title: "11. Your Rights",
                content: (
                  <div>
                    <p className="text-gray-700 mb-3">You have the right to:</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>· Access the data we store about you</li>
                      <li>· Request corrections or deletion</li>
                      <li>· Opt out of marketing communications</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      To exercise these rights, email us at:{" "}
                      <a
                        href="mailto:support@texthey.com"
                        className="underline"
                        style={{ color: "#0fcbf7" }}
                      >
                        support@texthey.com
                      </a>
                    </p>
                  </div>
                ),
              },
              {
                title: "12. Changes to This Policy",
                content: (
                  <p className="text-gray-700">
                    We reserve the right to modify this Privacy Policy at any
                    time. Updates will be posted on our website with an updated
                    &quot;Effective Date.&quot;
                  </p>
                ),
              },
              {
                title: "13. Jurisdiction",
                content: (
                  <p className="text-gray-700">
                    This Privacy Policy is governed by the laws of the State of
                    California, USA. Any disputes shall be resolved in the
                    courts located in California.
                  </p>
                ),
              },
            ].map((section, index) => (
              <Card key={index} className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  {section.content}
                </CardContent>
              </Card>
            ))}

            {/* Contact Section */}
            <Card className="border-gray-200 gradient-brand">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-white/20 rounded-full mr-3">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      Contact Us
                    </h2>
                  </div>
                  <p className="text-white/90 mb-4">
                    If you have any questions or concerns about our Privacy
                    Policy, please don&apos;t hesitate to reach out:
                  </p>
                  <a
                    href="mailto:support@texthey.com"
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    support@texthey.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              This Privacy Policy was last updated on June 30, 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
