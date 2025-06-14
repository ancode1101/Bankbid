import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Shield, Award, Users, Phone, Mail, MapPin, Star, TrendingUp, Clock, CheckCircle, Moon, Sun } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import data from '../data/property.json';

{/* Property Listings Preview Section */ }
<section className="py-12 bg-blue-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  </div>
</section>

const Home = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preferred color scheme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update document class when dark mode changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const faqs = [
    {
      question: "How do bank auctions work?",
      answer: "Bank auctions are public sales of properties that banks have repossessed. The process involves bidding, and the highest bidder wins the property."
    },
    {
      question: "What is EMD?",
      answer: "EMD (Earnest Money Deposit) is a security deposit required to participate in the auction. It's typically 10% of the reserve price."
    },
    {
      question: "Can I inspect the property?",
      answer: "Yes, we provide opportunities for property inspection before the auction. Contact us to schedule a visit."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-slate-700" />
        )}
      </button>

      {/* Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-600/10 dark:bg-slate-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/10 dark:bg-slate-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
              Win Your Dream Property
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover premium properties at unbeatable prices through bank auctions. Your dream home awaits at up to 40% below market value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Browse Properties
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                How It Works
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 dark:text-blue-300 mb-2">500+</div>
              <div className="text-gray-300 dark:text-gray-400">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 dark:text-green-300 mb-2">₹100Cr+</div>
              <div className="text-gray-300 dark:text-gray-400">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 dark:text-purple-300 mb-2">10,000+</div>
              <div className="text-gray-300 dark:text-gray-400">Happy Customers</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Handpicked premium properties available at exclusive auction prices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Simple steps to your dream property</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Browse Properties",
                description: "Explore our curated list of bank auction properties with detailed information and virtual tours",
                icon: <Search className="w-8 h-8" />
              },
              {
                step: "2",
                title: "Register & Bid",
                description: "Create an account, submit EMD, and participate in live auctions with real-time bidding",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                step: "3",
                title: "Win & Own",
                description: "Complete the purchase process with our expert guidance and get your property keys",
                icon: <CheckCircle className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 dark:text-gray-600">
                    <ChevronDown className="w-8 h-8 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BankBid Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose BankBid?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Your trusted partner in property auctions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Best Prices",
                description: "Properties at significantly lower market rates with guaranteed savings",
                icon: <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />,
                color: "from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700"
              },
              {
                title: "Verified Listings",
                description: "All properties are legally verified and documentation cleared",
                icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
                color: "from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700"
              },
              {
                title: "Easy Process",
                description: "Streamlined bidding and purchase process with full transparency",
                icon: <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
                color: "from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700"
              },
              {
                title: "Expert Support",
                description: "Dedicated team of property experts to guide you through",
                icon: <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
                color: "from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Get answers to common questions</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                    <ChevronDown className={`w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                  {expandedFaq === index && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Ready to start your property journey?</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 p-10 rounded-3xl text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-blue-100 dark:text-blue-200 mb-8 text-lg">
                  Have questions? We're here to help you find your perfect property!
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 text-blue-200 dark:text-blue-300" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-blue-200 dark:text-blue-300">support@bankbid.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4 text-blue-200 dark:text-blue-300" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-blue-200 dark:text-blue-300">+91 1234567890</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-4 text-blue-200 dark:text-blue-300" />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-blue-200 dark:text-blue-300">Mumbai, Maharashtra</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-4 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-4 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="6"
                      className="w-full p-4 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;