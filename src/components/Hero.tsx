import { useState, useEffect } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

const GoogleLogo = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
    );
};

// Company Logo Components
const CompanyLogo1 = () => (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" fill="currentColor" opacity="0.3"/>
        <circle cx="16" cy="16" r="8" fill="currentColor"/>
        <text x="36" y="20" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Logoipsum</text>
    </svg>
);

const CompanyLogo2 = () => (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L20 12L28 12L22 18L24 26L16 20L8 26L10 18L4 12L12 12L16 4Z" fill="currentColor"/>
        <text x="36" y="20" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Logoipsum</text>
    </svg>
);

const CompanyLogo3 = () => (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6C11 6 7 10 7 15C7 20 11 24 16 24C21 24 25 20 25 15C25 10 21 6 16 6ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="currentColor"/>
        <text x="36" y="20" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Logoipsum</text>
    </svg>
);

const CompanyLogo4 = () => (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="24" height="16" rx="2" fill="currentColor" opacity="0.2"/>
        <rect x="8" y="12" width="16" height="8" rx="1" fill="currentColor"/>
        <text x="36" y="20" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Logoipsum</text>
    </svg>
);

const CompanyLogo5 = () => (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L20 10L28 10L22 14L24 22L16 18L8 22L10 14L4 10L12 10L16 4Z" fill="currentColor" opacity="0.3"/>
        <path d="M16 8L18 12L22 12L19 15L20 20L16 17L12 20L13 15L10 12L14 12L16 8Z" fill="currentColor"/>
        <text x="36" y="20" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Logoipsum</text>
    </svg>
);

const CompanyLogo6 = () => (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="12" r="4" fill="currentColor" opacity="0.4"/>
        <circle cx="12" cy="20" r="3" fill="currentColor" opacity="0.6"/>
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6"/>
        <text x="36" y="20" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Logoipsum</text>
    </svg>
);

