'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function RechercheAppartementPage() {
    const t = useTranslations('relocationForm');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        nationality: '',
        apartmentType: '',
        zones: '',
        budget: '',
        moveInDate: '',
        furnished: '',
        balcony: false,
        parking: false,
        pets: false,
        occupants: '',
        comments: '',
        privacy: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitStatus('success');
        setIsSubmitting(false);
    };

    const typeOptions = [
        { value: '', label: 'Sélectionnez...' },
        { value: 'studio', label: t('form.typeOptions.studio') },
        { value: '2p', label: t('form.typeOptions.2p') },
        { value: '3p', label: t('form.typeOptions.3p') },
        { value: '4p', label: t('form.typeOptions.4p') },
        { value: '5p', label: t('form.typeOptions.5p') },
    ];

    const furnishedOptions = [
        { value: '', label: 'Sélectionnez...' },
        { value: 'yes', label: t('form.furnishedOptions.yes') },
        { value: 'no', label: t('form.furnishedOptions.no') },
        { value: 'indifferent', label: t('form.furnishedOptions.indifferent') },
    ];

    if (submitStatus === 'success') {
        return (
            <div className="min-h-screen bg-[#051622] pt-32 pb-32">
                <div className="max-w-[800px] mx-auto px-4 md:px-12">
                    <div className="text-center p-12 border border-[#C5A059]/30 rounded-sm bg-[#C5A059]/5">
                        <span className="text-6xl mb-6 block">✅</span>
                        <h2 className="text-white text-2xl font-bold mb-4">{t('form.success')}</h2>
                        <p className="text-white/70">
                            Nous avons bien reçu votre demande de recherche d&apos;appartement et vous recontacterons sous 24h ouvrables.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#051622] pt-32 pb-32">
            <div className="max-w-[900px] mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-12">
                    <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
                        {t('title')}
                    </h1>
                    <p className="text-white/70 text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                    {/* Section: Coordonnées */}
                    <section className="border border-white/10 rounded-sm p-6 md:p-8">
                        <h2 className="text-[#C5A059] text-lg font-bold uppercase tracking-widest mb-6">
                            {t('sections.contact')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.firstName')} *
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.lastName')} *
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.email')} *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.phone')} *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.nationality')}
                                </label>
                                <input
                                    type="text"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    placeholder="Ex: Suisse / Permis B"
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors placeholder:text-white/30"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section: Critères de recherche */}
                    <section className="border border-white/10 rounded-sm p-6 md:p-8">
                        <h2 className="text-[#C5A059] text-lg font-bold uppercase tracking-widest mb-6">
                            {t('sections.criteria')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.apartmentType')} *
                                </label>
                                <select
                                    name="apartmentType"
                                    value={formData.apartmentType}
                                    onChange={handleChange}
                                    required
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                                >
                                    {typeOptions.map(option => (
                                        <option key={option.value} value={option.value} className="bg-[#051622]">
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.zones')} *
                                </label>
                                <input
                                    type="text"
                                    name="zones"
                                    value={formData.zones}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ex: Genève centre, Carouge, Eaux-Vives"
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors placeholder:text-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.budget')} *
                                </label>
                                <input
                                    type="text"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ex: CHF 2'500"
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors placeholder:text-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.moveInDate')} *
                                </label>
                                <input
                                    type="date"
                                    name="moveInDate"
                                    value={formData.moveInDate}
                                    onChange={handleChange}
                                    required
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.furnished')}
                                </label>
                                <select
                                    name="furnished"
                                    value={formData.furnished}
                                    onChange={handleChange}
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                                >
                                    {furnishedOptions.map(option => (
                                        <option key={option.value} value={option.value} className="bg-[#051622]">
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.occupants')} *
                                </label>
                                <input
                                    type="number"
                                    name="occupants"
                                    value={formData.occupants}
                                    onChange={handleChange}
                                    required
                                    min="1"
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                                />
                            </div>

                            {/* Options */}
                            <div className="md:col-span-2">
                                <label className="text-white text-sm uppercase tracking-widest block mb-4">
                                    {t('form.options')}
                                </label>
                                <div className="flex flex-wrap gap-6">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="balcony"
                                            checked={formData.balcony}
                                            onChange={handleChange}
                                            className="w-5 h-5 accent-[#C5A059]"
                                        />
                                        <span className="text-white/70">{t('form.balcony')}</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="parking"
                                            checked={formData.parking}
                                            onChange={handleChange}
                                            className="w-5 h-5 accent-[#C5A059]"
                                        />
                                        <span className="text-white/70">{t('form.parking')}</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="pets"
                                            checked={formData.pets}
                                            onChange={handleChange}
                                            className="w-5 h-5 accent-[#C5A059]"
                                        />
                                        <span className="text-white/70">{t('form.pets')}</span>
                                    </label>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.comments')}
                                </label>
                                <textarea
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Informations supplémentaires, contraintes particulières..."
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors resize-none placeholder:text-white/30"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section: Documents */}
                    <section className="border border-white/10 rounded-sm p-6 md:p-8">
                        <h2 className="text-[#C5A059] text-lg font-bold uppercase tracking-widest mb-6">
                            {t('sections.documents')}
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.documents.id')}
                                </label>
                                <input
                                    type="file"
                                    name="idDocument"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    required
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-[#C5A059] file:text-white file:cursor-pointer"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.documents.poursuites')}
                                </label>
                                <input
                                    type="file"
                                    name="poursuites"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    required
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-[#C5A059] file:text-white file:cursor-pointer"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.documents.salaires')}
                                </label>
                                <input
                                    type="file"
                                    name="salaires"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    multiple
                                    required
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-[#C5A059] file:text-white file:cursor-pointer"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm uppercase tracking-widest">
                                    {t('form.documents.optional')}
                                </label>
                                <input
                                    type="file"
                                    name="optionalDocs"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    multiple
                                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-[#C5A059] file:text-white file:cursor-pointer"
                                />
                            </div>
                            <p className="text-white/50 text-xs">{t('form.documentsHelp')}</p>
                        </div>
                    </section>

                    {/* Privacy & Submit */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="privacy"
                                checked={formData.privacy}
                                onChange={handleChange}
                                required
                                className="mt-1 w-5 h-5 accent-[#C5A059]"
                            />
                            <label className="text-white/70 text-sm">
                                {t('form.privacy')} *
                            </label>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="
                                    group relative px-12 py-4 rounded-lg
                                    bg-gradient-to-r from-[#C5A059] to-[#d4b068]
                                    border border-[#C5A059]/20
                                    text-white text-sm font-bold uppercase tracking-[0.15em]
                                    shadow-[0_8px_24px_rgba(197,160,89,0.25)]
                                    hover:shadow-[0_12px_32px_rgba(197,160,89,0.4)]
                                    hover:scale-[1.02] hover:border-[#C5A059]/40
                                    transition-all duration-300 ease-out
                                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                                    w-full md:w-auto
                                "
                            >
                                {/* Shine effect overlay */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />

                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Envoi en cours...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>{t('form.submit')}</span>
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="p-4 border border-[#C5A059]/30 rounded-sm bg-[#C5A059]/5">
                        <p className="text-white/70 text-xs leading-relaxed">
                            ⚠️ Services de mise en relation et d&apos;assistance administrative. Léman Prestige Sàrl n&apos;agit pas en qualité de régie et ne signe pas les contrats de bail/sous-location à la place des parties.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
