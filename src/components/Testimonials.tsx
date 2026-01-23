import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Thomas R.",
        role: "CEO, FinTech Solutions",
        content: "L'équipe a complètement transformé notre gestion de leads. +40% de conversion en 2 mois.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Sophie M.",
        role: "Directrice Ops, RetailPlus",
        content: "Une réduction des coûts de 30% dès le premier trimestre. L'automatisation est invisible et parfaite.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Alexandre D.",
        role: "Founder, ScaleAgency",
        content: "Le ROI a été immédiat. Je ne pensais pas qu'on pouvait aller aussi loin dans l'IA sans coder.",
        image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        name: "Marie L.",
        role: "CMO, TechGrowth",
        content: "Leur approche data-driven nous a permis de comprendre enfin nos clients. Indispensable.",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        name: "David K.",
        role: "CTO, StartUp Flow",
        content: "Professionnalisme exemplaire. Les workflows sont robustes et scalables. Bravo.",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Sarah J.",
        role: "Head of Sales, B2B Connect",
        content: "Nous avons gagné 15h par semaine par commercial. C'est juste énorme pour notre équipe.",
        image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
];

const Testimonials = () => {
    // Client avatars for the overlapping display
    const clientAvatars = [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/85.jpg",
        "https://randomuser.me/api/portraits/women/65.jpg"
    ];

    return (
        <section className="section bg-white overflow-hidden py-32">
            <div className="container mb-20 text-center">
                {/* Client Stats Section */}
                <div className="mb-12 flex flex-col items-center gap-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center gap-3 -space-x-3">
                        {clientAvatars.map((avatar, index) => (
                            <img
                                key={index}
                                src={avatar}
                                alt={`Client ${index + 1}`}
                                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                                loading="lazy"
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-slate-600 text-base font-medium">
                            + de <span className="font-bold text-[#3B82F6]">20 entreprises</span> accompagnées
                        </p>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, starI) => (
                                <Star key={starI} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Ils ont <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">transformé</span> leur <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">business</span></h2>
                <p className="text-slate-500 text-lg font-light">
                    Rejoignez les leaders qui utilisent l'IA pour dominer leur marché.
                </p>
            </div>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div className="flex animate-marquee gap-8 py-4">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[350px] flex-shrink-0 bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(77,163,255,0.1)]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-50" loading="lazy" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                                    <p className="text-sm text-slate-400 font-medium">{t.role}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, starI) => (
                                    <Star key={starI} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 leading-relaxed font-light text-lg">"{t.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
