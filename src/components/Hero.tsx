import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';


const Hero = () => {
    const clientLogos = [
        "/personne 1.jpg",
        "/personne 2.jpg",
        "/personne 3.jpg"
    ];

    const [count, setCount] = useState(0);
    const targetCount = 20;

    useEffect(() => {
        const duration = 2000;
        const steps = 40;
        const increment = targetCount / steps;
        const intervalTime = duration / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                const next = prev + increment;
                if (next >= targetCount) {
                    clearInterval(timer);
                    return targetCount;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-10 overflow-hidden bg-[#0f1117]">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            {/* Static Pattern Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]">
                <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <pattern id="static-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="#15485d" opacity="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#static-dots)"/>
                </svg>
            </div>

            <div className="container relative z-10 text-center flex flex-col items-center px-6">
                {/* Client Stats Section */}
                <div className="mb-6 flex items-center justify-center gap-4 animate-fade-up animate-float-gentle" style={{ animationDelay: '0.1s' }}>
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center -space-x-2">
                            {clientLogos.map((logo, index) => (
                                <img key={index} src={logo} alt="Résultat client PME - Scalyx agence de communication Aix-en-Provence" className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-md bg-white" width="32" height="32" loading="lazy" />
                            ))}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-white/50 text-xs font-medium">4,5</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, starI) => (
                                    <Star key={starI} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-white/60 text-sm font-medium">
                        <span className="font-bold text-[#2cc8dc]">{Math.floor(count)}+ entreprises</span> accompagnées
                    </p>
                </div>

                {/* Main Title */}
                <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-3 max-w-6xl mx-auto leading-[1.15] text-white" style={{ animationDelay: '0.2s' }}>
                    L'agence qui transforme votre <span className="text-[#2cc8dc]">présence</span><br /><span className="text-[#2cc8dc]">digitale</span> en <span className="text-[#2cc8dc]">résultats concrets.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm md:text-base text-white/60 mb-6 max-w-2xl mx-auto leading-relaxed font-normal animate-fade-up" style={{ animationDelay: '0.4s' }}>
                    Boostez votre clientèle locale : Scalyx, votre partenaire digital à Aix-Marseille pour une croissance PME accélérée par l'IA.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-row items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                    <a
                        href="https://calendly.com/nicolas-scalyx/30min" target="_blank" rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-4 py-2 font-semibold text-white transition-all duration-300 bg-[#15485d] rounded-full hover:bg-[#15485d] active:scale-95 text-xs border-2 border-dotted border-white/40 animate-glow-pulse"
                    >
                        Réservez votre audit gratuit
                    </a>
                    <a
                        href="/portfolio"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 font-semibold text-white transition-all duration-300 rounded-full text-xs border border-white/40 hover:border-white hover:bg-white/5 active:scale-95"
                    >
                        Nos réalisations
                    </a>
                </div>

                {/* Microcopy */}
                <p className="mt-4 text-xs text-white/40 animate-fade-up" style={{ animationDelay: '0.7s' }}>
                    Appel de 30 min · Sans engagement · 100% gratuit
                </p>
            </div>

            {/* Companies Marquee Section */}
            <div className="relative mt-6 lg:mt-6 py-4">
                <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f1117] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f1117] to-transparent z-10 pointer-events-none"></div>

                    <div className="flex animate-marquee gap-12 lg:gap-16 items-center" style={{ width: 'max-content' }}>
                        {[...Array(2)].map((_, duplicateIndex) => (
                            <div key={duplicateIndex} className="flex gap-12 lg:gap-16 items-center">
                                {[
                                    { logo: "/entreprise 1.png", opacity: 0.4 },
                                    { logo: "/entreprise 2.png", opacity: 1 },
                                    { logo: "/entreprise 3.png", opacity: 0.6 }
                                ].map((company, index) => (
                                    <div
                                        key={`${duplicateIndex}-${index}`}
                                        className="flex items-center justify-center h-10 lg:h-12 w-24 lg:w-28 flex-shrink-0 transition-opacity duration-300"
                                        style={{ opacity: company.opacity }}
                                    >
                                        <img
                                            src={company.logo}
                                            alt="PME accompagnée par Scalyx à Aix-en-Provence"
                                            className="h-full w-full object-contain object-center filter brightness-0 invert"
                                            width="112" height="48"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
