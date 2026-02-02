'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/atoms/Button';
import styles from '../ServiceHero.module.css';

export default function AdministratifServicePage() {
    const t = useTranslations('services.administratif');
    const locale = useLocale();

    const offerings = [
        { title: t('features.logement'), desc: 'Gestion des contrats, état des lieux et relations propriétaires.' },
        { title: t('features.services'), desc: 'Coordination des services liés au logement : ménage, maintenance, et réparations.' },
        { title: t('features.documents'), desc: 'Préparation et archivage des documents administratifs et juridiques.' },
    ];

    const benefits = [
        {
            icon: (
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Conformité',
            desc: 'Tous les dossiers sont traités selon la réglementation locale et les meilleures pratiques.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l7 4v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Sécurité',
            desc: 'Protection des informations sensibles et confidentialité assurée.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Réactivité',
            desc: 'Processus optimisés pour des réponses rapides et des délais respectés.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18v-6a9 9 0 0118 0v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 18v2a3 3 0 006 0v-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Support dédié',
            desc: 'Un interlocuteur unique pour le suivi complet de votre dossier.'
        }
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
                    <h2 className={styles.benefitsMainTitle}>Pourquoi choisir notre assistance administrative ?</h2>
                    <p className={styles.benefitsSubtitle}>Simplifiez la gestion administrative liée à la location et à la propriété — on s'occupe de tout.</p>
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
                    <h2 className={styles.ctaTitle}>{t('cta_title') ?? 'Prêt à démarrer ?'}</h2>
                    <p className={styles.ctaDescription}>{t('cta_description') ?? 'Contactez-nous pour un accompagnement administratif personnalisé.'}</p>
                    <div className={styles.ctaButtons}>
                        <Link href={`/${locale}/devis?service=administratif`}>
                            <Button variant="primary">{t('cta')}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
