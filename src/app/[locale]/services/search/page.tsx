'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export default function SearchServicePage() {
    const t = useTranslations('services.search');

    const features = [
        { label: 'Network', value: t('features.network') },
        { label: 'Selection', value: t('features.selection') },
        { label: 'Negotiation', value: t('features.negotiation') },
    ];

    return (
        <ServicePageTemplate
            title={t('title')}
            subtitle={t('subtitle')}
            description={t('description')}
            features={features}
            ctaLabel={t('cta')}
            imageSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop"
        />
    );
}
