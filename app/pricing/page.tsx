"use client";

import { useState } from "react";
import { Check, X, Sparkles, Crown, Building2, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Header from "@/components/sections/Header";
import AnimatedBackground from "@/components/ui/animated-background";
import Footer from "@/components/sections/Footer";

interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  originalPrice?: {
    monthly: number;
    yearly: number;
  };
  features: {
    name: string;
    included: boolean | string;
    tooltip?: string;
  }[];
  buttonText: string;
  popular?: boolean;
  enterprise?: boolean;
  icon: React.ReactNode;
  gradient: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Hey Flex",
    description: "Perfect for trying out TextHey",
    price: { monthly: 0, yearly: 0 },
    features: [
      { name: "Book by Text", included: true },
      { name: "Web Booking", included: "Coming Soon" },
      { name: "Unlimited Bookings", included: true },
      { name: "Reminders", included: true },
      { name: "Rescheduling via Text", included: true },
      { name: "Cancellation via Text", included: true },
      { name: "Reports & Insights (basic)", included: true },
      { name: "Staff Management", included: false },
      { name: "Promotional Campaigns", included: true },
      { name: "Follow-up Reviews", included: false },
      { name: "Suggested Booking", included: false },
      { name: "Revenue Recovery", included: false },
      { name: "Locations", included: "1" },
      { name: "Monthly Credits", included: false },
      { name: "Staff Calendar", included: false },
      { name: "Advance Analytics", included: false },
      { name: "Google Reviews Integration", included: false },
      { name: "Custom Features", included: false },
      { name: "Custom Booking Flow", included: false },
      { name: "Custom Reports", included: false },
      { name: "Support", included: "Mon-Fri" },
    ],
    buttonText: "Start Now",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    name: "Hey Solo",
    description: "For growing businesses",
    price: { monthly: 99.99, yearly: 999.99 },
    originalPrice: { monthly: 99.99, yearly: 1199.88 },
    features: [
      { name: "Book by Text", included: true },
      { name: "Web Booking", included: "Coming Soon" },
      { name: "Unlimited Bookings", included: true },
      { name: "Reminders", included: true },
      { name: "Rescheduling via Text", included: true },
      { name: "Cancellation via Text", included: true },
      { name: "Reports & Insights (basic)", included: true },
      { name: "Staff Management", included: false },
      { name: "Promotional Campaigns", included: true },
      { name: "Follow-up Reviews", included: true },
      { name: "Suggested Booking", included: true },
      { name: "Revenue Recovery", included: true },
      { name: "Locations", included: "1" },
      { name: "Monthly Credits", included: "300" },
      { name: "Staff Calendar", included: "1" },
      { name: "Advance Analytics", included: false },
      { name: "Google Reviews Integration", included: false },
      { name: "Custom Features", included: false },
      { name: "Custom Booking Flow", included: false },
      { name: "Custom Reports", included: false },
      { name: "Support", included: "Mon-Fri" },
    ],
    buttonText: "Get Started",
    popular: false,
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Hey Pro",
    description: "For established businesses",
    price: { monthly: 199.99, yearly: 1999.99 },
    originalPrice: { monthly: 199.99, yearly: 2399.88 },
    features: [
      { name: "Book by Text", included: true },
      { name: "Web Booking", included: "Coming Soon" },
      { name: "Unlimited Bookings", included: true },
      { name: "Reminders", included: true },
      { name: "Rescheduling via Text", included: true },
      { name: "Cancellation via Text", included: true },
      { name: "Reports & Insights (basic)", included: true },
      { name: "Staff Management", included: true },
      { name: "Promotional Campaigns", included: true },
      { name: "Follow-up Reviews", included: true },
      { name: "Suggested Booking", included: true },
      { name: "Revenue Recovery", included: true },
      { name: "Locations", included: "1" },
      { name: "Monthly Credits", included: "500" },
      { name: "Staff Calendar", included: "5" },
      { name: "Advance Analytics", included: true },
      { name: "Google Reviews Integration", included: false },
      { name: "Custom Features", included: false },
      { name: "Custom Booking Flow", included: false },
      { name: "Custom Reports", included: false },
      { name: "Support", included: "Priority" },
    ],
    buttonText: "Become Pro",
    popular: false,
    icon: <Crown className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Hey Grow",
    description: "For teams and agencies",
    price: { monthly: 349.99, yearly: 3499.99 },
    originalPrice: { monthly: 349.99, yearly: 4199.88 },
    features: [
      { name: "Book by Text", included: true },
      { name: "Web Booking", included: "Coming Soon" },
      { name: "Unlimited Bookings", included: true },
      { name: "Reminders", included: true },
      { name: "Rescheduling via Text", included: true },
      { name: "Cancellation via Text", included: true },
      { name: "Reports & Insights (basic)", included: true },
      { name: "Staff Management", included: true },
      { name: "Promotional Campaigns", included: true },
      { name: "Follow-up Reviews", included: true },
      { name: "Suggested Booking", included: true },
      { name: "Revenue Recovery", included: true },
      { name: "Locations", included: "1" },
      { name: "Monthly Credits", included: "1,000" },
      { name: "Staff Calendar", included: "12" },
      { name: "Advance Analytics", included: true },
      { name: "Google Reviews Integration", included: true },
      { name: "Custom Features", included: false },
      { name: "Custom Booking Flow", included: false },
      { name: "Custom Reports", included: false },
      { name: "Support", included: "7 Days" },
    ],
    buttonText: "Start Growing",
    popular: true,
    icon: <Users className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: { monthly: 0, yearly: 0 },
    features: [
      { name: "Book by Text", included: true },
      { name: "Web Booking", included: "Coming Soon" },
      { name: "Unlimited Bookings", included: true },
      { name: "Reminders", included: true },
      { name: "Rescheduling via Text", included: true },
      { name: "Cancellation via Text", included: true },
      { name: "Reports & Insights (basic)", included: true },
      { name: "Staff Management", included: true },
      { name: "Promotional Campaigns", included: true },
      { name: "Follow-up Reviews", included: true },
      { name: "Suggested Booking", included: true },
      { name: "Revenue Recovery", included: true },
      { name: "Locations", included: "Multiple" },
      { name: "Monthly Credits", included: "Custom" },
      { name: "Staff Calendar", included: "Custom" },
      { name: "Advance Analytics", included: "Custom" },
      { name: "Google Reviews Integration", included: true },
      { name: "Custom Features", included: true },
      { name: "Custom Booking Flow", included: true },
      { name: "Custom Reports", included: true },
      { name: "Support", included: "Dedicated CSM" },
    ],
    buttonText: "Contact Us",
    enterprise: true,
    icon: <Building2 className="w-6 h-6" />,
    gradient: "from-slate-600 to-slate-800",
  },
];

