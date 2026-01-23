import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Combien de temps prend un projet d'automatisation ?",
        answer: "Chaque projet est unique, mais nos missions types se déroulent sur 2 à 4 semaines. 1 semaine d'audit, 1-2 semaines de développement, et 1 semaine de tests et formation."
    },
    {
        question: "Quels outils utilisez-vous ?",
        answer: "Nous sommes agnostiques, mais nous maîtrisons parfaitement la stack moderne : Make (Integromat), n8n, Zapier, Airtable, OpenAI, et les API personnalisées."
    },
    {
        question: "Est-ce adapté à mon secteur d'activité ?",
        answer: "Absolument. Que vous soyez dans l'e-commerce, l'immobilier, la finance ou les services, l'automatisation s'applique à tous les processus répétitifs et administratifs."
    },
    {
        question: "Quel est le retour sur investissement (ROI) attendu ?",
        answer: "Nos clients constatent généralement un ROI positif dès le 2ème mois. En moyenne, nous faisons économiser 20h de travail par semaine à une équipe de 5 personnes."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section bg-slate-50">
            <div className="container max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Questions <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">Fréquentes</span></h2>
                    <p className="text-slate-500 text-lg font-light">
                        Tout ce que vous devez savoir avant de commencer.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white border-blue-200 shadow-lg shadow-blue-50' : 'bg-white border-slate-200 hover:border-blue-200'}`}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                            >
                                <span className={`font-semibold text-lg pr-8 transition-colors ${openIndex === index ? 'text-[#3B82F6]' : 'text-slate-900'}`}>{faq.question}</span>
                                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openIndex === index ? 'bg-[#3B82F6] text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent font-light">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
