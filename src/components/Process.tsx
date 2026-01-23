import { Search, PenTool, BarChart } from 'lucide-react';

const steps = [
    {
        number: "01",
        icon: <Search className="w-8 h-8 text-[#3B82F6]" />,
        title: "Audit & Stratégie IA",
        description: "Nous analysons vos process actuels pour identifier les goulots d'étranglement et les opportunités d'automatisation à fort impact."
    },
    {
        number: "02",
        icon: <PenTool className="w-8 h-8 text-[#3B82F6]" />,
        title: "Conception & Déploiement",
        description: "Nos ingénieurs développent vos workflows sur-mesure et les intègrent parfaitement à votre écosystème existant."
    },
    {
        number: "03",
        icon: <BarChart className="w-8 h-8 text-[#3B82F6]" />,
        title: "Optimisation Continue",
        description: "Nous suivons les performances en temps réel et ajustons les systèmes pour maximiser votre retour sur investissement."
    }
];

const Process = () => {
    return (
        <section className="section bg-slate-50 overflow-hidden">
            <div className="container">

                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Comment nous <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">transformons</span> votre <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">business</span></h2>
                </div>

                <div className="relative grid md:grid-cols-3 gap-10">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="relative mb-8">
                                <div className="w-24 h-24 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:border-[#3B82F6] group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)]">
                                    {step.icon}
                                </div>
                                {/* Number Background */}
                                <span className="absolute -top-8 -right-6 text-[8rem] font-bold text-slate-100/80 -z-10 select-none font-sans">
                                    {step.number}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#3B82F6] transition-colors">{step.title}</h3>
                            <p className="text-slate-500 leading-relaxed max-w-xs font-light">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Process;
