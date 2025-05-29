"use client";
import React from 'react';
import { Menu, X, Code } from 'lucide-react';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
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
    );
};

export default Header;