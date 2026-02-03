'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import styles from '../../../devis/DevisPage.module.css';

export default function RelocationRecherchePage() {
    const t = useTranslations('relocationForm');

    const [formData, setFormData] = useState({
        transaction: 'all',
        location: '',
        budgetMin: '',
        budgetMax: ''
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [searchStatus, setSearchStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
    const [searchError, setSearchError] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSearchProperties = async () => {
        // build query params and navigate to /[locale]/properties
        const parts = pathname.split('/');
        const locale = parts[1] || 'fr';
        const params = new URLSearchParams();
        if (formData.transaction) params.set('transaction', formData.transaction);
        if (formData.location) params.set('location', formData.location);
        if (formData.budgetMin) params.set('budgetMin', String(formData.budgetMin));
        if (formData.budgetMax) params.set('budgetMax', String(formData.budgetMax));

        const target = `/${locale}/properties?${params.toString()}`;
        router.push(target);
    };

    return (
        <div className={styles.devisPage}>
            <div className={styles.decorativeOrb1}></div>
            <div className={styles.decorativeOrb2}></div>

            <div className={styles.devisContainer}>
                <div className={styles.header}>
                    <div className={styles.headerBadge}>
                        <span>Recherche d'appartement</span>
                    </div>
                    <h1 className={styles.title}>{t('title')}</h1>
                    {/* Subtitle intentionally removed per request */}
                    <div className={styles.headerDivider}>
                        <span className={styles.dividerLine}></span>
                        <span className={styles.dividerIcon}>◆</span>
                        <span className={styles.dividerLine}></span>
                    </div>
                </div>

                <div className={styles.form}>
                    <div className={styles.formSection}>
                        <h3 className={styles.sectionTitle}>Critères de recherche</h3>

                        <div className={styles.grid}>
                            <div className={`${styles.inputGroup} ${focusedField === 'transaction' ? styles.focused : ''}`}>
                                <label className={styles.label}>
                                    Type de transaction
                                </label>
                                <select
                                    name="transaction"
                                    value={formData.transaction}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('transaction')}
                                    onBlur={() => setFocusedField(null)}
                                    className={styles.select}
                                >
                                    <option value="all">Tous</option>
                                    <option value="rent">Location</option>
                                    <option value="sale">Vente</option>
                                </select>
                            </div>
                            <div className={`${styles.inputGroup} ${focusedField === 'location' ? styles.focused : ''}`}>
                                <label className={styles.label}>
                                    Localisation
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('location')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Genève, Montreux, Lausanne..."
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className="grid">
                            <div className={`${styles.inputGroup} ${focusedField === 'budgetMin' ? styles.focused : ''}`}>
                                <label className={styles.label}>Budget minimum</label>
                                <input
                                    type="number"
                                    name="budgetMin"
                                    value={formData.budgetMin}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('budgetMin')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="0"
                                    className={styles.input}
                                />
                            </div>
                            <div className={`${styles.inputGroup} ${focusedField === 'budgetMax' ? styles.focused : ''}`}>
                                <label className={styles.label}>Budget maximum</label>
                                <input
                                    type="number"
                                    name="budgetMax"
                                    value={formData.budgetMax}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('budgetMax')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder=""
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <button
                                type="button"
                                onClick={handleSearchProperties}
                                className={styles.submitButton}
                            >
                                <span className={styles.buttonContent}>
                                    <span>{searchStatus === 'loading' ? 'Recherche en cours...' : 'Rechercher des appartements'}</span>
                                    <span className={styles.buttonIcon}>🔍</span>
                                </span>
                            </button>
                        </div>

                        {(searchStatus === 'done' || searchStatus === 'error') && (
                            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(5, 22, 34, 0.3)', borderRadius: '12px', border: '1px solid rgba(197, 160, 89, 0.15)' }}>
                                {searchError && (
                                    <p style={{ color: '#ffb3b3', margin: 0 }}>{searchError}</p>
                                )}
                                {!searchError && searchResults.length === 0 && (
                                    <p style={{ color: '#fff', margin: 0 }}>Aucun appartement trouvé avec ces critères.</p>
                                )}
                                {!searchError && searchResults.length > 0 && (
                                    <>
                                        <strong style={{ color: '#fff' }}>Résultats trouvés : {searchResults.length}</strong>
                                        <ul style={{ marginTop: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                                            {searchResults.map(result => (
                                                <li key={result.id} style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                                    <strong>{result.title}</strong> — {result.location} — {result.price}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
