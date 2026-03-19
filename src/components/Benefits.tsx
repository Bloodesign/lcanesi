import { useEffect, useRef, useState } from 'react';
import { Zap, Camera, MapPin, BarChart2 } from 'lucide-react';

const painPoints = [
    {
        title: "Aucun tunnel d'acquisition qui convertit",
        description: "Pas de landing page optimisée, pas de séquence email, pas de système pour transformer un visiteur en client. Le trafic arrivait… et repartait."
    },
    {
        title: "Un contenu qui n'amenait aucun résultat",
        description: "Des posts publiés sans stratégie. Un feed qui ne reflétait pas la qualité de l'offre. Zéro engagement, zéro conversion."
    },
    {
        title: "Un budget investi sans visibilité",
        description: "De l'argent dépensé en ads, en freelances, en outils — sans savoir ce que ça rapportait vraiment. Aucun reporting clair."
    },
    {
        title: "Une présence digitale inexistante ou incohérente",
        description: "Fiche Google à l'abandon, réseaux sociaux mal gérés, aucune stratégie locale. Les clients potentiels ne les trouvaient pas — ou ne leur faisaient pas confiance."
    }
];

const solutions = [
    {
        icon: Zap,
        tag: "Acquisition",
        title: "Un tunnel qui transforme vos visiteurs en clients",
        description: "Landing page orientée conversion + formulaire de capture + séquence email automatisée. Vos visiteurs deviennent des leads, vos leads deviennent des clients."
    },
    {
        icon: Camera,
        tag: "Contenu",
        title: "Du contenu créé pour vous chaque mois",
        description: "1 journée shooting/mois (photo, vidéo) + publications rédigées + visuels professionnels. Vous n'avez rien à faire — on livre, vous validez."
    },
    {
        icon: MapPin,
        tag: "Présence",
        title: "Votre présence locale et sociale gérée",
        description: "Fiche Google optimisée, réseaux sociaux animés chaque semaine. Vos clients vous trouvent, vous reconnaissent, vous font confiance."
    },
    {
        icon: BarChart2,
        tag: "Publicité",
        title: "Des campagnes pub qui amènent du trafic qualifié",
        description: "Meta Ads, LinkedIn Ads — configurées, testées, optimisées en continu. Chaque euro investi est tracé et reporté."
    }
];

const INTERVAL = 3500;

const Benefits = () => {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let start: number;
        let raf: number;

        const step = (ts: number) => {
            if (!start) start = ts;
            const elapsed = ts - start;
            setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
            if (elapsed >= INTERVAL) {
                setActive(prev => (prev + 1) % solutions.length);
                start = ts;
            }
            raf = requestAnimationFrame(step);
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [active]);

    return (
        <section id="services" className="section bg-[#0f1117] relative overflow-hidden mt-16">
            <div className="container relative z-10">

                {/* Pain Points */}
                <div className="text-center max-w-2xl mx-auto mb-12 reveal">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Ce que nos clients <span className="text-[#2cc8dc]">vivaient</span> avant de nous rejoindre
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group bg-[#1a1f2e] p-5 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:border-[#15485d]/30 relative overflow-hidden"
                        >
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-1.5 rounded-full bg-[#15485d] flex-shrink-0"></span>
                                <div>
                                    <h3 className="text-base font-bold text-white mb-1">{point.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed font-light">{point.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mb-44" />

                {/* Solutions */}
                <div className="text-center max-w-3xl mx-auto mb-10 reveal">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                        Ce que Scalyx <span className="text-[#2cc8dc]">met en place</span> pour vous
                    </h2>
                </div>

                <div ref={triggerRef} className="max-w-3xl mx-auto">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {solutions.map((sol, index) => {
                            const Icon = sol.icon;
                            return (
                                <button
                                    key={index}
                                    onClick={() => { setActive(index); setProgress(0); }}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                                        active === index
                                            ? 'bg-[#15485d] text-white'
                                            : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70'
                                    }`}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    {sol.tag}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="relative rounded-2xl border border-white/10 bg-[#1a1f2e] overflow-hidden">
                        {/* Progress bar */}
                        <div className="absolute top-0 left-0 h-[2px] bg-[#2cc8dc]/30 w-full">
                            <div
                                className="h-full bg-[#2cc8dc] transition-none"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {solutions.map((sol, index) => {
                            const Icon = sol.icon;
                            return (
                                <div
                                    key={index}
                                    style={{
                                        opacity: active === index ? 1 : 0,
                                        transform: active === index ? 'translateY(0)' : 'translateY(10px)',
                                        transition: 'opacity 0.4s ease, transform 0.4s ease',
                                        position: active === index ? 'relative' : 'absolute',
                                        inset: 0,
                                    }}
                                    className="p-8"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#15485d]/40 border border-[#15485d]/50 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-[#2cc8dc]" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#2cc8dc]/70">{sol.tag}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">{sol.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed max-w-xl">{sol.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Benefits;
