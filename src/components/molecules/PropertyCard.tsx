'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface PropertyCardProps {
    property: {
        id: string;
        title: string;
        location: string;
        price: string;
        type: string;
        sqm: number;
        rooms: number;
        baths: number;
        image: string;
    };
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    const t = useTranslations('properties');

    return (
        <div className="group relative overflow-hidden bg-[#051622] border border-white/5 transition-all duration-700 hover:border-[#C5A059]/30">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051622] via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40" />

                {/* Type Badge */}
                <div className="absolute top-6 left-6">
                    <span className="bg-[#C5A059] text-white text-[10px] uppercase tracking-[0.2em] px-4 py-2 font-body font-bold shadow-[0_4px_20px_rgba(197,160,89,0.3)]">
                        {t(property.type)}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 relative">
                <div className="flex flex-col gap-1.5 mb-4">
                    <p className="!text-white text-[10px] uppercase tracking-[0.2em] font-light">
                        {property.location}
                    </p>
                    <h3 className="!text-white text-base font-semibold leading-tight group-hover:text-[#C5A059] transition-colors duration-500">
                        {property.title}
                    </h3>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.05em] mb-4 border-t border-white/5 pt-4">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-white font-bold">{property.sqm}</span>
                        <span className="text-white/70">{t('sqm')}</span>
                    </div>
                    <div className="h-4 w-[0.5px] bg-white/10" />
                    <div className="flex flex-col gap-0.5">
                        <span className="text-white font-bold">{property.rooms}</span>
                        <span className="text-white/70">{t('rooms')}</span>
                    </div>
                    <div className="h-4 w-[0.5px] bg-white/10" />
                    <div className="flex flex-col gap-0.5">
                        <span className="text-white font-bold">{property.baths}</span>
                        <span className="text-white/70">{t('baths')}</span>
                    </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-white font-body text-base tracking-tight font-medium">
                        {property.price}
                    </span>
                    <button className="text-[#C5A059] text-[10px] uppercase tracking-[0.3em] font-bold relative group/btn overflow-hidden pt-1">
                        <span className="relative z-10 transition-transform duration-500 group-hover/btn:-translate-y-full block">
                            {t('viewDetails')}
                        </span>
                        <span className="absolute top-full left-0 z-10 transition-transform duration-500 group-hover/btn:-translate-y-full block text-white">
                            {t('viewDetails')}
                        </span>
                        <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C5A059]/30" />
                    </button>
                </div>
            </div>
        </div>
    );
};
