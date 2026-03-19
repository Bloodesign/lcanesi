import { ArrowUpRight, Check } from 'lucide-react';

const plans = [
    {
        target: "PME · Indépendants",
        name: "STARTER",
        tagline: "On construit votre présence et on la fait vivre chaque mois.",
        price: "490",
        groups: [
            {
                label: "Votre présence",
                items: [
                    "Landing page",
                    "Fiche Google optimisée",
                    "1 journée création de contenu/mois (photo, vidéo, etc.)",
                    "1 réseau social géré entièrement (Instagram ou LinkedIn)",
                    "8 publications/mois (visuels + textes rédigés pour vous)"
                ]
            },
            {
                label: "Votre suivi",
                items: [
                    "Calendrier éditorial mensuel fourni",
                    "Rapport mensuel : portée, engagement, progression",
                    "Support réactif par email"
                ]
            }
        ],
        cta: "Démarrer en Starter",
        highlight: false,
        accentColor: "text-white/70",
        ctaClass: "bg-white/10 text-white hover:bg-white/15 border border-white/20"
    },
    {
        target: "LE PLUS POPULAIRE",
        name: "GROWTH",
        tagline: "Un système complet pour attirer des visiteurs, les capturer et les convertir en clients.",
        price: "990",
        groups: [
            {
                label: "Votre tunnel d'acquisition",
                items: [
                    "Landing page orientée conversion (créée & hébergée par nous)",
                    "Fiche Google optimisée",
                    "Formulaire de capture + séquence email automatisée",
                    "1 campagne pub Meta ou LinkedIn pour amener du trafic qualifié"
                ]
            },
            {
                label: "Votre contenu",
                items: [
                    "3 réseaux sociaux gérés",
                    "16 publications/mois (photo, vidéo, graphisme)"
                ]
            },
            {
                label: "Votre pilotage",
                items: [
                    "Dashboard temps réel : trafic, leads, conversions",
                    "Appel mensuel 45 min pour ajuster la stratégie"
                ]
            }
        ],
        cta: "Je veux le plan Growth",
        highlight: true,
        accentColor: "text-[#2cc8dc]",
        ctaClass: "bg-[#15485d] text-white hover:brightness-110 shadow-[0_0_24px_rgba(21,72,93,0.6)] border-2 border-dotted border-white/30"
    },
    {
        target: "Startups · Marques",
        name: "PREMIUM",
        tagline: "Un département marketing externalisé, piloté par l'IA, qui génère des clients en continu.",
        price: "Sur devis",
        groups: [
            {
                label: "Votre système d'acquisition",
                items: [
                    "Tunnel de vente complet : trafic → lead → client automatisé",
                    "Multi-campagnes ads avec A/B testing continu",
                    "Prospection automatisée : des leads qualifiés sans effort manuel"
                ]
            },
            {
                label: "Votre contenu",
                items: [
                    "Contenu illimité (photo, vidéo, motion design)",
                    "Tous vos réseaux gérés simultanément"
                ]
            },
            {
                label: "Votre pilotage",
                items: [
                    "Dashboard avancé + reporting hebdo CEO",
                    "Account manager dédié, joignable à tout moment",
                    "Automatisation IA complète des tâches marketing"
                ]
            }
        ],
        cta: "Discutons de votre projet",
        highlight: false,
        accentColor: "text-white/70",
        ctaClass: "bg-white/10 text-white hover:bg-white/15 border border-white/20"
    }
];

const Pricing = () => {
    return (
        <section id="offres" className="section bg-[#0f1117] overflow-hidden">
            <div className="container">

                <div className="text-center max-w-3xl mx-auto mb-14 reveal">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Choisissez le niveau de <span className="text-[#2cc8dc]">croissance</span><br />qui vous correspond
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-5 items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl flex flex-col transition-all duration-300 overflow-hidden ${
                                plan.highlight
                                    ? 'border-2 border-[#15485d] shadow-[0_0_40px_rgba(21,72,93,0.4)] md:-my-8 z-10'
                                    : 'border border-white/10 hover:-translate-y-1'
                            }`}
                        >
                            {/* Card header */}
                            <div className={`px-5 pb-4 ${plan.highlight ? 'bg-[#15485d]/20 pt-10' : 'bg-[#1a1f2e] pt-5'}`}>
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                                        {plan.target}
                                    </p>
                                    {plan.highlight && (
                                        <span className="bg-[#15485d] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                                            Recommandé
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-end justify-between">
                                    <h3 className="text-xl font-black text-white tracking-tight">{plan.name}</h3>
                                    <div className="flex items-end gap-1">
                                        <span className={`text-2xl font-black leading-none ${plan.accentColor}`}>
                                            {plan.name === 'PREMIUM' ? 'Sur devis' : `${plan.price} €`}
                                        </span>
                                        {plan.name !== 'PREMIUM' && <span className="text-white/40 text-[11px] mb-0.5">/mois</span>}
                                    </div>
                                </div>
                                {plan.name === 'PREMIUM' && (
                                    <p className="text-white/30 text-[10px] mt-0.5 text-right">à partir de 2 000 €/mois</p>
                                )}
                            </div>

                            {/* Divider */}
                            <div className={`h-px ${plan.highlight ? 'bg-[#15485d]/40' : 'bg-white/8'}`} />

                            {/* Features */}
                            <div className={`px-5 py-4 flex-1 ${plan.highlight ? 'bg-[#15485d]/10' : 'bg-[#151922]'}`}>
                                <div className="space-y-3">
                                    {plan.groups.map((group, gi) => (
                                        <div key={gi}>
                                            <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-1.5">
                                                {group.label}
                                            </p>
                                            <ul className="space-y-1">
                                                {group.items.map((f, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                                                        <Check className={`w-3 h-3 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-[#2cc8dc]' : 'text-white/30'}`} />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className={`px-5 ${plan.highlight ? 'bg-[#15485d]/10 pb-10 pt-4' : 'bg-[#151922] pb-5 pt-4'}`}>
                                <a
                                    href="https://calendly.com/nicolas-scalyx/30min" target="_blank" rel="noopener noreferrer"
                                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold transition-all duration-300 text-xs ${plan.ctaClass}`}
                                >
                                    {plan.cta} <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-10 text-sm text-white/30 italic">
                    Tous les plans incluent : onboarding offert · support réactif · sans frais cachés · résiliable avec 30 jours de préavis
                </p>

            </div>
        </section>
    );
};

export default Pricing;
