'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/atoms/Button';
import styles from '../ServiceHero.module.css';

export default function DemenagementServicePage() {
    const t = useTranslations('services.demenagement');
    const locale = useLocale();

    const offerings = [
        { title: t('features.prive'), desc: 'Déménagement privé sécurisé et planifié.' },
        { title: t('features.emballage'), desc: 'Emballage professionnel et protection de vos biens.' },
        { title: t('features.montage'), desc: 'Montage et démontage de mobilier par des équipes expertes.' },
    ];

    const benefits = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36" aria-hidden>
                    <path d="M3 7h18M3 12h12M3 17h18" />
                </svg>
            ),
            title: 'Logistique maîtrisée',
            desc: 'Planification, matériel adapté et suivi point par point.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36" aria-hidden>
                    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
                </svg>
            ),
            title: 'Protection des biens',
            desc: 'Emballage, bâchage et manutention soigneuse.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                </svg>
            ),
            title: 'Fiabilité',
            desc: 'Équipes ponctuelles, assurance et gestion claire des horaires.'
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
                    <h2 className={styles.benefitsMainTitle}>Pourquoi choisir notre déménagement ?</h2>
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
                    <p className={styles.ctaDescription}>Obtenez une estimation gratuite et sans engagement pour votre déménagement.</p>
                    <div className={styles.ctaButtons}>
                        <Link href={`/${locale}/devis?service=demenagement`}>
                            <Button variant="primary">{t('cta')}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