const Hero = () => {
    // Client logos for the overlapping display
    const clientLogos = [
        "/personne 1.jpg",
        "/personne 2.jpg",
        "/personne 3.jpg"
    ];

    const [count, setCount] = useState(0);
    const targetCount = 20;

    useEffect(() => {
        const duration = 2000; // 2 secondes
        const steps = 40;
        const increment = targetCount / steps;
        const intervalTime = duration / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                const next = prev + increment;
                if (next >= targetCount) {
                    clearInterval(timer);
                    return targetCount;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden bg-white">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            {/* Workflow Animation Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]">
                <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                    {/* Grid dots background */}
                    <defs>
                        <pattern id="workflow-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="#94a3b8" opacity="0.4"/>
                        </pattern>
                        {/* Arrow marker definition */}
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" opacity="0.6"/>
                        </marker>
                        {/* Gradient for animated lines */}
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0">
                                <animate attributeName="stop-opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite"/>
                            </stop>
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5">
                                <animate attributeName="stop-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
                            </stop>
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0">
                                <animate attributeName="stop-opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite"/>
                            </stop>
                        </linearGradient>
                    </defs>
                    
                    <rect width="100%" height="100%" fill="url(#workflow-grid)"/>
                    
                    {/* Workflow Nodes with Real Logos - Positioned to avoid center content */}
                    {/* Node 1 - Webhook (Top Left) - High opacity, not on text */}
                    <g className="animate-float" style={{ animationDelay: '0s', animationDuration: '4s' }}>
                        <rect x="80" y="80" width="90" height="50" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" opacity="1.0"/>
                        <circle cx="125" cy="105" r="10" fill="#3B82F6" opacity="0.8"/>
                    </g>
                    
                    {/* Node 2 - Gmail (Top Center-Left) - Low opacity, might overlap text */}
                    <g className="animate-float" style={{ animationDelay: '0.3s', animationDuration: '4s' }}>
                        <rect x="250" y="70" width="85" height="50" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" opacity="0.25"/>
                        {/* Gmail Logo - depuis /public/logo-gmail.webp */}
                        <image
                            href="/logo-gmail.webp"
                            x="278.5"
                            y="81"
                            width="28"
                            height="28"
                            preserveAspectRatio="xMidYMid meet"
                            opacity="0.25"
                        />
                    </g>
                    
                    {/* Node 3 - WhatsApp (Top Right) - High opacity, not on text */}
                    <g className="animate-float" style={{ animationDelay: '0.6s', animationDuration: '4s' }}>
                        <rect x="1010" y="90" width="90" height="50" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" opacity="1.0"/>
                        {/* WhatsApp Logo - Realistic */}
                        <g transform="translate(1041, 101)">
                            <circle cx="14" cy="14" r="13" fill="#25D366"/>
                            <circle cx="14" cy="14" r="11" fill="#128C7E"/>
                            <path d="M14 5C10 5 7 8 7 12C7 13.5 7.3 15 7.7 16L7 19L9.5 18.5C11 19 12.5 19.5 14 19.5C18 19.5 21.5 16 21.5 12C21.5 8 18 5 14 5ZM12 15L10.5 13.5L14 10L17.5 13.5L16 15L14 12.5L12 15Z" fill="white" opacity="0.95"/>
                            <circle cx="14" cy="14" r="1.3" fill="white" opacity="0.8"/>
                        </g>
                    </g>
                    
                    {/* Node 4 - Google Sheets (Bottom Left) - High opacity, not on text */}
                    <g className="animate-float" style={{ animationDelay: '0.9s', animationDuration: '4s' }}>
                        <rect x="90" y="605" width="100" height="50" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" opacity="1.0"/>
                        {/* Google Sheets Logo - depuis /public/logo sheets.png */}
                        <image
                            href="/logo sheets.png"
                            x="126"
                            y="616"
                            width="28"
                            height="28"
                            preserveAspectRatio="xMidYMid meet"
                            opacity="1.0"
                        />
                    </g>
                    
                    {/* Node 5 - Slack (Bottom Center) - Low opacity, might overlap text */}
                    <g className="animate-float" style={{ animationDelay: '1.2s', animationDuration: '4s' }}>
                        <rect x="500" y="625" width="85" height="50" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" opacity="0.25"/>
                        {/* Slack Logo - Realistic */}
                        <g transform="translate(528.5, 636)">
                            <path d="M6 1.5C6 0.7 6.7 0 7.5 0C8.3 0 9 0.7 9 1.5V4H7.5C6.7 4 6 3.3 6 2.5V1.5Z" fill="#E01E5A"/>
                            <path d="M16.5 5.5C17.3 5.5 18 6.2 18 7C18 7.8 17.3 8.5 16.5 8.5H14.5V7C14.5 6.2 15.2 5.5 16 5.5H16.5Z" fill="#36C5F0"/>
                            <path d="M13 15.5C13 16.3 12.3 17 11.5 17C10.7 17 10 16.3 10 15.5V13H11.5C12.3 13 13 13.7 13 14.5V15.5Z" fill="#2EB67D"/>
                            <path d="M2.5 11C1.7 11 1 10.3 1 9.5C1 8.7 1.7 8 2.5 8H5V9.5C5 10.3 4.3 11 3.5 11H2.5Z" fill="#ECB22E"/>
                        </g>
                    </g>
                    
                    {/* Node 6 - Gmail (Bottom Right) - High opacity, not on text */}
                    <g className="animate-float" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
                        <rect x="985" y="610" width="85" height="50" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" opacity="1.0"/>
                        {/* Gmail Logo - depuis /public/logo-gmail.webp */}
                        <image
                            href="/logo-gmail.webp"
                            x="1013.5"
                            y="621"
                            width="28"
                            height="28"
                            preserveAspectRatio="xMidYMid meet"
                            opacity="1.0"
                        />
                    </g>
                    
                    {/* Node 7 - Airtable (Left Side) - High opacity, not on text */}
                    <g className="animate-float" style={{ animationDelay: '1.8s', animationDuration: '4s' }}>
                        <rect x="50" y="355" width="85" height="50" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" opacity="1.0"/>
                        {/* Airtable Logo - depuis /public/logo airtable.svg */}
                        <image
                            href="/logo airtable.svg"
                            x="73.5"
                            y="361"
                            width="38"
                            height="38"
                            preserveAspectRatio="xMidYMid meet"
                            opacity="1.0"
                        />
                    </g>
                    
                    {/* Node 8 - Notion (Right Side) - High opacity, not on text */}
                    <g className="animate-float" style={{ animationDelay: '2.1s', animationDuration: '4s' }}>
                        <rect x="1055" y="385" width="75" height="50" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" opacity="1.0"/>
                        {/* Notion Logo - depuis /public/notion logo.png */}
                        <image
                            href="/notion logo.png"
                            x="1078.5"
                            y="396"
                            width="28"
                            height="28"
                            preserveAspectRatio="xMidYMid meet"
                            opacity="1.0"
                        />
                    </g>
                    
                    {/* Connection Lines with Arrows */}
                    {/* Webhook to Gmail */}
                    <line x1="170" y1="105" x2="292.5" y2="95" stroke="#94a3b8" strokeWidth="2.5" opacity="0.6" strokeDasharray="5,5" markerEnd="url(#arrowhead)">
                        <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                    </line>
                    
                    {/* Gmail to WhatsApp */}
                    <line x1="335" y1="95" x2="1055" y2="115" stroke="#94a3b8" strokeWidth="2.5" opacity="0.6" strokeDasharray="5,5" markerEnd="url(#arrowhead)">
                        <animate attributeName="stroke-dashoffset" values="0;10" dur="2.5s" repeatCount="indefinite" begin="0.3s"/>
                    </line>
                    
                    {/* Webhook to Airtable */}
                    <line x1="125" y1="130" x2="92.5" y2="380" stroke="#94a3b8" strokeWidth="2" opacity="0.5" strokeDasharray="4,4" markerEnd="url(#arrowhead)">
                        <animate attributeName="stroke-dashoffset" values="0;8" dur="2.5s" repeatCount="indefinite" begin="0.2s"/>
                    </line>
                    
                    {/* Gmail to Google Sheets */}
                    <line x1="292.5" y1="120" x2="140" y2="630" stroke="#94a3b8" strokeWidth="2" opacity="0.5" strokeDasharray="4,4" markerEnd="url(#arrowhead)">
                        <animate attributeName="stroke-dashoffset" values="0;8" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                    </line>
                    
                    {/* WhatsApp to Notion */}
                    <line x1="1055" y1="140" x2="1092.5" y2="410" stroke="#94a3b8" strokeWidth="2" opacity="0.5" strokeDasharray="4,4" markerEnd="url(#arrowhead)">
                        <animate attributeName="stroke-dashoffset" values="0;8" dur="2.5s" repeatCount="indefinite" begin="0.8s"/>
                    </line>
                    
                    {/* Airtable to Slack */}
                    <line x1="135" y1="380" x2="542.5" y2="650" stroke="#94a3b8" strokeWidth="2" opacity="0.5" strokeDasharray="4,4" markerEnd="url(#arrowhead)">
                        <animate attributeName="stroke-dashoffset" values="0;8" dur="3s" repeatCount="indefinite" begin="1s"/>
                    </line>
                    
                    {/* Google Sheets to Gmail (bas droite) */}
                    <line x1="190" y1="630" x2="1027.5" y2="635" stroke="#94a3b8" strokeWidth="2.5" opacity="0.6" strokeDasharray="5,5" markerEnd="url(#arrowhead)">
                        <animate attributeName="stroke-dashoffset" values="0;10" dur="3s" repeatCount="indefinite" begin="1.2s"/>
                    </line>
                    
                    {/* Slack to Notion */}
                    <line x1="600" y1="650" x2="1092.5" y2="410" stroke="#94a3b8" strokeWidth="2" opacity="0.5" strokeDasharray="4,4" markerEnd="url(#arrowhead)">
                        <animate attributeName="stroke-dashoffset" values="0;8" dur="3s" repeatCount="indefinite" begin="1.4s"/>
                    </line>
                    
                    {/* Animated data flow dots */}
                    <circle r="4" fill="#3B82F6" opacity="0.8">
                        <animateMotion dur="3s" repeatCount="indefinite">
                            <mpath href="#path1"/>
                        </animateMotion>
                    </circle>
                    <path id="path1" d="M 170 105 L 292.5 95" fill="none" stroke="none"/>
                    
                    <circle r="4" fill="#3B82F6" opacity="0.8">
                        <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.4s">
                            <mpath href="#path2"/>
                        </animateMotion>
                    </circle>
                    <path id="path2" d="M 335 95 L 1055 115" fill="none" stroke="none"/>
                    
                    <circle r="3" fill="#3B82F6" opacity="0.7">
                        <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.3s">
                            <mpath href="#path3"/>
                        </animateMotion>
                    </circle>
                    <path id="path3" d="M 125 130 L 92.5 380" fill="none" stroke="none"/>
                    
                    <circle r="3" fill="#3B82F6" opacity="0.7">
                        <animateMotion dur="4s" repeatCount="indefinite" begin="0.6s">
                            <mpath href="#path4"/>
                        </animateMotion>
                    </circle>
                    <path id="path4" d="M 292.5 120 L 140 630" fill="none" stroke="none"/>
                    
                    <circle r="3" fill="#3B82F6" opacity="0.7">
                        <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.9s">
                            <mpath href="#path5"/>
                        </animateMotion>
                    </circle>
                    <path id="path5" d="M 1055 140 L 1092.5 410" fill="none" stroke="none"/>
                    
                    <circle r="3" fill="#3B82F6" opacity="0.7">
                        <animateMotion dur="4s" repeatCount="indefinite" begin="1.1s">
                            <mpath href="#path6"/>
                        </animateMotion>
                    </circle>
                    <path id="path6" d="M 135 380 L 542.5 650" fill="none" stroke="none"/>
                    
                    <circle r="4" fill="#3B82F6" opacity="0.8">
                        <animateMotion dur="4s" repeatCount="indefinite" begin="1.3s">
                            <mpath href="#path7"/>
                        </animateMotion>
                    </circle>
                    <path id="path7" d="M 190 630 L 1027.5 635" fill="none" stroke="none"/>
                    
                    <circle r="3" fill="#3B82F6" opacity="0.7">
                        <animateMotion dur="4s" repeatCount="indefinite" begin="1.5s">
                            <mpath href="#path8"/>
                        </animateMotion>
                    </circle>
                    <path id="path8" d="M 600 650 L 1092.5 410" fill="none" stroke="none"/>
                </svg>
            </div>

            <div className="container relative z-10 text-center flex flex-col items-center px-6">
                {/* Client Stats Section */}
                <div className="mb-6 flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    <div className="flex flex-col items-center gap-1">
                        {/* Client Logos */}
                        <div className="flex items-center -space-x-2">
                            {clientLogos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`Client ${index + 1}`}
                                    className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-md"
                                    loading="lazy"
                                />
                            ))}
                        </div>
                        {/* Rating with Google Logo */}
                        <div className="flex items-center gap-1.5">
                            <span className="text-slate-500 text-xs font-medium">4,5</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, starI) => (
                                    <Star key={starI} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <GoogleLogo />
                        </div>
                    </div>
                    <p className="text-slate-600 text-sm font-medium">
                        <span className="font-bold text-[#3B82F6]">{Math.floor(count)}+ entreprises</span> accompagnées
                    </p>
                </div>

                {/* Main Title with animation */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-5xl mx-auto leading-[1.15] animate-fade-up text-black" style={{ animationDelay: '0.2s' }}>
                    Transformer votre <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">business</span> en <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">système autonome</span>
                </h1>

                {/* Subtitle with animation */}
                <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed font-normal animate-fade-up" style={{ animationDelay: '0.4s' }}>
                    Réduisez vos coûts de 50% et gagnez 20h par semaine grâce à des workflows intelligents qui transforment votre business dès le premier mois.
                </p>

                {/* CTA Button with animation */}
                <a 
                    href="#contact" 
                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#3B82F6] rounded-full hover:bg-[#2563EB] shadow-lg active:scale-95 text-base animate-fade-up border-2 border-dotted border-white"
                    style={{ animationDelay: '0.6s' }}
                >
                    Réserver un appel
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </div>

            {/* Companies Marquee Section */}
            <div className="relative mt-6 lg:mt-6 py-4">
                <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
                    {/* Gradient masks for smooth fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                    
                    <div className="flex animate-marquee gap-12 lg:gap-16 items-center" style={{ width: 'max-content' }}>
                        {/* Duplicate logos for seamless loop */}
                        {[...Array(2)].map((_, duplicateIndex) => (
                            <div key={duplicateIndex} className="flex gap-12 lg:gap-16 items-center">
                                {[
                                    { logo: "/entreprise 1.png", opacity: 0.4 },
                                    { logo: "/entreprise 2.png", opacity: 1 },
                                    { logo: "/entreprise 3.png", opacity: 0.6 }
                                ].map((company, index) => (
                                    <div
                                        key={`${duplicateIndex}-${index}`}
                                        className="flex items-center justify-center h-10 lg:h-12 w-24 lg:w-28 flex-shrink-0 transition-opacity duration-300"
                                        style={{ opacity: company.opacity }}
                                    >
                                        <img
                                            src={company.logo}
                                            alt={`Entreprise ${index + 1}`}
                                            className="h-full w-full object-contain object-center filter brightness-0"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
