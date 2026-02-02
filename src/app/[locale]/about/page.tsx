'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutPage() {
    const t = useTranslations('about');

    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: t('values.proximity.title'),
            description: t('values.proximity.description')
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: t('values.quality.title'),
            description: t('values.quality.description')
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: t('values.transparency.title'),
            description: t('values.transparency.description')
        }
    ];

    const stats = [
        { number: '10+', label: 'Années d\'expérience' },
        { number: '500+', label: 'Clients satisfaits' },
        { number: '100%', label: 'Engagement qualité' },
        { number: '24/7', label: 'Support disponible' },
    ];

    return (
        <div className="min-h-screen bg-[#051622] overflow-hidden">
            {/* Hero Section - Full Screen */}
            <section className="relative min-h-screen flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        alt="Léman Prestige Office"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#051622] via-[#051622]/90 to-[#051622]/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051622] via-transparent to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-[#C5A059]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#C5A059]/3 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16 lg:px-20 pt-32 pb-20">
                    <div className="max-w-3xl mx-auto lg:mx-0 lg:ml-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                            <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium">
                                Depuis 2015
                            </span>
                        </div>

                        <h1 className="!text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6" style={{ color: 'white' }}>
                            {t('title')}
                        </h1>
                        
                        <p className="text-[#C5A059] text-xl sm:text-2xl md:text-3xl font-light tracking-wide mb-8">
                            {t('subtitle')}
                        </p>
                        
                        <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
                            {t('description')}
                        </p>

                        {/* CTA */}
                        <a 
                            href="#contact" 
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5A059] text-[#051622] font-semibold uppercase tracking-wider text-sm hover:bg-white transition-all duration-300 group"
                        >
                            Nous contacter
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Découvrir</span>
                    <svg className="w-5 h-5 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-20 border-y border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16 lg:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-[#C5A059] text-4xl sm:text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-white/50 text-xs sm:text-sm uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="relative py-24 sm:py-32">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#051622] via-[#0a1f2e] to-[#051622]" />
                
                <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16 lg:px-20">
                    {/* Section Header */}
                    <div className="text-center mb-16 sm:mb-20">
                        <span className="text-[#C5A059] text-xs uppercase tracking-[0.4em] font-medium mb-4 block">
                            Notre philosophie
                        </span>
                        <h2 className="!text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: 'white' }}>
                            {t('values.title')}
                        </h2>
                        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto" />
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {values.map((value, index) => (
                            <div 
                                key={index} 
                                className="group relative p-8 sm:p-10 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#C5A059]/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Number */}
                                <div className="absolute top-6 right-6 text-white/5 text-6xl font-bold">
                                    0{index + 1}
                                </div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-xl bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-6 group-hover:bg-[#C5A059]/20 group-hover:scale-110 transition-all duration-300">
                                        {value.icon}
                                    </div>
                                    
                                    <h3 className="!text-white text-xl sm:text-2xl font-bold mb-4 group-hover:text-[#C5A059] transition-colors duration-300" style={{ color: 'white' }}>
                                        {value.title}
                                    </h3>
                                    
                                    <p className="text-white/70 text-sm sm:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="relative py-24 sm:py-32">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image Side */}
                        <div className="relative">
                            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2674&auto=format&fit=crop"
                                    alt="Notre équipe"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#051622]/80 via-transparent to-transparent" />
                            </div>
                            
                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:right-8 bg-[#C5A059] p-6 sm:p-8 rounded-xl shadow-2xl max-w-[200px] sm:max-w-[250px]">
                                <div className="text-[#051622] text-3xl sm:text-4xl font-bold mb-2">100%</div>
                                <div className="text-[#051622]/70 text-sm">Satisfaction client garantie</div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:pl-8">
                            <span className="text-[#C5A059] text-xs uppercase tracking-[0.4em] font-medium mb-4 block">
                                Notre mission
                            </span>
                            <h2 className="!text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'white' }}>
                                Votre partenaire de confiance pour l&apos;immobilier de prestige
                            </h2>
                            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                Chez Léman Prestige, nous croyons que chaque client mérite une attention personnalisée et un service d&apos;excellence. Notre équipe expérimentée vous accompagne à chaque étape de votre projet immobilier, avec discrétion et professionnalisme.
                            </p>
                            
                            {/* Features List */}
                            <div className="space-y-4">
                                {['Accompagnement personnalisé', 'Réseau exclusif', 'Expertise locale', 'Confidentialité absolue'].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-white text-sm sm:text-base" style={{ color: 'white' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-24 sm:py-32 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16 lg:px-20">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#C5A059] text-xs uppercase tracking-[0.4em] font-medium mb-4 block">
                            Contact
                        </span>
                        <h2 className="!text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: 'white' }}>
                            Restons en contact
                        </h2>
                        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* Email Card */}
                        <a 
                            href="mailto:contact@lemanprestige.ch"
                            className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#C5A059]/30 transition-all duration-500 text-center"
                        >
                            <div className="w-16 h-16 mx-auto rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-6 group-hover:bg-[#C5A059]/20 group-hover:scale-110 transition-all duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="!text-white text-lg font-semibold mb-2 group-hover:text-[#C5A059] transition-colors" style={{ color: 'white' }}>Email</h3>
                            <p className="text-white/60 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>contact@lemanprestige.ch</p>
                        </a>

                        {/* Phone Card */}
                        <a 
                            href="tel:+41XXXXXXXXX"
                            className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#C5A059]/30 transition-all duration-500 text-center"
                        >
                            <div className="w-16 h-16 mx-auto rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-6 group-hover:bg-[#C5A059]/20 group-hover:scale-110 transition-all duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="!text-white text-lg font-semibold mb-2 group-hover:text-[#C5A059] transition-colors" style={{ color: 'white' }}>Téléphone</h3>
                            <p className="text-white/60 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>+41 XX XXX XX XX</p>
                        </a>

                        {/* Location Card */}
                        <div className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#C5A059]/30 transition-all duration-500 text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-6 group-hover:bg-[#C5A059]/20 group-hover:scale-110 transition-all duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="!text-white text-lg font-semibold mb-2 group-hover:text-[#C5A059] transition-colors" style={{ color: 'white' }}>Localisation</h3>
                            <p className="text-white/60 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Genève • Lausanne • Montreux</p>
                        </div>
                    </div>

                    {/* Map or Additional Info */}
                    <div className="mt-12 p-8 sm:p-12 bg-gradient-to-r from-[#C5A059]/5 via-[#C5A059]/10 to-[#C5A059]/5 border border-[#C5A059]/20 rounded-2xl text-center">
                        <h3 className="!text-white text-xl sm:text-2xl font-bold mb-4" style={{ color: 'white' }}>Zone d&apos;intervention</h3>
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            Nous intervenons dans toute la région lémanique : Genève, Lausanne, Nyon, Vaud, et toutes les communes environnantes. Notre équipe se déplace pour vous offrir un service personnalisé.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
