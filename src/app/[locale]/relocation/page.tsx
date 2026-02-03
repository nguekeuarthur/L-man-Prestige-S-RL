"use client";

import React, { useState, useEffect } from 'react';
import styles from '../devis/DevisPage.module.css';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export default function RelocationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    minRooms: '',
    maxBudget: '',
    city: '',
    moveDate: '',
    description: '',
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSearchProperties = async () => {
    const params = new URLSearchParams();
    if (formData.city) params.set('city', formData.city);
    if (formData.maxBudget) params.set('budget', formData.maxBudget);
    if (formData.minRooms) params.set('rooms', formData.minRooms);
    
    try {
      const res = await fetch('/api/properties?' + params.toString());
      const data = await res.json();
      setSearchResults(data || []);
    } catch (err) {
      console.error('Search error', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/relocation-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setSubmitStatus('success');
        setErrorMessage(null);
      } else {
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

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const el = document.getElementById('relocation-date-input') as HTMLInputElement | null;
    if (!el) return;

    const fp = flatpickr(el, {
      dateFormat: 'Y-m-d',
      defaultDate: formData.moveDate || undefined,
      minDate: today,
      maxDate: '2030-12-31',
      wrap: false,
      onChange: (selectedDates: Date[], dateStr: string) => {
        setFormData(prev => ({ ...prev, moveDate: dateStr }));
      }
    });

    return () => {
      try { fp.destroy(); } catch (e) { /* noop */ }
    };
  }, [today]);

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
          <h2 className={styles.successTitle}>Demande reçue !</h2>
          <p className={styles.successMessage}>
            Nous avons bien reçu votre demande et vous recontacterons très rapidement.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.devisPage}>
      <div className={styles.decorativeOrb1}></div>
      <div className={styles.decorativeOrb2}></div>
      
      <div className={styles.devisContainer}>
        <div className={styles.header}>
          <div className={styles.headerBadge}>
            <span>Recherche d'appartement</span>
          </div>
          <h1 className={styles.title}>Chercher un appartement</h1>
          <p className={styles.subtitle}>Remplissez le formulaire ci-dessous et nous vous aiderons à trouver votre logement idéal.</p>
          <div className={styles.headerDivider}>
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerIcon}>◆</span>
            <span className={styles.dividerLine}></span>
          </div>
        </div>

        <div className={styles.progressContainer}>
          <div className={styles.progressStep}>
            <div className={`${styles.progressDot} ${styles.active}`}>1</div>
            <span className={styles.progressLabel}>Profil</span>
          </div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressStep}>
            <div className={`${styles.progressDot} ${formData.city ? styles.active : ''}`}>2</div>
            <span className={styles.progressLabel}>Critères</span>
          </div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressStep}>
            <div className={`${styles.progressDot} ${formData.description ? styles.active : ''}`}>3</div>
            <span className={styles.progressLabel}>Détails</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Informations personnelles</h3>
            
            <div className={styles.grid}>
              <div className={`${styles.inputGroup} ${focusedField === 'firstName' ? styles.focused : ''}`}>
                <label className={styles.label}>Prénom <span className={styles.required}>*</span></label>
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
                <label className={styles.label}>Nom <span className={styles.required}>*</span></label>
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
                <label className={styles.label}>Email <span className={styles.required}>*</span></label>
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
                <label className={styles.label}>Téléphone <span className={styles.required}>*</span></label>
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

          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Critères de recherche</h3>
            
            <div className={styles.grid}>
              <div className={`${styles.inputGroup} ${focusedField === 'city' ? styles.focused : ''}`}>
                <label className={styles.label}>Ville <span className={styles.required}>*</span></label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('city')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="Genève"
                  className={styles.input}
                />
              </div>
              <div className={`${styles.inputGroup} ${focusedField === 'minRooms' ? styles.focused : ''}`}>
                <label className={styles.label}>Nombre de pièces min</label>
                <input
                  type="number"
                  name="minRooms"
                  value={formData.minRooms}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('minRooms')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="3"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={`${styles.inputGroup} ${styles.fullWidth} ${focusedField === 'maxBudget' ? styles.focused : ''}`}>
              <label className={styles.label}>Budget maximum (CHF / mois)</label>
              <input
                type="number"
                name="maxBudget"
                value={formData.maxBudget}
                onChange={handleChange}
                onFocus={() => setFocusedField('maxBudget')}
                onBlur={() => setFocusedField(null)}
                placeholder="5000"
                className={styles.input}
              />
            </div>

            <button
              type="button"
              onClick={handleSearchProperties}
              className={styles.submitButton}
              style={{marginTop: '1rem'}}
            >
              <span className={styles.buttonContent}>
                <span>Rechercher des appartements</span>
                <span className={styles.buttonIcon}>🔍</span>
              </span>
            </button>

            {searchResults.length > 0 && (
              <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(5, 22, 34, 0.3)', borderRadius: '8px'}}>
                <strong style={{color: '#fff'}}>Résultats trouvés : {searchResults.length}</strong>
                <ul style={{marginTop: '0.5rem', color: 'rgba(255, 255, 255, 0.8)'}}>
                  {searchResults.map(r => (
                    <li key={r.id} style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>
                      <strong>{r.title}</strong> — {r.location} — {r.price}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Date et détails</h3>
            
            <div className={`${styles.inputGroup} ${styles.fullWidth} ${focusedField === 'moveDate' ? styles.focused : ''}`}>
              <label className={styles.label}>Date de déménagement souhaitée</label>
              <input
                type="text"
                name="moveDate"
                id="relocation-date-input"
                placeholder="YYYY-MM-DD"
                onFocus={() => setFocusedField('moveDate')}
                onBlur={() => setFocusedField(null)}
                className={`${styles.input} fp-input`}
                readOnly
              />
            </div>

            <div className={`${styles.inputGroup} ${styles.fullWidth} ${focusedField === 'description' ? styles.focused : ''}`}>
              <label className={styles.label}>Détails supplémentaires</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                onFocus={() => setFocusedField('description')}
                onBlur={() => setFocusedField(null)}
                rows={5}
                placeholder="Décrivez votre situation, vos préférences, contraintes particulières..."
                className={styles.textarea}
              />
              <span className={styles.charCount}>{formData.description.length} caractères</span>
            </div>
          </div>

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
                J'accepte la politique de confidentialité et le traitement de mes données personnelles. <span className={styles.required}>*</span>
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
                {errorMessage ? errorMessage : 'Erreur lors de l\'envoi'}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
