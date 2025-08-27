import { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  FileText,
  Clock,
  Globe,
  Users,
  CreditCard,
  MessageSquare,
  Shield,
  AlertTriangle,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Text Hey | SMS Appointment Booking",
  description:
    "Read the Terms of Service for Text Hey SMS appointment booking platform. Understand your rights and responsibilities when using our services.",
  keywords:
    "terms of service, legal agreement, SMS booking terms, user agreement, Text Hey terms",
  openGraph: {
    title: "Terms of Service - Text Hey",
    description:
      "Read the Terms of Service for Text Hey SMS appointment booking platform.",
    url: "https://texthey.com/terms",
    siteName: "Text Hey",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText
                className="w-12 h-12 mr-3"
                style={{ color: "#0fcbf7" }}
              />
              <h1 className="text-4xl md:text-5xl font-bold gradient-brand-text">
                Terms of Service
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
              This Terms of Service Agreement (&quot;Agreement&quot;) is entered
              into by and between you (&quot;User,&quot; &quot;you,&quot; or
              &quot;your&quot;) and Text Hey, a product of Seroft, Inc.,
              (&quot;Text Hey,&quot; &quot;Company,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) and governs your access and
              use of the Text Hey platform, including its website, mobile tools,
              text messaging services, APIs, and software provided by or on
              behalf of Text Hey (collectively, the &quot;Services&quot;).
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
                  <Scale className="w-6 h-6" style={{ color: "#0fcbf7" }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Agreement Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    This Agreement is entered into between you and{" "}
                    <strong>Text Hey</strong>, a product of{" "}
                    <strong>Seroft, Inc.</strong>, and governs your access and
                    use of our SMS-based appointment booking platform.
                  </p>
                  <p className="text-gray-700 font-medium">
                    By accessing or using any part of the Services, you
                    acknowledge that you have read, understood, and agree to be
                    bound by this Agreement, along with our Privacy Policy and
                    any other applicable legal policies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Overview of Services */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: "rgba(15, 203, 247, 0.1)" }}
                  >
                    <MessageSquare
                      className="w-6 h-6"
                      style={{ color: "#0fcbf7" }}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. Overview of Services
                  </h2>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    Text Hey provides a communications and appointment booking
                    platform enabling end-users (&quot;Customers&quot;) to
                    interact with registered service providers
                    (&quot;Businesses&quot;) via SMS and web-based interfaces.
                  </p>
                </div>

                <div
                  className="border-l-4 p-4 rounded"
                  style={{
                    borderColor: "#d90d65",
                    backgroundColor: "rgba(217, 13, 101, 0.05)",
                  }}
                >
                  <div className="flex items-start gap-2">
                    <AlertTriangle
                      className="w-5 h-5 mt-0.5"
                      style={{ color: "#d90d65" }}
                    />
                    <div>
                      <p className="text-gray-900 font-medium mb-1">
                        Important Notice
                      </p>
                      <p className="text-gray-800 text-sm">
                        Text Hey does not offer or provide the actual services
                        rendered by Businesses. It only facilitates the digital
                        interaction and scheduling of services. All service
                        fulfillment, cancellations, performance, and disputes
                        rest solely with the Business.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Acceptance of Terms */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: "rgba(217, 13, 101, 0.1)" }}
                  >
                    <Users className="w-6 h-6" style={{ color: "#d90d65" }} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. Acceptance of Terms
                  </h2>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    By accessing or using the Services, you acknowledge that you
                    have read, understood, and agree to be bound by these Terms
                    and all applicable laws and regulations. If you do not agree
                    with any of these terms, you are prohibited from using or
                    accessing this site and services.
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      · Your acceptance creates a legally binding agreement
                      between you and TextHey
                    </li>
                    <li>
                      · These Terms may be updated from time to time, and
                      continued use constitutes acceptance of any changes
                    </li>
                    <li>
                      · If you are entering into this agreement on behalf of a
                      company or organization, you represent that you have the
                      authority to bind such entity
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility and User Accounts */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Eligibility and User Accounts
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    To use our Services, you must be at least 18 years old and
                    capable of forming a binding contract. If you are using the
                    Services on behalf of an organization, you represent that
                    you are authorized to bind that organization to these Terms.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Account Registration Requirements:
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      · You must provide accurate, complete, and current
                      information during registration
                    </li>
                    <li>
                      · You must maintain and update your account information
                    </li>
                    <li>
                      · You are responsible for maintaining the confidentiality
                      of your account credentials
                    </li>
                    <li>
                      · You may not share your account or allow others to use
                      your account
                    </li>
                    <li>
                      · You are responsible for all activities that occur under
                      your account
                    </li>
                    <li>
                      · You must notify us immediately of any unauthorized use
                      of your account
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Description of Services */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: "rgba(15, 203, 247, 0.1)" }}
                  >
                    <CreditCard
                      className="w-6 h-6"
                      style={{ color: "#0fcbf7" }}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    4. Description of Services
                  </h2>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    TextHey provides a business communication and appointment
                    booking platform that enables:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>· SMS-based customer communication and engagement</li>
                    <li>· Online appointment booking and scheduling</li>
                    <li>· Automated appointment reminders and confirmations</li>
                    <li>· Customer management tools</li>
                    <li>· Marketing and promotional messaging capabilities</li>
                    <li>· Analytics and reporting features</li>
                    <li>· Integration with business websites and systems</li>
                  </ul>
                </div>

                <div
                  className="border-l-4 p-4 rounded"
                  style={{
                    borderColor: "#d90d65",
                    backgroundColor: "rgba(217, 13, 101, 0.05)",
                  }}
                >
                  <div className="flex items-start gap-2">
                    <AlertTriangle
                      className="w-5 h-5 mt-0.5"
                      style={{ color: "#d90d65" }}
                    />
                    <div>
                      <p className="text-gray-900 font-medium mb-1">
                        Important Notice
                      </p>
                      <p className="text-gray-800 text-sm">
                        TextHey acts as a technology platform only. We do not
                        provide the actual services offered by businesses using
                        our platform. All service delivery, quality, and
                        customer satisfaction remain the sole responsibility of
                        the individual businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Conduct and Prohibited Uses */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. User Conduct and Prohibited Uses
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    You agree to use the Services only for lawful purposes and
                    in accordance with these Terms. You agree not to:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      · Use the Services for any illegal, harmful, or fraudulent
                      purpose
                    </li>
                    <li>
                      · Send spam, unsolicited messages, or engage in phishing
                      activities
                    </li>
                    <li>
                      · Violate any applicable laws, regulations, or third-party
                      rights
                    </li>
                    <li>
                      · Attempt to gain unauthorized access to our systems or
                      user accounts
                    </li>
                    <li>· Interfere with or disrupt the Services or servers</li>
                    <li>
                      · Use automated scripts, bots, or similar tools without
                      permission
                    </li>
                    <li>
                      · Impersonate any person or entity or misrepresent your
                      affiliation
                    </li>
                    <li>
                      · Upload or transmit viruses, malware, or other harmful
                      code
                    </li>
                    <li>
                      · Engage in any form of harassment, abuse, or threatening
                      behavior
                    </li>
                    <li>
                      · Collect or harvest information about other users without
                      consent
                    </li>
                  </ul>
                </div>
                <div
                  className="border-l-4 p-4 rounded"
                  style={{
                    borderColor: "#d90d65",
                    backgroundColor: "rgba(217, 13, 101, 0.05)",
                  }}
                >
                  <p className="text-gray-900 font-medium text-sm">
                    Violation of these terms may result in immediate suspension
                    or termination of your account without notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms and Billing */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Payment Terms and Billing
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    By subscribing to any paid plan, you agree to pay all
                    applicable fees and charges. Payment terms include:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      · All fees are due in advance and are non-refundable
                      unless otherwise stated
                    </li>
                    <li>
                      · Subscription fees will be charged on a recurring basis
                      (monthly or annually)
                    </li>
                    <li>
                      · You authorize us to charge your chosen payment method
                      for all applicable fees
                    </li>
                    <li>
                      · Failed payments may result in service suspension until
                      payment is resolved
                    </li>
                    <li>
                      · We reserve the right to change our pricing with 30
                      days&apos; notice
                    </li>
                    <li>· All prices are in USD unless otherwise specified</li>
                    <li>· Taxes, if applicable, are your responsibility</li>
                  </ul>
                </div>
                <div
                  className="border-l-4 p-4 rounded"
                  style={{
                    borderColor: "#0fcbf7",
                    backgroundColor: "rgba(15, 203, 247, 0.05)",
                  }}
                >
                  <p className="text-gray-900 font-medium">
                    Payments are processed securely through third-party payment
                    processors. We do not store your complete payment
                    information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cancellation and Refunds */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Cancellation and Refunds
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    You may cancel your subscription at any time through your
                    account settings. Cancellation terms include:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      · Cancellations take effect at the end of your current
                      billing period
                    </li>
                    <li>
                      · No refunds will be provided for unused portions of your
                      subscription
                    </li>
                    <li>
                      · You will retain access to paid features until the end of
                      your billing period
                    </li>
                    <li>
                      · Unused credits and features will be forfeited upon
                      cancellation
                    </li>
                    <li>
                      · We reserve the right to terminate accounts that violate
                      these Terms
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Intellectual Property
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    The Services and all related content, features, and
                    functionality are owned by TextHey and are protected by
                    intellectual property laws. This includes:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>· Software, code, and algorithms</li>
                    <li>· Trademarks, logos, and brand elements</li>
                    <li>· Text, graphics, and user interface designs</li>
                    <li>· Documentation and user guides</li>
                    <li>· Any derivative works or improvements</li>
                  </ul>
                </div>
                <div
                  className="border-l-4 p-4 rounded"
                  style={{
                    borderColor: "#d90d65",
                    backgroundColor: "rgba(217, 13, 101, 0.05)",
                  }}
                >
                  <p className="text-gray-900 font-medium text-sm">
                    You may not copy, modify, distribute, or create derivative
                    works without our written permission.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data Protection */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Privacy and Data Protection
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    Your privacy is important to us. Our collection, use, and
                    protection of your personal information is governed by our
                    Privacy Policy, which is incorporated into these Terms by
                    reference. By using our Services, you consent to:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      · Collection and processing of your personal information
                      as described in our Privacy Policy
                    </li>
                    <li>· Use of cookies and similar tracking technologies</li>
                    <li>
                      · Storage and processing of data in the United States and
                      other countries
                    </li>
                    <li>
                      · Sharing of information with third-party service
                      providers as necessary
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Third-Party Services
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    Our Services may integrate with or provide access to
                    third-party services, websites, or applications. Please
                    note:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>· We do not control or endorse third-party services</li>
                    <li>
                      · Third-party services have their own terms and privacy
                      policies
                    </li>
                    <li>
                      · We are not responsible for third-party service
                      availability or functionality
                    </li>
                    <li>· Use of third-party services is at your own risk</li>
                    <li>
                      · We may discontinue integrations at any time without
                      notice
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Service Availability and Modifications */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Service Availability and Modifications
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    We strive to provide reliable service but cannot guarantee
                    uninterrupted availability. We reserve the right to:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      · Modify, update, or discontinue any aspect of the
                      Services
                    </li>
                    <li>
                      · Perform scheduled maintenance that may temporarily
                      interrupt service
                    </li>
                    <li>
                      · Implement changes to improve security, functionality, or
                      compliance
                    </li>
                    <li>
                      · Suspend service for technical issues or security
                      concerns
                    </li>
                    <li>· Set usage limits or restrictions as needed</li>
                  </ul>
                </div>
                <div
                  className="border-l-4 p-4 rounded"
                  style={{
                    borderColor: "#0fcbf7",
                    backgroundColor: "rgba(15, 203, 247, 0.05)",
                  }}
                >
                  <p className="text-gray-900 font-medium text-sm">
                    We will provide reasonable notice of significant changes
                    when possible.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers and Warranties */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Disclaimers and Warranties
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
                    AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND. WE EXPRESSLY
                    DISCLAIM:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      · All express and implied warranties, including
                      merchantability and fitness for a particular purpose
                    </li>
                    <li>
                      · Warranties regarding security, accuracy, or reliability
                    </li>
                    <li>
                      · Guarantees that the Services will be uninterrupted or
                      error-free
                    </li>
                    <li>· Warranties that defects will be corrected</li>
                    <li>
                      · Any warranties arising from course of dealing or usage
                      of trade
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  13. Limitation of Liability
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, TEXTHEY SHALL NOT BE
                    LIABLE FOR:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      · Indirect, incidental, special, consequential, or
                      punitive damages
                    </li>
                    <li>
                      · Loss of profits, revenue, data, or business
                      opportunities
                    </li>
                    <li>· Service interruptions or delays</li>
                    <li>· Third-party actions or omissions</li>
                    <li>
                      · Security breaches not directly caused by our negligence
                    </li>
                  </ul>
                </div>
                <div
                  className="border-l-4 p-4 rounded"
                  style={{
                    borderColor: "#d90d65",
                    backgroundColor: "rgba(217, 13, 101, 0.05)",
                  }}
                >
                  <p className="text-gray-900 font-bold text-sm">
                    Our total liability shall not exceed the amount you paid us
                    in the 12 months preceding the claim.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  14. Indemnification
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    You agree to indemnify, defend, and hold harmless TextHey
                    and its officers, directors, employees, and agents from any
                    claims, damages, or expenses arising from:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>· Your use of the Services</li>
                    <li>· Your violation of these Terms</li>
                    <li>· Your violation of any rights of another party</li>
                    <li>· Your breach of any applicable laws or regulations</li>
                    <li>
                      · Content you submit or transmit through the Services
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  15. Dispute Resolution
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    Most disputes can be resolved informally. Before filing a
                    claim, please contact us at support@texthey.com to attempt
                    resolution. If informal resolution fails:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      · Any disputes will be resolved through binding
                      arbitration
                    </li>
                    <li>
                      · Arbitration will be conducted under American Arbitration
                      Association rules
                    </li>
                    <li>
                      · You waive the right to participate in class actions
                    </li>
                    <li>· Arbitration will take place in California</li>
                    <li>
                      · The arbitrator&apos;s decision will be final and binding
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  16. Governing Law
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700">
                    These Terms and any disputes arising from them will be
                    governed by and construed in accordance with the laws of the
                    State of California, without regard to conflict of law
                    principles. Any legal action must be brought in the federal
                    or state courts located in California.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Severability */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  17. Severability
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700">
                    If any provision of these Terms is found to be unenforceable
                    or invalid, the remaining provisions will continue in full
                    force and effect. The unenforceable provision will be
                    replaced with an enforceable provision that most closely
                    reflects our intent.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Entire Agreement */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  18. Entire Agreement
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700">
                    These Terms, together with our Privacy Policy and any other
                    legal notices published by us, constitute the entire
                    agreement between you and TextHey. These Terms supersede all
                    prior agreements, negotiations, and discussions between the
                    parties regarding the subject matter.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  19. Changes to Terms
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                  <p className="text-gray-700 mb-3">
                    We may update these Terms from time to time to reflect
                    changes in our Services, laws, or business practices. When
                    we make changes:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>· We will post the updated Terms on our website</li>
                    <li>· We will update the &quot;Last Updated&quot; date</li>
                    <li>
                      · We may notify you via email or in-app notification for
                      significant changes
                    </li>
                    <li>
                      · Continued use of the Services constitutes acceptance of
                      the updated Terms
                    </li>
                    <li>
                      · If you disagree with changes, you may terminate your
                      account
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

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
                    If you have any questions or concerns about our Terms of
                    Service, please don&apos;t hesitate to reach out:
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
              These Terms of Service were last updated on June 30, 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
