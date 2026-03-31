import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [progress, setProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [showTagline, setShowTagline] = useState(false);

    useEffect(() => {
        const taglineTimer = setTimeout(() => setShowTagline(true), 300);
        return () => clearTimeout(taglineTimer);
    }, []);

    useEffect(() => {
        const duration = 1400;
        const intervalTime = 16;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        const completeTimer = setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 400);
        }, duration);

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    const p = Math.min(progress, 100);

    return (
        <div
            className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-all duration-400 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1B3A6B 100%)' }}
        >
            {/* Ambient orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-[#C9963B]/8 rounded-full blur-[140px]" />
                <div className="absolute right-1/4 bottom-1/3 w-[400px] h-[400px] bg-[#1B3A6B]/40 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center px-8 text-center">

                {/* Logo */}
                <div
                    className="mb-10 transition-all duration-700"
                    style={{ opacity: showTagline ? 1 : 0, transform: showTagline ? 'translateY(0)' : 'translateY(-12px)' }}
                >
                    <span
                        className="text-3xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Lionel Canesi
                    </span>
                    <div className="mt-1.5 h-px w-full bg-gradient-to-r from-transparent via-[#C9963B]/60 to-transparent" />
                </div>

                {/* Tagline */}
                <div
                    className="mb-14 transition-all duration-700 delay-200"
                    style={{ opacity: showTagline ? 1 : 0, transform: showTagline ? 'translateY(0)' : 'translateY(12px)' }}
                >
                    <p
                        className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-sm"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Votre cabinet mérite<br />
                        <span className="text-[#C9963B] italic">une direction claire.</span>
                    </p>
                </div>

                {/* Progress bar */}
                <div className="w-48 flex flex-col items-center gap-3">
                    <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full"
                            style={{
                                width: `${p}%`,
                                background: 'linear-gradient(to right, #C9963B, #e8b96a)',
                                transition: 'width 0.05s linear',
                            }}
                        />
                    </div>
                    <span className="text-white/30 text-xs font-mono tabular-nums">{Math.round(p)}%</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
