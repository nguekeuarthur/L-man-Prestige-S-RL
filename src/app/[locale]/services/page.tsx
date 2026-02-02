'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
    const t = useTranslations('services');
    const locale = useLocale();

    const services = [
        {
            id: 'travaux',
            title: t('travaux.title'),
            description: t('travaux.subtitle'),
            href: `/${locale}/services/travaux`,
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 'nettoyage',
            title: t('nettoyage.title'),
            description: t('nettoyage.subtitle'),
            href: `/${locale}/services/nettoyage`,
            image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 'demenagement',
            title: t('demenagement.title'),
            description: t('demenagement.subtitle'),
            href: `/${locale}/services/demenagement`,
            image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 'relocation',
            title: t('relocation.title'),
            description: t('relocation.subtitle'),
            href: `/${locale}/services/relocation`,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 'souslocation',
            title: t('souslocation.title'),
            description: t('souslocation.subtitle'),
            href: `/${locale}/services/souslocation`,
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 'administratif',
            title: t('administratif.title'),
            description: t('administratif.subtitle'),
            href: `/${locale}/services/administratif`,
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 'assurances',
            title: t('assurances.title'),
            description: t('assurances.subtitle'),
            href: `/${locale}/services/assurances`,
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop"
        }
        ,
        {
            id: 'appartements',
            title: t('appartements.title'),
            description: t('appartements.subtitle'),
            href: `/${locale}/properties`,
            image: "/images/appartements.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-[#051622] pt-24 sm:pt-32 md:pt-48 lg:pt-56 pb-16 md:pb-32">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
                {/* Header Section */}
                <div className="flex flex-col gap-3 mb-8 sm:mb-12 md:mb-16 max-w-2xl">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        {t('title')}
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services.map((service) => (
                        <Link
                            href={service.href}
                            key={service.id}
                            className="group relative block aspect-[4/3] overflow-hidden rounded-sm border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                unoptimized
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#051622] via-[#051622]/40 to-transparent transition-opacity duration-500" />

                            <div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full">
                                <h3 className="!text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-[#C5A059] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="!text-white/70 text-xs sm:text-sm font-light line-clamp-2">
                                    {service.description}
                                </p>
                                <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[#C5A059] uppercase tracking-widest text-[10px] sm:text-xs font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    <span>{t('discover')}</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Spacer */}
                <div className="h-12 sm:h-16 md:h-24"></div>

                {/* CTA Section */}
                <div className="py-12 sm:py-16 md:py-24 border-t border-white/10 flex items-center justify-center">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 flex flex-col items-center justify-center">
                        <span className="inline-block mb-4 sm:mb-6 text-[#C5A059] text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">
                            {t('cta_label')}
                        </span>

                        <h2 className="!text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                            {t('cta_question')}
                        </h2>
                        <p className="!text-white text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed max-w-2xl">
                            {t('cta_description')}
                        </p>

                        <div className="flex flex-col items-center justify-center mt-12 w-full max-w-4xl mx-auto">
                            <Link
                                href={`/${locale}/devis`}
                                className="flex flex-col items-center justify-center gap-10 py-10 px-0 bg-transparent border-0 shadow-none rounded-none transition-none"
                            >
                                {/* Icône supprimée */}
                                <div className="text-center relative z-10">
                                    <span className="block text-white text-2xl md:text-3xl font-extrabold uppercase tracking-[0.12em] mb-0 text-center transition-colors duration-300 hover:text-[#C5A059] cursor-pointer">
                                        {t('cta_button')}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
