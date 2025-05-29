import { useEffect, useState } from 'react';
import { Star, ChevronDown, ArrowRight, Play, Code } from 'lucide-react';

export default function Hero() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState({
        hero: false,
        stats: false,
    });

    const stats = [
        { number: '10,000+', label: 'Companies' },
        { number: '1M+', label: 'API Calls/Day' },
        { number: '99.99%', label: 'Uptime' },
        { number: '24/7', label: 'Support' },
    ];
    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                const rect = heroSection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setIsVisible((prev) => ({ ...prev, hero: true }));
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <section
            id="hero"
            data-animate
            className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
        </section>)
}