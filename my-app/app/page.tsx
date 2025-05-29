"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap, Shield, Clock, ArrowRight, Check, Star, Play, ChevronDown } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Integration",
      description: "Connect your APIs in minutes, not hours. Our intelligent automation reduces setup time by 90%.",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      hoverShadow: "hover:shadow-yellow-500/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with SOC2, GDPR, and HIPAA standards for complete peace of mind.",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      hoverShadow: "hover:shadow-green-500/20"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "No-Code Automation",
      description: "Build complex workflows without writing a single line of code. Visual drag-and-drop interface for everyone.",
      gradient: "from-purple-400 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50",
      hoverShadow: "hover:shadow-purple-500/20"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Monitoring",
      description: "Real-time monitoring and instant alerts ensure your automations run smoothly around the clock.",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      hoverShadow: "hover:shadow-blue-500/20"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "10k+", label: "APIs Connected" },
    { number: "500ms", label: "Avg Response Time" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/50 z-50 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Code className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-teal-600 group-hover:to-blue-600 transition-all duration-500">
                AutoAPI
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium rounded-lg hover:bg-blue-50/50 relative group"
                >
                  {item}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100/80 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}>
            <div className="pt-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-1">
                {['Home', 'Features', 'Pricing', 'Contact'].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="hero" 
        data-animate
        className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Trusted by 10,000+ companies worldwide
              <ChevronDown className="w-4 h-4 ml-2 animate-bounce" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="inline-block hover:animate-pulse">Automate</span>{' '}
              <span className="inline-block hover:animate-pulse">Your</span>{' '}
              <span className="inline-block hover:animate-pulse">APIs</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent hover:from-teal-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-1000 inline-block hover:scale-105 transform">
                Without Limits
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto opacity-90">
              Transform your business workflows with intelligent API automation. 
              Connect, automate, and scale your operations with enterprise-grade reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-3xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center space-x-3">
                  <span>Start Automating Free</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
              
              <button className="group flex items-center space-x-3 text-gray-700 hover:text-blue-600 font-semibold px-10 py-5 rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transform hover:scale-105">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch 2-min Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-teal-600 transition-all duration-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 relative">
            <div className="relative bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-3xl" />
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/60 hover:bg-white/95 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer"
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center transform transition-all duration-500 ${hoveredCard === i ? 'rotate-12 scale-110' : ''} shadow-lg group-hover:shadow-xl`}>
                      <Code className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">API Workflow {i}</h3>
                    <p className="text-gray-600">Seamlessly integrated automation pipeline</p>
                    <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ${hoveredCard === i ? 'w-full' : 'w-1/2'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        data-animate
        className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50/50 relative transition-all duration-1000 delay-200 ${
          isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">
                AutoAPI?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of API automation with our cutting-edge platform designed for modern businesses that demand excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl border border-white/50 hover:border-transparent transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 shadow-lg hover:shadow-2xl ${feature.hoverShadow} cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contact" 
        data-animate
        className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden transition-all duration-1000 delay-400 ${
          isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Transform Your 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block sm:inline sm:ml-3">
              Workflow?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies already automating their APIs with AutoAPI. 
            Experience the future of workflow automation today.
          </p>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-6">Start Your Free Trial</h3>
                <ul className="space-y-4 text-blue-100">
                  {[
                    '14-day free trial',
                    'No credit card required',
                    '24/7 premium support',
                    'Cancel anytime, no questions'
                  ].map((item, index) => (
                    <li 
                      key={item} 
                      className="flex items-center space-x-4 group hover:text-white transition-colors duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <button className="group w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center justify-center space-x-3">
                    <span>Schedule a Live Demo</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
                
                <button className="w-full bg-transparent text-white px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 lg:mb-0 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AutoAPI
              </span>
            </div>
            
            <div className="text-gray-400 text-center lg:text-right">
              <p className="font-medium">&copy; 2025 AutoAPI. All rights reserved.</p>
              <p className="text-sm mt-2 opacity-75">Empowering businesses through intelligent automation.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;