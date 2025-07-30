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

      <main className="px-4 py-8 mt-20">
        <div className="w-[95%] max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.2s forwards",
              }}
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Key-Empire
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.4s forwards",
              }}
            >
              Your premium marketplace for executors, scripts, and digital tools. Join thousands of satisfied customers
              worldwide.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.6s forwards",
              }}
            >
              <Link
                href="/homepage"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <Link
                href="/resellers"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Main Content Card - Based on Wireframe */}
          <div
            className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden mb-16"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.8s forwards",
            }}
          >
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Left side - Image based on wireframe */}
              <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200 flex items-center justify-center p-8">
                <div className="w-full max-w-md aspect-[4/3] bg-white rounded-2xl border-2 border-gray-300 flex items-center justify-center shadow-lg">
                  <Image
                    src="/images/wireframe-design.png"
                    alt="Key-Empire Platform Preview"
                    width={400}
                    height={300}
                    className="w-full h-full object-contain p-4"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">The Ultimate Digital Marketplace</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Discover premium executors, powerful scripts, and cutting-edge tools. Our platform connects you with
                  verified sellers and guaranteed quality products.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Premium Tools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>

                <Link
                  href="/homepage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group w-fit"
                >
                  <span className="relative z-10">Explore Products</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2
              className="text-3xl font-bold text-center text-gray-900 mb-12"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 1.0s forwards",
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
                      animation: `fadeInUp 0.8s ease-out ${1.2 + index * 0.1}s forwards`,
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

          {/* Quick Links Section */}
          <div className="mb-16">
            <h2
              className="text-3xl font-bold text-center text-gray-900 mb-12"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 1.6s forwards",
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
                    animation: `fadeInUp 0.8s ease-out ${1.8 + index * 0.1}s forwards`,
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
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
