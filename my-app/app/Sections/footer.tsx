import React from 'react';
import { Code } from 'lucide-react';

const Footer = () => {
    return (
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
    );
};

export default Footer;