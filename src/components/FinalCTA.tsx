import { ArrowUpRight, Star } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section id="contact" className="relative bg-[#0f1117] py-20 overflow-hidden">

            {/* Glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#15485d]/30 rounded-full blur-[100px]" />
            </div>

            {/* Dot grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <pattern id="cta-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                            <circle cx="12" cy="12" r="1" fill="white" opacity="0.4"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cta-dots)"/>
                </svg>
            </div>

            <div className="container relative z-10">
                <div className="border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-sm px-5 py-8 sm:px-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">

                    {/* Left */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 border border-[#2cc8dc]/30 bg-[#2cc8dc]/10 rounded-full px-3 py-1 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2cc8dc] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2cc8dc]">
                                Places limitées — {new Date().toLocaleString('fr-FR', { month: 'long' })}
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
                            Prêt à faire de votre <span className="text-[#2cc8dc]">marketing</span><br />votre meilleur commercial ?
                        </h2>

                        {/* Testimonial */}
                        <div className="flex items-center gap-3">
                            <img src="/personne 1.jpg" alt="Résultat client PME - Scalyx agence de communication Aix-en-Provence" className="w-9 h-9 rounded-full object-cover border-2 border-white/10 flex-shrink-0" width="36" height="36" loading="lazy" />
                            <div>
                                <p className="text-white/50 text-xs italic leading-relaxed">"Scalyx a boosté nos résultats dès le premier mois grâce à des campagnes pro et réactives."</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-white/80 text-xs font-semibold">LC Cession</span>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-28 bg-white/10" />

                    {/* Right */}
                    <div className="flex flex-col items-center gap-4">
                        <a
                            href="https://calendly.com/nicolas-scalyx/30min" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:bg-white/10 active:scale-95 border-2 border-dotted border-white/40 animate-glow-pulse whitespace-nowrap"
                        >
                            Réserver un appel <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <p className="text-white/30 text-xs">30 min · Sans engagement · 100% gratuit</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
