'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/atoms/Button';

interface ServicePageTemplateProps {
    title: string;
    subtitle: string;
    description: string;
    features: { label: string; value: string }[];
    ctaLabel: string;
    ctaHref?: string;
    imageSrc: string;
    disclaimer?: string;
}

export default function ServicePageTemplate({
    title,
    subtitle,
    description,
    features,
    ctaLabel,
    ctaHref,
    imageSrc,
    disclaimer
}: ServicePageTemplateProps) {
    return (
        <div className="min-h-screen bg-[#051622] pt-6 sm:pt-8 md:pt-12 pb-16 sm:pb-24 md:pb-32">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">

                {/* Text Content */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 order-2 lg:order-1">
                    <div className="flex flex-col gap-2 sm:gap-4">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                            {title}
                        </h1>
                        <p className="text-[#C5A059] text-base sm:text-lg md:text-xl font-light tracking-wide">
                            {subtitle}
                        </p>
                    </div>

                    <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                        {description}
                    </p>

                    {/* Features List */}
                    <ul className="flex flex-col gap-3 sm:gap-4 border-t border-white/10 pt-4 sm:pt-6 md:pt-8 mt-2 sm:mt-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 sm:gap-4 group">
                                <span className="text-[#C5A059] font-serif text-base sm:text-lg md:text-xl">✦</span>
                                <div className="flex flex-col">
                                    <span className="text-white font-medium uppercase tracking-widest text-[10px] sm:text-xs">
                                        {feature.label}
                                    </span>
                                    <span className="text-white text-xs sm:text-sm">
                                        {feature.value}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 sm:mt-6 md:mt-8">
                        {ctaHref ? (
                            <Link href={ctaHref}>
                                <Button variant="primary">
                                    {ctaLabel}
                                </Button>
                            </Link>
                        ) : (
                            <Button variant="primary">
                                {ctaLabel}
                            </Button>
                        )}
                    </div>

                    {/* Disclaimer */}
                    {disclaimer && (
                        <div className="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 border border-[#C5A059]/30 rounded-sm bg-[#C5A059]/5">
                            <p className="text-white/70 text-[10px] sm:text-xs leading-relaxed">
                                ⚠️ {disclaimer}
                            </p>
                        </div>
                    )}
                </div>

                {/* Visual */}
                <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full order-1 lg:order-2 overflow-hidden rounded-sm border border-white/5">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            </div>
        </div>
    );
}
