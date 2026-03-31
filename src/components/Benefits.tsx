import { useState } from 'react';

const painPoints = [
    {
        num: "01",
        title: "Vous gérez. Mais pilotez-vous vraiment ?",
        description: "Les urgences clients et le poids des tâches administratives écrasent tout le reste… La question «où est-ce que je veux emmener ce cabinet dans 5 ans ?» reste sans réponse. Ce n'est pas un manque de volonté. C'est un manque d'espace pour y penser. Et pendant ce temps, les décisions se prennent d'elles-mêmes."
    },
    {
        num: "02",
        title: "Les fonds d'investissement s'organisent. Pendant que vous attendez.",
        description: "Ils ont compris avant tout le monde que la profession était sous-consolidée. Ils ont des plateformes, des outils IA, des capacités de recrutement que peu de cabinets peuvent financer seuls. Les libéraux qui ne s'organisent pas maintenant se retrouveront à contre-courant. La transformation numérique n'attend pas les indécis."
    },
    {
        num: "03",
        title: "La facture électronique va changer les fondamentaux de la profession.",
        description: "Aujourd'hui l'expert-comptable est le seul détenteur de la facture qu'il transforme par sa science en un outil de gestion qu'est la comptabilité. Avec la facture électronique, la donne va changer. Les honoraires de comptabilité qui forment actuellement le socle du chiffre d'affaires du cabinet vont chuter. Il faut refonder le modèle économique du cabinet en restant fort sur les fondamentaux de l'accompagnement stratégique des entrepreneurs."
    },
    {
        num: "04",
        title: "Un plan stratégique sur 5 ans.",
        description: "Il est essentiel aujourd'hui pour le cabinet de disposer d'un plan stratégique à 5 ans intégrant les évolutions technologiques, l'intégration de nouveaux profils collaborateurs, le développement de nouvelles missions, la mise en place marketing de l'offre du cabinet."
    }
];

const solutions = [
    {
        tag: "Vision stratégique",
        label: "VISION STRATÉGIQUE",
        title: "Vision stratégique partagée sur mesure.",
        benefit: "Nous posons ensemble votre stratégie à 5 ans en fonction des spécificités de votre cabinet. Agir plutôt que subir. Beaucoup d'experts-comptables pensent mettre en place un plan stratégique mais le temps manque sous la pression des clients, des échéances, des tâches administratives, des imprévus…",
        outcomes: []
    },
    {
        tag: "Évolutions numériques",
        label: "ÉVOLUTIONS NUMÉRIQUES",
        title: "Évolutions numériques.",
        benefit: "IA, data, facture électronique… Une révolution en marche qui va changer une partie du métier. L'objectif est d'intégrer dans votre plan stratégique les évolutions numériques pour se les approprier plutôt que de les subir.",
        outcomes: []
    },
    {
        tag: "Marketing & Communication",
        label: "MARKETING & COMMUNICATION",
        title: "Stratégie marketing et communication.",
        benefit: "La profession manque d'appétence pour la communication. Il est essentiel de faire connaître son savoir-faire et son offre de missions en dehors des missions traditionnelles. Stratégies de communication par la facturation clients, présence sur les réseaux sociaux, développement de la marque employeur, mise en place d'une stratégie marketing.",
        outcomes: []
    },
    {
        tag: "Suivi & Engagements",
        label: "SUIVI & ENGAGEMENTS",
        title: "Suivi et engagements.",
        benefit: "Un suivi personnalisé et individualisé est essentiel dans la mise en place du plan stratégique. Nous construirons ensemble votre plan stratégique.",
        outcomes: []
    },
];

const Benefits = () => {
    const [active, setActive] = useState(0);

    return (
        <>
            {/* ── SECTION PROBLÈMES ── */}
            <section id="services" className="bg-[#F8F7F4] py-16 md:py-24 md:pt-36">
                <div className="container">
                    <div className="max-w-3xl mx-auto mb-16 reveal-left">
                        <p className="text-[#C9963B] text-xs font-bold uppercase tracking-widest mb-3">CE QUE VIVENT LES DIRIGEANTS</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Ces questions que vous portez seul,{' '}
                            <span className="text-[#1B3A6B]">depuis trop longtemps.</span>
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto divide-y divide-gray-200">
                        {painPoints.map((p, i) => (
                            <div key={i} className="group py-8 flex gap-6 sm:gap-10 items-start">
                                <span className="text-3xl font-bold text-[#1B3A6B]/15 group-hover:text-[#1B3A6B]/30 transition-colors duration-300 flex-shrink-0 font-mono leading-none pt-1">
                                    {p.num}
                                </span>
                                <div>
                                    <h3 className="text-base font-bold text-[#111827] mb-2 group-hover:text-[#1B3A6B] transition-colors duration-300">
                                        {p.title}
                                    </h3>
                                    <p className="text-[#6B7280] text-sm leading-relaxed">{p.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION SOLUTIONS ── */}
            <section className="bg-white py-24">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-14 reveal-left">
                            <p className="text-[#C9963B] text-xs font-bold uppercase tracking-widest mb-3">L'ACCOMPAGNEMENT</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#111827]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Ce que vous allez <span className="text-[#1B3A6B]">concrètement obtenir</span>
                            </h2>
                            <p className="text-[#6B7280] text-sm mt-3 max-w-xl">
                                Chaque volet de l'accompagnement est conçu pour que vous repartiez avec quelque chose d'utilisable. Pas des diapositives.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">

                            {/* Tabs — colonne gauche */}
                            <div className="flex flex-row md:flex-col gap-2 md:w-56 flex-shrink-0 overflow-x-auto md:overflow-visible pb-1 md:pb-0">
                                {solutions.map((sol, i) => {
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setActive(i)}
                                            className={`px-4 py-3 rounded-xl text-xs font-semibold text-left transition-all duration-200 whitespace-nowrap md:whitespace-normal flex-shrink-0 md:flex-shrink ${
                                                active === i
                                                    ? 'bg-[#1B3A6B] text-white shadow-md'
                                                    : 'bg-[#F8F7F4] text-[#6B7280] hover:bg-[#EEF1F7] hover:text-[#1B3A6B]'
                                            }`}
                                        >
                                            {sol.tag}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Content — colonne droite */}
                            <div className="flex-1 relative">
                                <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden min-h-[200px]">

                                    {solutions.map((sol, i) => {
                                            return (
                                            <div
                                                key={i}
                                                style={{
                                                    opacity: active === i ? 1 : 0,
                                                    transform: active === i ? 'translateY(0)' : 'translateY(8px)',
                                                    transition: 'opacity 0.35s ease, transform 0.35s ease',
                                                    position: active === i ? 'relative' : 'absolute',
                                                    inset: 0,
                                                }}
                                                className="p-8"
                                            >
                                                <div className="mb-4">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B3A6B]/40">{sol.label}</span>
                                                </div>

                                                <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-3 leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                    {sol.title}
                                                </h3>

                                                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{sol.benefit}</p>

                                                <div className="space-y-1.5">
                                                    {sol.outcomes.map((o, oi) => (
                                                        <p key={oi} className="text-[#374151] text-sm">{o}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Benefits;
