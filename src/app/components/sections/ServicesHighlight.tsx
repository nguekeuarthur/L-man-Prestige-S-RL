'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import styles from './ServicesHighlight.module.css';

export default function ServicesHighlight() {
    const t = useTranslations('homepage');
    const locale = useLocale();

    const services = [
        {
            id: 'travaux',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="13 2 13 9 20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 17h6M9 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: t('services.highlight.travaux_title'),
            description: t('services.highlight.travaux_desc'),
            href: `/${locale}/services/travaux`
        },
        {
            id: 'nettoyage',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
            ),
            title: t('services.highlight.nettoyage_title'),
            description: t('services.highlight.nettoyage_desc'),
            href: `/${locale}/services/nettoyage`
        },
        {
            id: 'demenagement',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20 8v8a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M23 11h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 10l2-2m0 4l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: t('services.highlight.demenagement_title'),
            description: t('services.highlight.demenagement_desc'),
            href: `/${locale}/services/demenagement`
        },
        {
            id: 'relocation',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18 12a6 6 0 1 1-12 0" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" fill="none"/>
                </svg>
            ),
            title: t('services.highlight.relocation_title'),
            description: t('services.highlight.relocation_desc'),
            href: `/${locale}/services/relocation`
        }
    ];

    return (
        <section className={styles.servicesHighlight}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('services.highlight.title')}</h2>
                    <p className={styles.subtitle}>{t('services.highlight.subtitle')}</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <Link href={service.href} key={service.id} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                            <div className={styles.discover}>
                                <span>{t('services.highlight.discover')}</span>
                                <span>→</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href={`/${locale}/services`} className={styles.allServicesLink}>
                        {t('services.highlight.view_all')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
