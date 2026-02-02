'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/atoms/Button';
import styles from '../ServiceHero.module.css';

export default function NettoyageServicePage() {
    const t = useTranslations('services.nettoyage');
    const locale = useLocale();

    const offerings = [
        { title: t('features.finbail'), desc: 'Nettoyage complet pour restitution locative conforme.' },
        { title: t('features.finchantier'), desc: 'Nettoyage après chantier, évacuation des déchets et remise en état.' },
        { title: t('features.vitres'), desc: 'Nettoyage professionnel de surfaces vitrées, intérieures et extérieures.' },
    ];

    const benefits = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36" aria-hidden>
                    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    <path d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
                </svg>
            ),
            title: 'Équipe pro',
            desc: 'Opérateurs formés et équipement professionnel.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36" aria-hidden>
                    <path d="M20.4 8.6c-1.6-1.6-4.4-1.6-6 0l-1.4 1.4-1.4-1.4c-1.6-1.6-4.4-1.6-6 0-1.6 1.6-1.6 4.4 0 6l7.4 7.4 7.4-7.4c1.6-1.6 1.6-4.4 0-6z" />
                </svg>
            ),
            title: 'Produits sûrs',
            desc: 'Solutions éco-responsables sur demande.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                </svg>
            ),
            title: 'Garantie qualité',
            desc: 'Check-list et validation avant départ.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36" aria-hidden>
                    <path d="M3 7h18M3 12h12M3 17h18" />
                </svg>
            ),
            title: 'Flexibilité',
            desc: 'Interventions ponctuelles ou forfaits réguliers.'
        },
    ];

    return (
        <div>
            <section className={styles.heroSection}>
                <div className={styles.heroOrb1}></div>
                <div className={styles.heroOrb2}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{t('title')}</h1>
                    <p className={styles.heroSubtitle}>{t('subtitle')}</p>
                </div>
            </section>

            <section className={styles.offeringSection}>
                <div className={styles.offeringGrid}>
                    {offerings.map((offering, i) => (
                        <div key={i} className={styles.offeringCard}>
                            <div className={styles.offeringNumber}>{i + 1}</div>
                            <h3 className={styles.offeringTitle}>{offering.title}</h3>
                            <p className={styles.offeringDescription}>{offering.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsTitleSection}>
                    <h2 className={styles.benefitsMainTitle}>Pourquoi choisir notre nettoyage ?</h2>
                    <p className={styles.benefitsSubtitle}>{t('subtitle')}</p>
                </div>
                <div className={styles.benefitsGrid}>
                    {benefits.map((b, i) => (
                        <div key={i} className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>{b.icon}</div>
                            <h3 className={styles.benefitTitle}>{b.title}</h3>
                            <p className={styles.benefitDescription}>{b.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Demander un devis</h2>
                    <p className={styles.ctaDescription}>Obtenez une estimation gratuite et sans engagement pour votre nettoyage.</p>
                    <div className={styles.ctaButtons}>
                        <Link href={`/${locale}/devis?service=nettoyage`}>
                            <Button variant="primary">{t('cta')}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
