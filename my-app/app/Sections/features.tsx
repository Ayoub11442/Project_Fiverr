"use client";
import React from 'react';
import { Code, Zap, Shield, Clock } from 'lucide-react';

interface FeatureProps {
    isVisible: {
        features?: boolean;
    };
}

const Features: React.FC<FeatureProps> = ({ isVisible }) => {
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

    return (
        <section
            id="features"
            data-animate
            className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50/50 relative transition-all duration-1000 delay-200 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
    );
};

export default Features;