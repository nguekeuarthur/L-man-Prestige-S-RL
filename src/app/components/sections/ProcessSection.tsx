'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
    const t = useTranslations('homepage');

    const steps = [
        {
            number: 1,
            title: t('process.step1_title'),
            description: t('process.step1_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
            )
        },
        {
            number: 2,
            title: t('process.step2_title'),
            description: t('process.step2_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="13 2 13 9 20 9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 12h4M12 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        },
        {
            number: 3,
            title: t('process.step3_title'),
            description: t('process.step3_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            number: 4,
            title: t('process.step4_title'),
            description: t('process.step4_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16 11h6M16 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        }
    ];

    return (
        <section className={styles.processSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('process.title')}</h2>
                    <p className={styles.subtitle}>{t('process.subtitle')}</p>
                </div>

                {/* Desktop Timeline */}
                <div className={styles.timelineDesktop}>
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.iconBox}>{step.icon}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className={styles.connector}></div>}
                        </React.Fragment>
                    ))}
                </div>

                {/* Mobile Timeline */}
                <div className={styles.timelineMobile}>
                    {steps.map((step) => (
                        <div key={step.number} className={styles.mobileStep}>
                            <div className={styles.mobileStepContent}>
                                <div className={styles.mobileStepNumber}>{step.number}</div>
                                <div>
                                    <h3 className={styles.mobileStepTitle}>{step.title}</h3>
                                    <p className={styles.mobileStepDescription}>{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
