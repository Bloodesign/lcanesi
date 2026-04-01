const Hero = () => {
    return (
        <section className="relative pt-28 pb-0" style={{ background: 'linear-gradient(to bottom, #ffffff 70%, #F8F7F4 100%)' }}>
            {/* Warm gradient orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1B3A6B]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 text-center flex flex-col items-center px-6 pb-28">

                {/* Badge */}
                <div className="mb-8 inline-flex items-center gap-2 bg-[#1B3A6B]/6 border border-[#1B3A6B]/15 rounded-full px-3 py-1.5 animate-float-gentle">
                    <img
                        src="/personne%201.jpg"
                        alt="Lionel Canesi"
                        className="w-8 h-8 rounded-full object-cover object-top border-2 border-white shadow-sm"
                    />
                    <span className="text-[#1B3A6B] text-xs font-semibold pr-1">Accompagnement stratégique pour cabinets d'expertise comptable</span>
                </div>


                {/* Main title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] text-[#111827]">
                    L'accompagnement qui donne enfin<br />
                    <span className="relative inline-block">
                        <span className="relative z-10 text-[#1B3A6B] italic">une direction</span>
                        <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-[#C9963B]/30 rounded-full -z-0" />
                    </span>
                    {' '}à votre cabinet.
                </h1>

                {/* Subtitle */}
                <p className="text-sm md:text-base text-[#6B7280] mb-8 max-w-2xl mx-auto leading-relaxed">
                    Expert-comptable pendant 25 ans, passionné par l'évolution du métier et son rôle stratégique au cœur de l'économie et de la société, je souhaite transmettre mon expérience et une vision optimiste de la profession.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="#qualification"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#1B3A6B] text-white font-semibold rounded-full text-sm hover:bg-[#2A5298] btn-3d"
                    >
                        Soumettre ma candidature →
                    </a>
                    <a
                        href="#services"
                        className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#1B3A6B] font-semibold rounded-full text-sm border-2 border-[#1B3A6B]/25 hover:border-[#1B3A6B]/50 hover:bg-[#1B3A6B]/5 btn-3d-outline"
                    >
                        Découvrir le programme
                    </a>
                </div>

            </div>

        </section>
    );
};

export default Hero;
