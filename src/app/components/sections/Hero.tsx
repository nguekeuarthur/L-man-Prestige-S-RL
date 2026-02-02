'use client';

import { useTranslations } from '@/hooks/useTranslations';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

// Images d'arrière-plan liées aux services de relocation/immobilier en Suisse
const backgroundImages = [
  {
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80',
    alt: 'Maison moderne de luxe'
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    alt: 'Villa avec jardin'
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
    alt: 'Appartement contemporain'
  },
  {
    src: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=1920&q=80',
    alt: 'Genève et le Lac Léman'
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    alt: 'Intérieur luxueux'
  }
];

export default function Hero() {
  const t = useTranslations();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Background Images Carousel */}
      <div className={styles.heroBackground}>
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.backgroundImage} ${
              index === currentImageIndex ? styles.active : ''
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              quality={85}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
        <div className={styles.heroOverlay}></div>
      </div>

      {/* Content Container */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
        <button className={styles.heroCta}>{t('hero.cta')}</button>
      </div>

      {/* Image Indicators */}
      <div className={styles.imageIndicators}>
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentImageIndex ? styles.indicatorActive : ''
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