const addOns = [
  {
    name: "Additional Staff Calendar",
    individuals: "-",
    pro: "-",
    heyPro: "-",
    heyGrow: "$9.99/user/month",
    enterprise: "Custom",
  },
  {
    name: "Promo Cards with QR Code (500)",
    individuals: "$100",
    pro: "$80",
    heyPro: "$70",
    heyGrow: "$60",
    enterprise: "Free",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const getPrice = (plan: PricingPlan) => {
    if (plan.enterprise) return "Custom";
    const price = isYearly ? plan.price.yearly : plan.price.monthly;
    return price === 0 ? "Free" : `$${price.toFixed(2)}`;
  };

  const getPeriod = () => (isYearly ? "/year" : "/month");

  const getSavings = (planName: string) => {
    if (!isYearly) return null;

    // Find the plan to calculate actual savings
    const plan = pricingPlans.find((p) => p.name === planName);
    if (!plan || plan.enterprise || plan.price.monthly === 0) return null;

    // Calculate monthly price * 12 vs yearly price
    const monthlyAnnual = plan.price.monthly * 12;
    const yearlyPrice = plan.price.yearly;
    const savings = ((monthlyAnnual - yearlyPrice) / monthlyAnnual) * 100;

    return `Save ${Math.round(savings)}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="text-sm px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Choose Your Perfect Plan
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-brand-text">Simple, Transparent</span>
              <br />
              Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your business with TextHey&apos;s powerful SMS booking
              platform. No hidden fees, no surprises - just results.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <span
              className={`text-lg font-medium ${
                !isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-500"
            />
            <span
              className={`text-lg font-medium ${
                isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-green-100 text-green-800 border-green-200 hover:text-green-800 hover:bg-green-200">
                Save up to 17%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? "ring-2 ring-blue-500 shadow-xl scale-105"
                    : plan.enterprise
                    ? "border-2 border-slate-300"
                    : "hover:shadow-lg"
                } ${plan.enterprise ? "xl:col-span-1" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium text-center py-2">
                    Most Popular
                  </div>
                )}

                <CardHeader
                  className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}
                >
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center text-white mb-4`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mt-2">
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    <div className="text-4xl font-bold text-gray-900 flex items-baseline justify-center">
                      {plan.enterprise ? (
                        "Custom"
                      ) : plan.price.monthly === 0 ? (
                        "Free"
                      ) : (
                        <>
                          <span>$</span>
                          <span>
                            {Math.floor(
                              isYearly ? plan.price.yearly : plan.price.monthly
                            )}
                          </span>
                          <span className="text-xl">
                            .
                            {String(
                              isYearly ? plan.price.yearly : plan.price.monthly
                            ).split(".")[1] || "00"}
                          </span>
                        </>
                      )}
                      {!plan.enterprise && plan.price.monthly > 0 && (
                        <span className="text-sm font-normal text-gray-500 ml-1">
                          {getPeriod()}
                        </span>
                      )}
                    </div>
                    {getSavings(plan.name) && (
                      <Badge className="mt-2 bg-green-100 text-green-800 border-green-200">
                        {getSavings(plan.name)}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Button
                    className={`w-full mb-6 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg"
                        : plan.enterprise
                        ? "bg-[#0fcbf7] hover:bg-[#0bb8e0] text-white"
                        : "bg-[#0fcbf7] hover:bg-[#0bb8e0] text-white"
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.slice(0, 8).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        {feature.included === true ? (
                          <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        ) : feature.included === false ? (
                          <X className="w-4 h-4 text-gray-300 mr-3 flex-shrink-0" />
                        ) : (
                          <div className="w-4 h-4 mr-3 flex-shrink-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                        )}
                        <span
                          className={
                            feature.included === false
                              ? "text-gray-400"
                              : "text-gray-700"
                          }
                        >
                          {feature.name}
                          {typeof feature.included === "string" &&
                            feature.included !== "true" &&
                            feature.included !== "false" && (
                              <span className="ml-2 text-blue-600 font-medium">
                                ({feature.included})
                              </span>
                            )}
                        </span>
                      </div>
                    ))}

                    {plan.features.length > 8 && (
                      <details className="group">
                        <summary className="cursor-pointer text-blue-600 hover:text-blue-700 text-sm font-medium list-none">
                          <span className="group-open:hidden">
                            Show all features
                          </span>
                          <span className="hidden group-open:inline">
                            Show less
                          </span>
                        </summary>
                        <div className="mt-3 space-y-3">
                          {plan.features
                            .slice(8)
                            .map((feature, featureIndex) => (
                              <div
                                key={featureIndex + 8}
                                className="flex items-center text-sm"
                              >
                                {feature.included === true ? (
                                  <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                ) : feature.included === false ? (
                                  <X className="w-4 h-4 text-gray-300 mr-3 flex-shrink-0" />
                                ) : (
                                  <div className="w-4 h-4 mr-3 flex-shrink-0 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  </div>
                                )}
                                <span
                                  className={
                                    feature.included === false
                                      ? "text-gray-400"
                                      : "text-gray-700"
                                  }
                                >
                                  {feature.name}
                                  {typeof feature.included === "string" &&
                                    feature.included !== "true" &&
                                    feature.included !== "false" && (
                                      <span className="ml-2 text-blue-600 font-medium">
                                        ({feature.included})
                                      </span>
                                    )}
                                </span>
                              </div>
                            ))}
                        </div>
                      </details>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Everything you need to know about what&apos;s included in each
              plan
            </p>
            <div className="lg:hidden bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-blue-800">
                💡 <strong>Tip:</strong> Scroll horizontally to see all plan
                comparisons
              </p>
            </div>
          </div>

          {/* Add extra spacing for the badge */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl overflow-visible border border-gray-200 backdrop-blur-sm relative">
              <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 p-2 pt-10">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                        <th className="px-6 py-6 text-left text-sm font-bold text-gray-900 w-1/5 sticky left-0 bg-gray-50 z-10 border-r border-gray-200">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                            Features
                          </div>
                        </th>
                        <th className="px-6 py-6 text-center text-sm font-semibold text-gray-900">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                              <Zap className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold">Hey Flex</span>
                            <span className="text-xs text-gray-500 font-normal">
                              Perfect Start
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-6 text-center text-sm font-semibold text-gray-900">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                              <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold">Hey Solo</span>
                            <span className="text-xs text-gray-500 font-normal">
                              $99.99/month
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-6 text-center text-sm font-semibold text-gray-900">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                              <Crown className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold">Hey Pro</span>
                            <span className="text-xs text-gray-500 font-normal">
                              $199.99/month
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-6 text-center text-sm font-semibold text-gray-900 bg-gradient-to-b from-emerald-50 to-emerald-100 border-x-4 border-emerald-400 rounded-t-lg relative">
                          <div className="absolute -top-[0.5px] left-1/2 transform -translate-x-1/2 z-20 w-40">
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border-2 border-white flex items-center space-x-1">
                              <span className="text-yellow-300">⭐</span>
                              <span>MOST POPULAR</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center space-y-2 mt-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                              <Users className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-emerald-900">
                              Hey Grow
                            </span>
                            <span className="text-xs text-emerald-700 font-semibold">
                              $349.99/month
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-6 text-center text-sm font-semibold text-gray-900">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
                              <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold">Enterprise</span>
                            <span className="text-xs text-gray-500 font-normal">
                              Custom Pricing
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* Core Features Section */}
                      <tr className="bg-gradient-to-r from-blue-50 to-blue-100">
                        <td
                          colSpan={6}
                          className="px-6 py-4 text-sm font-bold text-blue-900 bg-gradient-to-r from-blue-100 to-blue-200"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            Core Features
                          </div>
                        </td>
                      </tr>
                      {[
                        {
                          name: "Book by Text",
                          values: [true, true, true, true, true],
                        },
                        {
                          name: "Web Booking",
                          values: [
                            "Coming Soon",
                            "Coming Soon",
                            "Coming Soon",
                            "Coming Soon",
                            "Coming Soon",
                          ],
                        },
                        {
                          name: "Unlimited Bookings",
                          values: [true, true, true, true, true],
                        },
                        {
                          name: "Reminders",
                          values: [true, true, true, true, true],
                        },
                        {
                          name: "Rescheduling via Text",
                          values: [true, true, true, true, true],
                        },
                        {
                          name: "Cancellation via Text",
                          values: [true, true, true, true, true],
                        },
                        {
                          name: "Reports & Insights (basic)",
                          values: [true, true, true, true, true],
                        },
                        {
                          name: "Staff Management",
                          values: [false, false, true, true, true],
                        },
                      ].map((feature, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white hover:bg-gray-50 border-r border-gray-200 z-10">
                            {feature.name}
                          </td>
                          {feature.values.map((value, valueIndex) => (
                            <td
                              key={valueIndex}
                              className={`px-6 py-4 text-center ${
                                valueIndex === 3
                                  ? "bg-emerald-50 border-x-2 border-emerald-200"
                                  : ""
                              }`}
                            >
                              {value === true ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : value === false ? (
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                              ) : (
                                <span className="text-sm text-emerald-600 font-medium">
                                  {value}
                                </span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}

                      {/* Boost Revenue Section */}
                      <tr className="bg-gradient-to-r from-emerald-50 to-emerald-100">
                        <td
                          colSpan={6}
                          className="px-6 py-4 text-sm font-bold text-emerald-900 bg-gradient-to-r from-emerald-100 to-emerald-200"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                            Boost Revenue
                          </div>
                        </td>
                      </tr>
                      {[
                        {
                          name: "Promotional Campaigns",
                          values: [true, true, true, true, true],
                        },
                        {
                          name: "Follow-up Reviews",
                          values: [false, true, true, true, true],
                        },
                        {
                          name: "Suggested Booking",
                          values: [false, true, true, true, true],
                        },
                        {
                          name: "Revenue Recovery",
                          values: [false, true, true, true, true],
                        },
                      ].map((feature, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white hover:bg-gray-50 border-r border-gray-200 z-10">
                            {feature.name}
                          </td>
                          {feature.values.map((value, valueIndex) => (
                            <td
                              key={valueIndex}
                              className={`px-6 py-4 text-center ${
                                valueIndex === 3
                                  ? "bg-emerald-50 border-x-2 border-emerald-200"
                                  : ""
                              }`}
                            >
                              {value === true ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : value === false ? (
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                              ) : (
                                <span className="text-sm text-emerald-600 font-medium">
                                  {value}
                                </span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}

                      {/* Premium Features Section */}
                      <tr className="bg-gradient-to-r from-purple-50 to-purple-100">
                        <td
                          colSpan={6}
                          className="px-6 py-4 text-sm font-bold text-purple-900 bg-gradient-to-r from-purple-100 to-purple-200"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                            Premium Features
                          </div>
                        </td>
                      </tr>
                      {[
                        {
                          name: "Locations",
                          values: ["1", "1", "1", "1", "Multiple"],
                        },
                        {
                          name: "Monthly Credits",
                          values: ["-", "300", "500", "1,000", "Custom"],
                        },
                        {
                          name: "Staff Calendar",
                          values: ["-", "1", "5", "12", "Custom"],
                        },
                        {
                          name: "Advance Analytics",
                          values: [false, false, true, true, "Custom"],
                        },
                        {
                          name: "Google Reviews Integration",
                          values: [false, false, false, true, true],
                        },
                        {
                          name: "Custom Features",
                          values: [false, false, false, false, true],
                        },
                        {
                          name: "Custom Booking Flow",
                          values: [false, false, false, false, true],
                        },
                        {
                          name: "Custom Reports",
                          values: [false, false, false, false, true],
                        },
                        {
                          name: "Support",
                          values: [
                            "Mon-Fri",
                            "Mon-Fri",
                            "Priority",
                            "7 Days",
                            "Dedicated CSM",
                          ],
                        },
                      ].map((feature, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white hover:bg-gray-50 border-r border-gray-200 z-10">
                            {feature.name}
                          </td>
                          {feature.values.map((value, valueIndex) => (
                            <td
                              key={valueIndex}
                              className={`px-6 py-4 text-center ${
                                valueIndex === 3
                                  ? "bg-emerald-50 border-x-2 border-emerald-200"
                                  : ""
                              }`}
                            >
                              {value === true ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : value === false ? (
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                              ) : (
                                <span className="text-sm text-emerald-600 font-medium">
                                  {value}
                                </span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}

                      {/* Add-ons Section */}
                      <tr className="bg-gradient-to-r from-orange-50 to-orange-100">
                        <td
                          colSpan={6}
                          className="px-6 py-4 text-sm font-bold text-orange-900 bg-gradient-to-r from-orange-100 to-orange-200"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                            Add-ons
                          </div>
                        </td>
                      </tr>
                      {[
                        {
                          name: "Additional Staff Calendar",
                          values: ["-", "-", "-", "$9.99/user/month", "Custom"],
                        },
                        {
                          name: "Promo Cards with QR Code (500)",
                          values: ["$100", "$80", "$70", "$60", "Free"],
                        },
                      ].map((feature, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white hover:bg-gray-50 border-r border-gray-200 z-10">
                            {feature.name}
                          </td>
                          {feature.values.map((value, valueIndex) => (
                            <td
                              key={valueIndex}
                              className={`px-6 py-4 text-center ${
                                valueIndex === 3
                                  ? "bg-emerald-50 border-x-2 border-emerald-200"
                                  : ""
                              }`}
                            >
                              <span className="text-sm text-emerald-600 font-medium">
                                {value}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}

                      {/* Credits Top-Up Discount Section */}
                      <tr className="bg-gradient-to-r from-yellow-50 to-yellow-100">
                        <td
                          colSpan={6}
                          className="px-6 py-4 text-sm font-bold text-yellow-900 bg-gradient-to-r from-yellow-100 to-yellow-200"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                            Credits Top-Up Discount
                          </div>
                        </td>
                      </tr>
                      {[
                        {
                          name: "Discount on Additional Credits",
                          values: ["-", "17%", "17%", "17%", "Custom"],
                        },
                      ].map((feature, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white hover:bg-gray-50 border-r border-gray-200 z-10">
                            {feature.name}
                          </td>
                          {feature.values.map((value, valueIndex) => (
                            <td
                              key={valueIndex}
                              className={`px-6 py-4 text-center ${
                                valueIndex === 3
                                  ? "bg-emerald-50 border-x-2 border-emerald-200"
                                  : ""
                              }`}
                            >
                              {value === "-" ? (
                                <span className="text-sm text-gray-400">
                                  {value}
                                </span>
                              ) : (
                                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">
                                  {value}
                                </Badge>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about TextHey pricing
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                question: "Can I change my plan anytime?",
                answer:
                  "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
              },
              {
                question: "What happens if I exceed my monthly credits?",
                answer:
                  "You can purchase additional credits or upgrade to a higher plan. We'll notify you when you're approaching your limit.",
              },
              {
                question: "Is there a setup fee?",
                answer:
                  "No setup fees! You only pay for your chosen plan. We'll help you get started with free onboarding support.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Absolutely! You can cancel your subscription at any time with no cancellation fees. Your service continues until the end of your billing period.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay by invoice.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* New Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        <AnimatedBackground variant="pricing" />

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="mb-8">
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm mb-6">
              ⚡ Join 10,000+ Growing Businesses
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                10X
              </span>{" "}
              Your
              <br />
              Booking Business?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Start your free trial today and experience the power of AI-driven
              SMS booking.
              <span className="text-cyan-300 font-semibold">
                No credit card required!
              </span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-12 py-4 text-lg rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-12 py-4 text-lg rounded-xl transition-all duration-300 hover:border-white/50"
            >
              <Crown className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                10,000+
              </div>
              <div className="text-white/80 text-sm">Active Businesses</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-white/80 text-sm">Bookings Processed</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-pink-400 mb-2">4.9/5</div>
              <div className="text-white/80 text-sm">Customer Rating</div>
            </div>
          </div> */}

          {/* Trust indicators */}
          {/* <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4">
              Trusted by leading businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <div className="text-white font-medium">🏢 Salons</div>
              <div className="text-white font-medium">🏥 Clinics</div>
              <div className="text-white font-medium">🍽️ Restaurants</div>
              <div className="text-white font-medium">💅 Spas</div>
              <div className="text-white font-medium">🎯 Agencies</div>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
