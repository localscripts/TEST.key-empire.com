"use client"

import { useState } from "react"
import Navbar from "../navbar"
import LoadingScreen from "../components/loading-screen"
import Footer from "../components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Shield, Zap, Users } from "lucide-react"

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true)

  const handleLoadingComplete = () => {
    setShowLoading(false)
  }

  const features = [
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "All transactions are protected with enterprise-grade security",
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Get your products immediately after purchase",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only the highest quality executors and scripts",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Our team is always here to help you succeed",
    },
  ]

  const quickLinks = [
    {
      title: "Browse Executors",
      description: "Premium script execution tools",
      href: "/homepage",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "View Resellers",
      description: "Compare prices and plans",
      href: "/resellers",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Product Selections",
      description: "Explore our full catalog",
      href: "/selections",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <div>
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Navbar />

      <main className="px-4 py-8 mt-32">
        <div className="w-[95%] max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div
              className="flex justify-center mb-8"
              style={{
                opacity: 0,
                transform: "translateY(50px) scale(0.8)",
                animation: "popUpBounce 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s forwards",
              }}
            >
              <div className="relative rounded-lg">
                <Image
                  src="/images/key-empire-logo.png"
                  alt="Key-Empire"
                  width={400}
                  height={100}
                  className="h-16 md:h-20 w-auto select-none transform hover:scale-105 transition-all duration-300"
                  priority
                  draggable={false}
                />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </div>

            {/* Marketplace Description */}
            <p
              className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                animation: "popUpSlide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards",
              }}
            >
              Your premium marketplace for executors, scripts, and digital tools. Join thousands of satisfied customers
              worldwide.
            </p>

            {/* Action Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              style={{
                opacity: 0,
                transform: "translateY(20px) scale(0.9)",
                animation: "popUpScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards",
              }}
            >
              <Link
                href="/homepage"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <Link
                href="/resellers"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-16">
            <h2
              className="text-3xl font-bold text-center text-gray-900 mb-12"
              style={{
                opacity: 0,
                transform: "translateY(40px) scale(0.9)",
                animation: "popUpBounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards",
              }}
            >
              Quick Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group block p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    opacity: 0,
                    transform: "translateY(60px) scale(0.8) rotateX(15deg)",
                    animation: `popUp3D 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${1.0 + index * 0.15}s forwards`,
                  }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Content Card - Affiliate Program Only */}
          <div
            className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden mb-16"
            style={{
              opacity: 0,
              transform: "translateY(80px) scale(0.85)",
              animation: "popUpMega 1.0s cubic-bezier(0.23, 1, 0.32, 1) 1.6s forwards",
            }}
          >
            {/* Full Width Affiliate Program */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-12 relative overflow-hidden min-h-[500px]">
              {/* Floating 15% Badge */}
              <div
                className="absolute top-8 left-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold text-3xl shadow-lg"
                style={{
                  opacity: 0,
                  transform: "scale(0) rotate(-180deg)",
                  animation:
                    "popUpSpin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 2.2s forwards, bounce 2s ease-in-out 3s infinite",
                }}
              >
                15%
              </div>

              {/* Main Content */}
              <div className="text-center max-w-2xl">
                <div
                  className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                  style={{
                    opacity: 0,
                    transform: "scale(0) rotateY(180deg)",
                    animation: "popUpFlip 1.0s cubic-bezier(0.68, -0.55, 0.265, 1.55) 2.0s forwards",
                  }}
                >
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>

                <h2
                  className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px) scale(0.9)",
                    animation: "popUpSlide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.1s forwards",
                  }}
                >
                  Join the Affiliate Program!
                </h2>

                <p
                  className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto"
                  style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    animation: "popUpSlide 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.3s forwards",
                  }}
                >
                  Share & earn! Promote Key-Empire.com and earn 15% using your own link!
                </p>

                {/* Action Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px) scale(0.8)",
                    animation: "popUpScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 2.5s forwards",
                  }}
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                    <span className="relative z-10">Start Now</span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                  <button className="px-8 py-4 border-2 border-green-500 text-green-600 font-bold text-lg rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  {[
                    { value: "15%", label: "Commission Rate", color: "text-green-600" },
                    { value: "Weekly", label: "Payouts", color: "text-blue-600" },
                    { value: "24/7", label: "Support", color: "text-purple-600" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      style={{
                        opacity: 0,
                        transform: "translateY(40px) scale(0.7)",
                        animation: `popUpScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${2.7 + index * 0.1}s forwards`,
                      }}
                    >
                      <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Background Decoration */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 bg-green-200 rounded-full opacity-20"
                style={{
                  opacity: 0,
                  transform: "scale(0)",
                  animation: "popUpCircle 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 2.8s forwards",
                }}
              ></div>
              <div
                className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-200 rounded-full opacity-20"
                style={{
                  opacity: 0,
                  transform: "scale(0)",
                  animation: "popUpCircle 1.0s cubic-bezier(0.68, -0.55, 0.265, 1.55) 3.0s forwards",
                }}
              ></div>
              <div
                className="absolute top-1/2 right-8 w-24 h-24 bg-yellow-200 rounded-full opacity-15"
                style={{
                  opacity: 0,
                  transform: "scale(0)",
                  animation: "popUpCircle 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 3.2s forwards",
                }}
              ></div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2
              className="text-3xl font-bold text-center text-gray-900 mb-12"
              style={{
                opacity: 0,
                transform: "translateY(40px) scale(0.9)",
                animation: "popUpBounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 3.4s forwards",
              }}
            >
              Why Choose Key-Empire?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{
                      opacity: 0,
                      transform: "translateY(50px) scale(0.8) rotateY(45deg)",
                      animation: `popUp3D 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${3.6 + index * 0.1}s forwards`,
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes popUpBounce {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05);
          }
          80% {
            transform: translateY(5px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes popUpSlide {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popUpScale {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          60% {
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes popUp3D {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.8) rotateX(15deg);
          }
          60% {
            opacity: 1;
            transform: translateY(-10px) scale(1.02) rotateX(-5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        @keyframes popUpMega {
          0% {
            opacity: 0;
            transform: translateY(80px) scale(0.85);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-15px) scale(1.02);
          }
          70% {
            transform: translateY(5px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes popUpSpin {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          70% {
            opacity: 1;
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes popUpFlip {
          0% {
            opacity: 0;
            transform: scale(0) rotateY(180deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.1) rotateY(-20deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        @keyframes popUpCircle {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          60% {
            transform: scale(1.2);
          }
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-10px,0);
          }
          70% {
            transform: translate3d(0,-5px,0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }
      `}</style>
    </div>
  )
}
