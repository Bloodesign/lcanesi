import { ArrowUpRight } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1117]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="cursor-pointer flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>
                    <img
                        src="/logo-scalyx.png"
                        alt="SCALYX Logo"
                        className="h-8 sm:h-10 w-auto"
                    />
                </div>


                {/* CTA — always visible */}
                <a href="https://calendly.com/nicolas-scalyx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#15485d] text-white text-xs font-semibold transition-all duration-300 shadow-lg border-2 border-dotted border-white flex-shrink-0">
                    Réserver un appel
                    <ArrowUpRight className="w-3 h-3" />
                </a>
            </div>
        </header>
    );
};

export default Header;
