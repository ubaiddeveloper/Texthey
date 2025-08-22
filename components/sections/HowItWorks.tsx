"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, ArrowDown, CheckCircle, RotateCcw } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Define the conversation flow - same as Hero section
const conversationFlow = [
  { text: "Hey", isUser: true, timestamp: "2:15 PM" },
  {
    text: "Hi John, welcome to TextHey!\n\nPlease choose a service from the list below to get started.\n1. Haircut\n2. Shave\n3. Haircut & Shave",
    isUser: false,
    timestamp: "2:15 PM",
  },
  { text: "3", isUser: true, timestamp: "2:16 PM" },
  {
    text: "Great! Who would you like to book with?\n1. John D.\n2. Sarah J.\n3. James S.\n4. No Preference",
    isUser: false,
    timestamp: "2:16 PM",
  },
  { text: "2", isUser: true, timestamp: "2:17 PM" },
  {
    text: "Perfect! Please choose a date for your appointment.\n1. Mon, August 11\n2. Tue, August 12\n3. Wed, August 13\n4. Go back",
    isUser: false,
    timestamp: "2:17 PM",
  },
  { text: "1", isUser: true, timestamp: "2:18 PM" },
  {
    text: "Almost done. Please select a time that works best for you.\n1. 11:00 am\n2. 4:00 pm\n3. 9:30 pm\n4. Go back",
    isUser: false,
    timestamp: "2:18 PM",
  },
  { text: "2", isUser: true, timestamp: "2:19 PM" },
  {
    text: "Your appointment is confirmed, and details are as follows.\n\nTexthey Salon\nHaircut & Shave\nMonday, August 11\n4:00 PM\n\nText 'Change' to this number if you'd like to adjust your booking.\n\nThanks for using Text Hey 😊",
    isUser: false,
    timestamp: "2:20 PM",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<
    Array<{
      id: number;
      text: string;
      isUser: boolean;
      timestamp: string;
    }>
  >([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      gsap.to(container, {
        scrollTop: container.scrollHeight,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  // Animate message appearance
  const animateNewMessage = (messageElement: HTMLElement) => {
    gsap.fromTo(
      messageElement,
      {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      }
    );
  };

  // Add messages with delay
  useEffect(() => {
    if (currentMessageIndex < conversationFlow.length) {
      const timer = setTimeout(
        () => {
          const newMessage = {
            id: currentMessageIndex,
            ...conversationFlow[currentMessageIndex],
          };

          setMessages((prev) => [...prev, newMessage]);
          setCurrentMessageIndex((prev) => prev + 1);

          // Scroll to bottom after message is added
          setTimeout(scrollToBottom, 100);
        },
        currentMessageIndex === 0 ? 1500 : 1800
      ); // First message after 1.5s, then every 1.8s

      return () => clearTimeout(timer);
    }
    // Animation stops at the last message
  }, [currentMessageIndex]);

  // Animate messages when they appear
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessageElement = document.querySelector(
        `[data-message-id="${messages[messages.length - 1].id}"]`
      ) as HTMLElement;

      if (lastMessageElement) {
        animateNewMessage(lastMessageElement);
      }
    }
  }, [messages]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate steps
    gsap.fromTo(
      ".step-card",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Start message animation when phone comes into view
    const phoneScrollTrigger = ScrollTrigger.create({
      trigger: phoneRef.current,
      start: "top 60%",
      onEnter: () => {
        // Reset and start the conversation
        setMessages([]);
        setCurrentMessageIndex(0);
      },
    });

    return () => {
      phoneScrollTrigger.kill();
    };
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      title: 'Text "Hey"',
      description:
        'Kickstart the booking instantly—just send "Hey" to a business number.',
      color: "from-brand-cyan to-brand-cyan",
    },
    {
      icon: ArrowDown,
      title: "Choose & Confirm",
      description:
        "Pick your service, date, time, and staff in a few quick replies.",
      color: "from-brand-pink to-brand-pink",
    },
    {
      icon: CheckCircle,
      title: "Get Reminded",
      description:
        "Stay on track with instant confirmations and timely reminders.",
      color: "from-brand-cyan to-brand-cyan",
    },
    {
      icon: RotateCcw,
      title: "Share & Rebook",
      description:
        "Receive a follow-up to leave a review or book your next visit.",
      color: "from-brand-pink to-brand-pink",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How It <span className="gradient-brand-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to transform your booking process. Your clients
            get convenience, you get more bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-card flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-semibold text-gray-400 mr-3">
                      STEP {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Animation */}
          <div ref={phoneRef} className="relative">
            <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl max-w-sm mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* iPhone Notch */}
              <div className="bg-slate-900 h-6 rounded-t-[2.2rem] relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-slate-800 rounded-full"></div>
              </div>
              <div className="bg-white rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-white px-6 py-2 flex items-center justify-between text-sm">
                  <div className="font-semibold">9:41</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 border border-black rounded-sm">
                      <div className="w-3 h-1 bg-black rounded-sm m-0.5"></div>
                    </div>
                  </div>
                </div>
                {/* Message Header */}
                <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        (123) 456-7890
                      </div>
                    </div>
                  </div>
                </div>
                {/* Messages */}
                <div
                  ref={messagesContainerRef}
                  className="p-3 space-y-2 bg-white h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
                >
                  {messages.length === 0 && (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-gray-400 text-sm">
                        Starting conversation...
                      </div>
                    </div>
                  )}
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      data-message-id={message.id}
                      className={`text-${message.isUser ? "right" : "left"}`}
                    >
                      <div
                        className={`inline-block px-3 py-2 rounded-2xl max-w-[180px] text-xs leading-relaxed ${
                          message.isUser
                            ? "bg-brand-cyan text-white rounded-tr-md"
                            : "bg-gray-100 text-gray-900 rounded-tl-md"
                        }`}
                      >
                        {message.text.split("\n").map((line, index) => (
                          <div key={index}>
                            {line}
                            {index < message.text.split("\n").length - 1 && (
                              <br />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {message.timestamp}
                      </div>
                    </div>
                  ))}
                </div>
                {/* iPhone Home Indicator */}
                <div className="bg-white px-4 py-2 flex justify-center">
                  <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-brand-cyan mb-2">
                30 sec
              </div>
              <div className="text-sm text-gray-600">Average booking time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-pink mb-2">98%</div>
              <div className="text-sm text-gray-600">Completion rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-cyan mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600">Always available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
