import { ArrowRight, Clock, Calendar } from 'lucide-react';


const reassurance = [
    { icon: Clock,    label: "Réponse sous 48h si votre profil correspond" },
    { icon: Calendar, label: "Places limitées" },
];

const FinalCTA = () => {
    return (
        <>
            {/* ── CTA FINAL ── */}
            <section id="qualification" className="relative overflow-hidden py-0">

                <div className="absolute inset-0">
                    <img
                        src="/lionel-canesi.jpg"
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 31, 60, 0.78)' }} />
                </div>

                <div className="relative z-10 py-16 md:py-28">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                                {/* Gauche */}
                                <div>
                                    <div className="inline-flex flex-wrap items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-7">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9963B] animate-pulse" />
                                        <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                                            Places limitées · Sélection personnelle
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        Places limitées pour<br />
                                        <span className="text-[#C9963B]">un accompagnement personnalisé.</span>
                                    </h2>

                                    <p className="text-white/55 text-sm leading-relaxed mb-8">
                                        Construire son plan stratégique est un investissement financier qui sera vite rentabilisé.
                                    </p>

                                    <div className="space-y-3">
                                        {reassurance.map(({ icon: Icon, label }, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-4 h-4 text-[#C9963B]" />
                                                </div>
                                                <span className="text-white/60 text-sm">{label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Droite — card */}
                                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                                    <h3 className="text-xl font-bold text-[#111827] mb-6 leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        Une facturation personnalisée intégrant l'accompagnement dans la mise en place :
                                    </h3>
                                    <ul className="text-[#374151] text-sm space-y-2 mb-8">
                                        {["D'un plan stratégique du cabinet", "D'un plan marketing", "De l'utilisation des outils numériques clés", "D'un plan de communication"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-[#C9963B] font-bold flex-shrink-0">-</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="https://tally.so/r/J9LzLK"
                                        className="flex items-center justify-between w-full bg-[#1B3A6B] hover:bg-[#2A5298] text-white font-bold px-6 py-4 rounded-2xl text-sm group mb-5 btn-3d"
                                    >
                                        <span>Soumettre ma candidature</span>
                                        <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMMENT ÇA MARCHE ── */}
            <section id="comment-ca-marche" className="bg-[#F8F7F4] py-16">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <p className="text-center text-[#C9963B] text-xs font-bold uppercase tracking-widest mb-10">COMMENT ÇA MARCHE</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
                            {[
                                { label: "Candidature", sub: "Formulaire court" },
                                { label: "Analyse", sub: "Sous 48h" },
                                { label: "Appel de présentation", sub: "Tout en détail, sans engagement" },
                            ].map((step, i, arr) => (
                                <div key={i} className="flex flex-col sm:flex-row items-center">
                                    <div className="flex flex-col items-center text-center px-4">
                                        <div className="w-8 h-8 rounded-full bg-[#1B3A6B] text-white text-xs font-bold flex items-center justify-center mb-2 flex-shrink-0">
                                            {i + 1}
                                        </div>
                                        <span className="text-[#111827] text-sm font-semibold">{step.label}</span>
                                        <span className="text-[#9CA3AF] text-xs mt-0.5">{step.sub}</span>
                                    </div>
                                    {i < arr.length - 1 && (
                                        <span className="text-[#1B3A6B]/30 text-lg font-light px-2 my-3 sm:my-0 rotate-90 sm:rotate-0">→</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FinalCTA;
