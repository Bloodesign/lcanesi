const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0d1f3c' }} className="py-10">
            <div className="container">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Lionel Canesi
                        </span>
                        <p className="text-white/30 text-xs">© {new Date().getFullYear()} LC Cession — Site réalisé par Scalyx</p>
                    </div>
                    <a href="/mentions-legales.html" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                        Mentions légales
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
