'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/atoms/Button';
import styles from '../ServiceHero.module.css';

export default function TravauxServicePage() {
    const t = useTranslations('services.travaux');
    const locale = useLocale();

    const offerings = [
        { title: t('features.renovation'), desc: 'Rénovations structurelles, remise à neuf complète et transformations d\'espaces.' },
        { title: t('features.peinture'), desc: 'Finitions peinture haute de gamme et revêtements muraux durables.' },
        { title: t('features.menuiserie'), desc: 'Agencements sur mesure, portes, fenêtres et menuiseries intérieures.' },
    ];

    const benefits = [
        { icon: '✦', title: 'Équipe expérimentée', desc: 'Artisans certifiés et partenaires de confiance.' },
        { icon: '✨', title: 'Réactivité', desc: 'Planning adapté et respect des délais.' },
        { icon: '✓', title: 'Qualité garantie', desc: 'Suivi de chantier et contrôle qualité strict.' },
        { icon: '◆', title: 'Transparence tarifaire', desc: 'Devis détaillé et sans surprise.' },
    ];

    return (
        <div>
            {/* Hero */}
            <section className={styles.heroSection}>
                <div className={styles.heroOrb1}></div>
                <div className={styles.heroOrb2}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{t('title')}</h1>
                    <p className={styles.heroSubtitle}>{t('subtitle')}</p>
                </div>
            </section>

            {/* Offering Cards */}
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

            {/* Benefits */}
            <section className={styles.benefitsSection}>
                <div className={styles.benefitsTitleSection}>
                    <h2 className={styles.benefitsMainTitle}>Pourquoi nous choisir ?</h2>
                    <p className={styles.benefitsSubtitle}>Un accompagnement de A à Z pour vos travaux de rénovation.</p>
                </div>
                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, i) => (
                        <div key={i} className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>{benefit.icon}</div>
                            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                            <p className={styles.benefitDescription}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Demander un devis</h2>
                    <p className={styles.ctaDescription}>Obtenez une estimation gratuite et sans engagement pour votre projet.</p>
                    <div className={styles.ctaButtons}>
                        <Link href={`/${locale}/devis?service=travaux`}>
                            <Button variant="primary">{t('cta')}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
