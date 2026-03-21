import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [progress, setProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const duration = 1600;
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
            setTimeout(onComplete, 700);
        }, duration);

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    const p = Math.min(progress, 100);
    const circumference = 2 * Math.PI * 36;
    const strokeDashoffset = circumference - (p / 100) * circumference;

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f1117] transition-all duration-700 ease-in-out ${isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}
        >
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#15485d]/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative flex flex-col items-center gap-8 z-10">
                {/* Ring + Logo */}
                <div className="relative flex items-center justify-center">
                    {/* Spinning ring */}
                    <svg width="96" height="96" viewBox="0 0 96 96" className="-rotate-90">
                        {/* Track */}
                        <circle
                            cx="48" cy="48" r="36"
                            fill="none"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="2"
                        />
                        {/* Progress arc */}
                        <circle
                            cx="48" cy="48" r="36"
                            fill="none"
                            stroke="#2cc8dc"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            style={{ transition: 'stroke-dashoffset 0.05s linear' }}
                        />
                    </svg>

                    {/* Logo centré dans le ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src="/logo-scalyx.png"
                            alt="Scalyx"
                            className="h-8 w-auto"
                        />
                    </div>
                </div>

                {/* Pourcentage */}
                <div className="flex flex-col items-center gap-1">
                    <span
                        className="text-5xl font-black tracking-tight text-white tabular-nums"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                        {Math.round(p)}<span className="text-[#2cc8dc] text-3xl">%</span>
                    </span>

                    {/* Barre fine */}
                    <div className="w-32 h-px bg-white/10 rounded-full overflow-hidden mt-2">
                        <div
                            className="h-full bg-gradient-to-r from-[#15485d] to-[#2cc8dc] rounded-full"
                            style={{ width: `${p}%`, transition: 'width 0.05s linear' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
