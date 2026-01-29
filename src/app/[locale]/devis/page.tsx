'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import styles from './DevisPage.module.css';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export default function DevisPage() {
    const t = useTranslations('devis');
    const searchParams = useSearchParams();
    const preselectedService = searchParams.get('service') || '';

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: preselectedService,
        address: '',
        city: '',
        date: '',
        description: '',
        privacy: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        // Validation spéciale pour le champ date
        if (name === 'date' && value) {
            const selectedDate = new Date(value);
            const todayDate = new Date();
            todayDate.setHours(0, 0, 0, 0);

            // Ne pas autoriser les dates antérieures à aujourd'hui
            if (selectedDate < todayDate || selectedDate.getFullYear() > 2030) {
                return; // Ne pas mettre à jour si la date est invalide
            }
        }

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (res.ok && data.ok) {
                setSubmitStatus('success');
                setErrorMessage(null);
            } else {
                console.error('Lead submit error', data);
                setSubmitStatus('error');
                setErrorMessage(data && data.message ? String(data.message) : 'Erreur');
            }
        } catch (err) {
            console.error('Submit failed', err);
            setSubmitStatus('error');
            setErrorMessage(String(err));
        } finally {
            setIsSubmitting(false);
        }
    };

    // Date minimum = aujourd'hui
    const today = new Date().toISOString().split('T')[0];
    
    const serviceOptions = [
        { value: '', label: t('form.serviceOptions.select') },
        { value: 'travaux', label: t('form.serviceOptions.travaux') },
        { value: 'nettoyageBail', label: t('form.serviceOptions.nettoyageBail') },
        { value: 'nettoyageChantier', label: t('form.serviceOptions.nettoyageChantier') },
        { value: 'vitres', label: t('form.serviceOptions.vitres') },
        { value: 'demenagement', label: t('form.serviceOptions.demenagement') },
        { value: 'debarras', label: t('form.serviceOptions.debarras') },
        { value: 'relocation', label: t('form.serviceOptions.relocation') },
        { value: 'souslocation', label: t('form.serviceOptions.souslocation') },
        { value: 'administratif', label: t('form.serviceOptions.administratif') },
        { value: 'assurances', label: t('form.serviceOptions.assurances') },
    ];

    // initialize flatpickr on mount
    useEffect(() => {
        const el = document.getElementById('devis-date-input') as HTMLInputElement | null;
        if (!el) return;

        const fp = flatpickr(el, {
            dateFormat: 'Y-m-d',
            defaultDate: formData.date || undefined,
            minDate: today,
            maxDate: '2030-12-31',
            wrap: false,
            onChange: (selectedDates: Date[], dateStr: string) => {
                setFormData(prev => ({ ...prev, date: dateStr }));
            }
        });

        return () => {
            try { fp.destroy(); } catch (e) { /* noop */ }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (submitStatus === 'success') {
        return (
            <div className={styles.devisPage}>
                <div className={styles.successContainer}>
                    <div className={styles.successIconWrapper}>
                        <div className={styles.successIconCircle}>
                            <svg className={styles.successCheck} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div className={styles.successRipple}></div>
                    </div>
                    <h2 className={styles.successTitle}>{t('form.success')}</h2>
                    <p className={styles.successMessage}>
                        Nous avons bien reçu votre demande et vous recontacterons très rapidement.
                    </p>
                    
                </div>
            </div>
        );
    }

    return (
        <div className={styles.devisPage}>
            {/* Decorative elements */}
            <div className={styles.decorativeOrb1}></div>
            <div className={styles.decorativeOrb2}></div>
            
            <div className={styles.devisContainer}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerBadge}>
                        <span>Demande personnalisée</span>
                    </div>
                    <h1 className={styles.title}>{t('title')}</h1>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                    <div className={styles.headerDivider}>
                        <span className={styles.dividerLine}></span>
                        <span className={styles.dividerIcon}>◆</span>
                        <span className={styles.dividerLine}></span>
                    </div>
                </div>

                {/* Progress indicator */}
                <div className={styles.progressContainer}>
                    <div className={styles.progressStep}>
                        <div className={`${styles.progressDot} ${styles.active}`}>1</div>
                        <span className={styles.progressLabel}>Informations</span>
                    </div>
                    <div className={styles.progressLine}></div>
                    <div className={styles.progressStep}>
                        <div className={`${styles.progressDot} ${formData.service ? styles.active : ''}`}>2</div>
                        <span className={styles.progressLabel}>Service</span>
                    </div>
                    <div className={styles.progressLine}></div>
                    <div className={styles.progressStep}>
                        <div className={`${styles.progressDot} ${formData.description ? styles.active : ''}`}>3</div>
                        <span className={styles.progressLabel}>Détails</span>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Section: Informations personnelles */}
                    <div className={styles.formSection}>
                        <h3 className={styles.sectionTitle}>
                            Informations personnelles
                        </h3>
                        
                        <div className={styles.grid}>
                            <div className={`${styles.inputGroup} ${focusedField === 'firstName' ? styles.focused : ''}`}>
                                <label className={styles.label}>
                                    {t('form.firstName')} <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('firstName')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder="Jean"
                                    className={styles.input}
                                />
                            </div>
                            <div className={`${styles.inputGroup} ${focusedField === 'lastName' ? styles.focused : ''}`}>
                                <label className={styles.label}>
                                    {t('form.lastName')} <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('lastName')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder="Dupont"
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.grid}>
                            <div className={`${styles.inputGroup} ${focusedField === 'email' ? styles.focused : ''}`}>
                                <label className={styles.label}>
                                    {t('form.email')} <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder="jean.dupont@email.com"
                                    className={styles.input}
                                />
                            </div>
                            <div className={`${styles.inputGroup} ${focusedField === 'phone' ? styles.focused : ''}`}>
                                <label className={styles.label}>
                                    {t('form.phone')} <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('phone')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder="+41 79 123 45 67"
                                    className={styles.input}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section: Service souhaité */}
                    <div className={styles.formSection}>
                        <h3 className={styles.sectionTitle}>
                            Service souhaité
                        </h3>
                        
                        <div className={`${styles.inputGroup} ${styles.fullWidth} ${focusedField === 'service' ? styles.focused : ''}`}>
                            <label className={styles.label}>
                                {t('form.service')} <span className={styles.required}>*</span>
                            </label>
                            <div className={styles.selectWrapper}>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('service')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className={styles.select}
                                >
                                    {serviceOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <span className={styles.selectArrow}>▼</span>
                            </div>
                        </div>
                    </div>

                    {/* Section: Localisation */}
                    <div className={styles.formSection}>
                        <h3 className={styles.sectionTitle}>
                            Localisation
                        </h3>
                        
                        <div className={styles.grid}>
                            <div className={`${styles.inputGroup} ${focusedField === 'address' ? styles.focused : ''}`}>
                                <label className={styles.label}>
                                    {t('form.address')}
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('address')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Rue de Lausanne 42"
                                    className={styles.input}
                                />
                            </div>
                                <div className={`${styles.inputGroup} ${focusedField === 'city' ? styles.focused : ''}`}>
                                <label className={styles.label}>
                                    {t('form.city')}
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('city')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Genève"
                                    className={styles.input}
                                />
                            </div>
                        </div>

                                        <div className={`${styles.inputGroup} ${styles.fullWidth} ${focusedField === 'date' ? styles.focused : ''}`}>
                                            <label className={styles.label}>
                                                {t('form.date')}
                                            </label>
                                            <input
                                                type="text"
                                                name="date"
                                                ref={(el) => { if (el && !el.getAttribute('data-fp-initialized')) el.setAttribute('data-fp-initialized', 'true'); }}
                                                defaultValue={formData.date}
                                                onFocus={() => setFocusedField('date')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="YYYY-MM-DD"
                                                className={styles.input + ' fp-input'}
                                                id="devis-date-input"
                                                readOnly={false}
                                            />
                                        </div>
                    </div>

                    {/* Section: Détails du projet */}
                    <div className={styles.formSection}>
                        <h3 className={styles.sectionTitle}>
                            Détails du projet
                        </h3>
                        
                        <div className={`${styles.inputGroup} ${styles.fullWidth} ${focusedField === 'description' ? styles.focused : ''}`}>
                            <label className={styles.label}>
                                {t('form.description')} <span className={styles.required}>*</span>
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('description')}
                                onBlur={() => setFocusedField(null)}
                                required
                                rows={5}
                                placeholder="Décrivez votre projet en détail : superficie, type de bien, contraintes particulières..."
                                className={styles.textarea}
                            />
                            <span className={styles.charCount}>{formData.description.length} caractères</span>
                        </div>
                    </div>

                    {/* Privacy & Submit */}
                    <div className={styles.submitSection}>
                        <div className={styles.checkboxContainer}>
                            <input
                                type="checkbox"
                                name="privacy"
                                id="privacy"
                                checked={formData.privacy}
                                onChange={handleChange}
                                required
                                className={styles.checkbox}
                            />
                            <label htmlFor="privacy" className={styles.checkboxLabel}>
                                {t('form.privacy')} <span className={styles.required}>*</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={styles.submitButton}
                        >
                            {isSubmitting ? (
                                <span className={styles.buttonLoading}>
                                    <span className={styles.spinner}></span>
                                    Envoi en cours...
                                </span>
                            ) : (
                                <span className={styles.buttonContent}>
                                    <span>Envoyer ma demande</span>
                                    <span className={styles.buttonIcon}>→</span>
                                </span>
                            )}
                        </button>

                        <p className={styles.submitNote}>
                            Vos données sont sécurisées et ne seront jamais partagées.
                        </p>
                        {submitStatus === 'error' && (
                            <p className={styles.errorMessage} role="alert">
                                {errorMessage ? errorMessage : t('form.error')}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
