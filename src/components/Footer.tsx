
const Footer = () => {
    return (
        <footer className="bg-[#0f1117] py-6 sm:py-8 border-t border-white/10">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start">
                    <img src="/logo-scalyx.png" alt="Scalyx - Agence de communication Aix-en-Provence" className="h-9 sm:h-12 w-auto mb-1.5" width="120" height="48" loading="lazy" />
                    <p className="text-white/40 text-xs">© {new Date().getFullYear()} Scalyx. Tous droits réservés.</p>
                </div>
                <a href="/mentions-legales.html" className="text-white/40 text-sm hover:text-[#2cc8dc] transition-colors sm:mr-20">Mentions Légales</a>
            </div>
        </footer>
    );
};

export default Footer;
