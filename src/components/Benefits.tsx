import { Zap, TrendingDown, BarChart3, Database } from 'lucide-react';

const benefits = [
    {
        icon: <Zap className="w-6 h-6 text-white" />,
        title: "Gain de temps massif",
        description: "Automatisez jusqu'à 80% de vos tâches manuelles et libérez votre équipe pour ce qui compte vraiment."
    },
    {
        icon: <TrendingDown className="w-6 h-6 text-white" />,
        title: "Réduction des coûts",
        description: "Divisez vos coûts opérationnels par 2 en remplaçant les processus lents et coûteux par des workflows IA."
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        title: "Scalabilité infinie",
        description: "Gérez 10x plus de clients sans recruter davantage grâce à une infrastructure qui évolue avec vous."
    },
    {
        icon: <Database className="w-6 h-6 text-white" />,
        title: "Data-Driven",
        description: "Prenez des décisions éclairées basées sur des données en temps réel, centralisées et analysées par l'IA."
    }
];

const Benefits = () => {
    return (
        <section id="services" className="section bg-white relative overflow-hidden">
            <div className="container relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Pourquoi choisir <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">l'IA</span> ?</h2>
                    <p className="text-slate-500 text-lg font-light">
                        Propulsez votre entreprise dans une nouvelle ère de productivité et d'efficacité.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(77,163,255,0.15)] hover:border-blue-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 translate-x-12 -translate-y-12"></div>

                            <div className="w-14 h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#3B82F6] transition-colors">{benefit.title}</h3>
                            <p className="text-slate-500 text-lg leading-relaxed font-light">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Benefits;
