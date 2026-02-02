'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/atoms/Button';
import styles from '../ServiceHero.module.css';

export default function RelocationServicePage() {
    const t = useTranslations('services.relocation');
    const locale = useLocale();

    const offerings = [
        { title: t('features.recherche'), desc: 'Recherche ciblée d’appartements selon vos critères.' },
        { title: t('features.preselection'), desc: 'Présélection et vérification des annonces.' },
        { title: t('features.visites'), desc: 'Organisation et accompagnement lors des visites.' },
    ];

    const benefits = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36" aria-hidden>
                    <path d="M3 7h18M3 12h12M3 17h18" />
                </svg>
            ),
            title: 'Gain de temps',
            desc: 'Nous filtrons et préqualifions pour vous présenter les meilleures options.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36" aria-hidden>
                    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                </svg>
            ),
            title: 'Accompagnement personnalisé',
            desc: 'Un interlocuteur dédié pour coordonner chaque étape.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                </svg>
            ),
            title: 'Fiabilité',
            desc: 'Processus transparent et dossiers vérifiés pour chaque candidature.'
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
                    <h2 className={styles.benefitsMainTitle}>Pourquoi choisir notre relocation ?</h2>
                    <p className={styles.benefitsSubtitle}>{t('description')}</p>
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
                    <p className={styles.ctaDescription}>Obtenez une estimation gratuite et sans engagement pour votre relocation.</p>
                    <div className={styles.ctaButtons}>
                        <Link href={`/${locale}/services/relocation/recherche`}>
                            <Button variant="primary">{t('cta')}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
