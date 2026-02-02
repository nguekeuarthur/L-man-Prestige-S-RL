'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const languages = [
    { code: 'fr', name: 'FR', fullName: 'Français' },
    { code: 'en', name: 'EN', fullName: 'English' },
    { code: 'es', name: 'ES', fullName: 'Español' },
];

const LanguageSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = useLocale();
    const currentLang = languages.find(lang => lang.code === currentLocale) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside as unknown as EventListener);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside as unknown as EventListener);
        };
    }, [isOpen]);

    const handleLanguageChange = (code: string) => {
        const newPath = pathname.replace(/^\/(fr|en|es)(?=\/|$)/, `/${code}`);
        router.push(newPath);
        router.refresh();
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Bouton premium avec icône globe */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-[#C5A059]/30 backdrop-blur-sm"
                aria-label="Changer de langue"
            >
                {/* Icône Globe */}
                <svg 
                    className="w-4 h-4 text-white/70 group-hover:text-[#C5A059] transition-colors duration-300 group-hover:scale-110 transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M12 21a9 9 0 100-18 9 9 0 000 18z" 
                    />
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M3.6 9h16.8M3.6 15h16.8" 
                    />
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" 
                    />
                </svg>
                
                {/* Code langue actuel */}
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#C5A059] transition-colors duration-300">
                    {currentLang.name}
                </span>
                
                {/* Chevron */}
                <svg
                    className={`w-3.5 h-3.5 text-white/50 group-hover:text-[#C5A059] transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown simple et lisible */}
            <div 
                className={`absolute right-0 mt-2 min-w-[120px] overflow-hidden z-50 transition-all duration-300 origin-top-right ${
                    isOpen 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
            >
                <div className="bg-[#051622] border border-[#C5A059]/20 rounded-lg shadow-2xl overflow-hidden">
                    {languages.map((lang, index) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-200 ${
                                index !== languages.length - 1 ? 'border-b border-white/5' : ''
                            } ${
                                currentLocale === lang.code
                                    ? 'bg-[#C5A059]/15'
                                    : 'hover:bg-white/8'
                            }`}
                        >
                            <span className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                                currentLocale === lang.code ? 'text-[#C5A059]' : 'text-white/80 hover:text-white'
                            }`}>
                                {lang.fullName}
                            </span>
                            
                            {currentLocale === lang.code && (
                                <svg className="w-3.5 h-3.5 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
