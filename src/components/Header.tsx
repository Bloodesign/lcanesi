import { ArrowUpRight } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    <img 
                        src="/logo-scalyx.png" 
                        alt="SCALYX Logo" 
                        className="w-10 h-10"
                    />
                </div>

                {/* Navigation - Centered Desktop */}
                <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                    <a href="#services" className="text-sm font-medium text-slate-700 uppercase tracking-wide hover:text-[#3B82F6] transition-colors">
                        Réalisations
                    </a>
                    <a href="#process" className="text-sm font-medium text-slate-700 uppercase tracking-wide hover:text-[#3B82F6] transition-colors">
                        Offre
                    </a>
                    <a href="#testimonials" className="text-sm font-medium text-slate-700 uppercase tracking-wide hover:text-[#3B82F6] transition-colors">
                        Rejoindre Scalyx
                    </a>
                </nav>

                {/* CTA */}
                <a href="#contact" className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-[#3B82F6] text-white text-xs font-semibold hover:bg-[#2563EB] transition-all duration-300 shadow-lg border-2 border-dotted border-white">
                    Réserver un appel
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
            </div>
        </header>
    );
};

export default Header;
