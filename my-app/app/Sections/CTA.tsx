"use client";
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface CTAProps {
    isVisible: {
        contact?: boolean;
    };
}

const CTA: React.FC<CTAProps> = ({ isVisible }) => {
    return (
        <section
            id="contact"
            data-animate
            className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden transition-all duration-1000 delay-400 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
    );
};

export default CTA;