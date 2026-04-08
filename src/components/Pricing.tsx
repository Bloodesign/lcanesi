const Pricing = () => {
    return (
        <section id="equipe" className="bg-[#F8F7F4] py-24 overflow-hidden">
            <div className="container">

                <div className="max-w-2xl mb-16 reveal-left">
                    <p className="text-[#C9963B] text-xs font-bold uppercase tracking-widest mb-3">LE FONDATEUR</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Qui est <span className="text-[#1B3A6B]">Lionel Canesi ?</span>
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto reveal-scale">
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="flex flex-col md:flex-row">

                            {/* Photo */}
                            <div className="md:w-96 lg:w-[420px] flex-shrink-0 bg-[#0a0a0a] overflow-hidden h-64 sm:h-80 md:h-auto md:min-h-[420px]">
                                <img
                                    src="/img-conference.jpg"
                                    alt="Lionel Canesi en conférence"
                                    className="w-full h-full object-cover object-top"
                                    style={{ display: 'block' }}
                                />
                            </div>

                            {/* Contenu texte */}
                            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">

                                <h3 className="text-2xl font-bold text-[#111827] mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    Lionel Canesi
                                </h3>

                                <blockquote className="border-l-4 border-[#C9963B] pl-5 py-1 mb-6">
                                    <p className="text-[#1B3A6B] text-base font-semibold italic leading-snug">
                                        "Celui qui détient la facture détient la comptabilité. Si on ajoute la gestion des données et l'utilisation de l'IA pour organiser et traiter les tâches, la profession est à un tournant stratégique de son évolution."
                                    </p>
                                </blockquote>

                                <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
                                    Une expérience multiple de la gestion de cabinets, associé pendant 20 ans d'un groupe régional d'expertise comptable passé de 15 à 300 collaborateurs, puis dirigeant d'un cabinet de 30 personnes jusqu'en 2023.
                                </p>
                                <p className="text-[#111827] text-sm font-semibold leading-relaxed mb-8">
                                    Président du CNOEC, président d'ECF. Ces responsabilités m'ont appris une chose : les dirigeants de cabinets méritent un espace pour réfléchir à leur avenir, pas seulement à leur prochain dossier.
                                </p>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pricing;
