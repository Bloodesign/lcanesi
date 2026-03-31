const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 h-14 flex items-center">
                <span
                    className="text-lg font-bold text-[#1B3A6B] tracking-tight cursor-pointer"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Lionel Canesi
                </span>
            </div>
        </header>
    );
};

export default Header;
