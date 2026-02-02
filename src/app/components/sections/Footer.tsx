'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations();

  const currentYear = new Date().getFullYear();

  // Menu columns with services links
  const servicesLinks = [
    { key: 'footer.sales', href: '/fr/services/travaux' },
    { key: 'footer.rental', href: '/fr/services/nettoyage' },
    { key: 'footer.management', href: '/fr/services/demenagement' },
    { key: 'footer.relocation', href: '/fr/services/relocation' },
  ];
  
  const aboutLinks = [
    { key: 'footer.ourStory', href: '/fr/about' },
    { key: 'footer.careers', href: '/fr/devis' },
  ];
  
  const legalLinks = [
    { key: 'footer.terms', href: '/fr/mentions-legales' },
    { key: 'footer.privacy', href: '/fr/confidentialite' },
    { key: 'footer.legalNotice', href: '/fr/mentions-legales' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Main content */}
        <div className={styles.footerContent}>
          {/* Column 1: Services */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{t('footer.services')}</h3>
            <ul className={styles.footerLinks}>
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{t(link.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: About */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{t('footer.about')}</h3>
            <ul className={styles.footerLinks}>
              {aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{t(link.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{t('footer.legal')}</h3>
            <ul className={styles.footerLinks}>
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{t(link.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{t('footer.contact')}</h3>
            <div className={styles.footerContact}>
              <p>
                <span className={styles.contactLabel}>{t('footer.email')}:</span>
                <a href="mailto:contact@lemanprestige.ch">contact@lemanprestige.ch</a>
              </p>
              <p>
                <span className={styles.contactLabel}>{t('footer.phone')}:</span>
                <a href="tel:+41XXXXXXXXX">+41 XX XXX XX XX</a>
              </p>
              <p>
                <span className={styles.contactLabel}>{t('footer.address')}:</span>
                <span>Genève, Suisse</span>
              </p>
            </div>

            {/* Social Media Icons */}
            <div>
              <p className={styles.socialLabel}>{t('footer.followUs')}</p>
              <div className={styles.socialIcons}>
                <a href="#" className={`${styles.socialIcon} linkedin`} title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a href="#" className={`${styles.socialIcon} instagram`} title="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm3.75 4.5h-7.5a2.25 2.25 0 0 0-2.25 2.25v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25zm0 1.5v7.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75zm-3.75 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className={styles.footerDisclaimer}>
          <p>{t('footer.disclaimer')}</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          {t('footer.copyright', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
}
