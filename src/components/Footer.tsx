import { ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <section id="contact" className="py-24 bg-[#0F172A] border-t border-slate-900 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3B82F6] rounded-full blur-[150px] opacity-[0.15] pointer-events-none"></div>

                <div className="container text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white">
                        Prêt à <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">automatiser</span> votre <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">business</span> ?
                    </h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Réservez un appel gratuit et découvrez comment transformer vos opérations dès maintenant.
                    </p>

                    <a href="#" className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-dotted border-white text-base">
                        Réserver un appel stratégique
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            <footer className="bg-[#020617] py-12 border-t border-slate-900 text-slate-400 text-sm">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">S</div>
                        <span className="text-white font-bold text-lg tracking-wide">SCALYX</span>
                    </div>

                    <div className="flex gap-8 text-slate-400 font-medium">
                        <a href="#" className="hover:text-[#3B82F6] transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-[#3B82F6] transition-colors">Politique de Confidentialité</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:text-white transition-all duration-300">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:text-white transition-all duration-300">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:text-white transition-all duration-300">
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>
                </div>
                <div className="container mt-8 text-center text-xs text-slate-600 font-medium">
                    © {new Date().getFullYear()} Scalyx. Tous droits réservés.
                </div>
            </footer>
        </>
    );
};

export default Footer;
