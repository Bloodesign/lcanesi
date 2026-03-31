import { Play } from 'lucide-react';

const milestones = [
    {
        label: "Les débuts",
        title: "Un cabinet de 5 personnes",
        description: "Originaire d'Ajaccio, ancien footballeur à l'OM, Lionel Canesi crée son cabinet d'expertise comptable à partir de rien. Cinq personnes au départ. Une conviction : la qualité de la relation client avant tout.",
        stat: "5 collaborateurs",
    },
    {
        label: "25 ans de croissance",
        title: "300 collaborateurs",
        description: "En 25 ans, il transforme ce cabinet en une structure de 300 collaborateurs. Pas par hasard. Par des décisions stratégiques prises tôt, par une culture de cabinet bâtie dans la durée.",
        stat: "5 → 300",
    },
    {
        label: "Leadership régional",
        title: "Président du CROEC PACA",
        description: "Élu à la tête du Conseil Régional de l'Ordre des Experts-Comptables PACA, il commence à porter la voix des cabinets régionaux sur les grandes questions de transformation de la profession.",
        stat: "Région PACA",
    },
    {
        label: "Présidence nationale",
        title: "Président du CNOEC, en plein Covid",
        description: "Élu en 2020 à la tête du Conseil National de l'Ordre des Experts-Comptables, au cœur de la crise du Covid. Chaque jour : analyser les nouvelles lois, soutenir psychologiquement les chefs d'entreprise en difficulté, et porter la profession face aux pouvoirs publics.",
        stat: "21 000 cabinets",
    },
    {
        label: "Combat stratégique",
        title: "Indépendance numérique de la profession",
        description: "L'un de ses grands chevaux de bataille : éviter l'«ubérisation» des cabinets par les éditeurs de logiciels. Les experts-comptables doivent contrôler leurs outils, pas en devenir dépendants. Un combat d'avenir qu'il mène depuis la présidence.",
        stat: "Transformation digitale",
    },
    {
        label: "Syndicat",
        title: "Président du parti ECF",
        description: "À la tête d'Experts-Comptables et Commissaires aux Comptes de France (ECF), le principal syndicat de la profession. Il défend les intérêts des cabinets face aux réformes réglementaires et fiscales.",
        stat: "ECF",
    },
    {
        label: "Aujourd'hui",
        title: "Consultant en cession de cabinet",
        description: "Fort de tout ce parcours (terrain, crise, présidence, transformation), Lionel Canesi accompagne aujourd'hui les dirigeants de cabinets libéraux dans leur cession. Pour leur transmettre ce qu'il a appris à la dure : comment construire une sortie réussie.",
        stat: "Aujourd'hui",
    },
];

const Parcours = () => {
    return (
        <>
            {/* ── PHOTO IMMERSIVE ── */}
            <div className="relative w-full overflow-hidden" style={{ height: '480px' }}>
                <img
                    src="/IMG_0017.JPG"
                    alt="Lionel Canesi en conférence"
                    className="w-full h-full object-cover object-center"
                    style={{ display: 'block' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/90 via-[#0d1f3c]/55 to-transparent" />

                <div className="absolute inset-0 flex items-center">
                    <div className="container">
                        <div className="max-w-xl">
                            <p className="text-[#C9963B] text-xs font-bold uppercase tracking-widest mb-4">Ancien footballeur à l'OM · Fondateur · Président</p>
                            <blockquote className="text-white text-2xl md:text-3xl font-bold leading-snug mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                "Il bouscule les codes de l'expertise comptable. Son parcours atypique et sa vision audacieuse montrent une détermination à innover et à rassembler."
                            </blockquote>
                            {/* Lien interview YouTube */}
                            <a
                                href="https://www.youtube.com/watch?v=sobAa6YjLzg&t=4178s"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
                            >
                                <div className="w-6 h-6 rounded-full bg-[#C9963B] flex items-center justify-center flex-shrink-0">
                                    <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                                </div>
                                Voir l'interview complète
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── TIMELINE PARCOURS ── */}
            <section id="parcours" className="bg-white py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto">

                        <div className="mb-14 reveal-left">
                            <p className="text-[#C9963B] text-xs font-bold uppercase tracking-widest mb-3">PARCOURS</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#111827]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Un itinéraire unique <span className="text-[#1B3A6B]">dans la profession.</span>
                            </h2>
                            <p className="text-[#6B7280] text-sm mt-3 leading-relaxed max-w-xl">
                                Lionel Canesi est loin d'être un expert-comptable « classique ». Voici pourquoi.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-[#1B3A6B]/30 via-[#C9963B]/40 to-[#1B3A6B]/10" />

                            <div className="space-y-10">
                                {milestones.map((m, i) => (
                                    <div key={i} className={`flex gap-6 group reveal reveal-delay-${Math.min(i % 3 + 1, 4)}`}>
                                        {/* Dot */}
                                        <div className="flex-shrink-0 relative z-10 mt-1">
                                            <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                                i === milestones.length - 1
                                                    ? 'bg-[#C9963B] border-[#C9963B]'
                                                    : 'bg-white border-[#1B3A6B]/25 group-hover:border-[#1B3A6B] group-hover:bg-[#1B3A6B]/5'
                                            }`}>
                                                <span className={`text-xs font-bold ${i === milestones.length - 1 ? 'text-white' : 'text-[#1B3A6B]'}`}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pb-2">
                                            <p className="text-[#C9963B] text-[10px] font-bold uppercase tracking-widest mb-1">{m.label}</p>
                                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                                <h3 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                    {m.title}
                                                </h3>
                                                <span className="bg-[#1B3A6B]/8 text-[#1B3A6B] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#1B3A6B]/15">
                                                    {m.stat}
                                                </span>
                                            </div>
                                            <p className="text-[#6B7280] text-sm leading-relaxed">{m.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Parcours;
