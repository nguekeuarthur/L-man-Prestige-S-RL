'use client';

import { useTranslations } from '@/hooks/useTranslations';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations();

  return (
    <section className={styles.heroSection}>
      {/* Background Image */}
      <div className={styles.heroBackground}>
        <div className={styles.heroOverlay}></div>
      </div>

      {/* Content Container */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
        <button className={styles.heroCta}>{t('hero.cta')}</button>
      </div>
    </section>
  );
}
