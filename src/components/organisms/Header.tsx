'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '../atoms/LanguageSwitcher';

interface HeaderProps {
    locale?: string;
}

const Header: React.FC<HeaderProps> = ({ locale: propLocale }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const hookLocale = useLocale();
    const locale = propLocale || hookLocale;
    const t = useTranslations('header');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Bloquer le scroll du body quand le menu est ouvert
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Main navigation links (removed direct 'properties' link — moved into Services)
    const navLinks = [
        { name: t('services'), href: `/${locale}/services` },
        { name: t('about'), href: `/${locale}/about` },
        { name: t('contact'), href: `/${locale}/devis` },
    ];

    const Logo = () => (
        <Link href={`/${locale}`} className="group flex items-center">
            <Image
                src="/leman-logo.png"
                alt="Léman Prestige SÀRL"
                width={90}
                height={45}
                className="object-contain group-hover:opacity-80 transition-opacity duration-700"
                priority
                unoptimized
            />
        </Link>
    );

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled
                    ? 'bg-[#051622]/95 backdrop-blur-xl py-2 shadow-[0_6px_20px_rgba(0,0,0,0.2)]'
                    : 'bg-[#051622]/90 py-3'
                    }`}
            >
                <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    {/* Navigation Desktop */}
                    <nav className="hidden lg:flex flex-1 justify-center items-center gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="!text-white font-body text-[12px] uppercase tracking-[0.3em] font-bold relative group pt-1"
                            >
                                <span className="relative z-10 opacity-100">{link.name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-500 group-hover:w-full shadow-[0_0_10px_#C5A059]" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex-shrink-0 flex items-center justify-end gap-3 lg:pr-6">
                        <div className="hidden lg:block">
                            <LanguageSwitcher />
                        </div>

                        {/* Mobile Menu Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-[70]"
                            aria-label="Menu"
                        >
                            <span 
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                                }`} 
                            />
                            <span 
                                className={`block w-6 h-0.5 bg-[#C5A059] my-1.5 transition-all duration-300 ${
                                    isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                                }`} 
                            />
                            <span 
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                                }`} 
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
                    isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Mobile Menu Panel */}
                <div
                    className={`absolute top-0 right-0 h-full w-full max-w-sm bg-[#051622] shadow-2xl transition-transform duration-500 ease-out ${
                        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-5 border-b border-white/10">
                        <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-semibold">Menu</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-[#C5A059] transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="p-5">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-4 border-b border-white/5 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <span className="text-white text-lg font-medium uppercase tracking-wider group-hover:text-[#C5A059] transition-colors duration-300">
                                    {link.name}
                                </span>
                                <span className="block text-white/40 text-xs mt-1 group-hover:text-white/60 transition-colors">
                                    {link.name === t('properties') && 'Découvrez nos biens'}
                                    {link.name === t('services') && 'Nos prestations'}
                                    {link.name === t('about') && 'Notre histoire'}
                                    {link.name === t('contact') && 'Demandez un devis'}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Footer du menu */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/10 bg-[#051622]">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-white/50 text-xs uppercase tracking-wider">Langue</span>
                            <LanguageSwitcher />
                        </div>
                        <div className="text-center pt-3 border-t border-white/5">
                            <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-light mb-2">Excellence</p>
                            <p className="text-white/30 text-[9px] uppercase tracking-wider">Genève • Lausanne • Montreux</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
