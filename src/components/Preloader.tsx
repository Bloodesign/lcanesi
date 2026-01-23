import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [progress, setProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // 1.5 seconds max as requested
        const duration = 1500;
        const intervalTime = 20;
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

        // Trigger complete
        const completeTimer = setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 600); // Allow fade out
        }, duration);

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <div className="flex flex-col items-center justify-center">
                {/* Logo Scalyx */}
                <div className="mb-8 flex justify-center">
                    <img
                        src="/logo-scalyx.png"
                        alt="Scalyx Logo"
                        className="h-16 w-auto"
                    />
                </div>

                {/* Loading Percentage */}
                <div>
                    <span className="text-4xl font-bold text-slate-900">{Math.round(progress)}%</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
