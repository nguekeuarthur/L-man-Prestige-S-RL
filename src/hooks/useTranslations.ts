'use client';

import { useParams } from 'next/navigation';
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';
import frMessages from '@/messages/fr.json';

const locales = ['fr', 'en', 'es'] as const;
type Locale = (typeof locales)[number];

const messagesByLocale: Record<Locale, unknown> = {
    fr: frMessages,
    en: enMessages,
    es: esMessages,
};

function getMessageValue(messages: unknown, key: string): unknown {
    if (!messages || typeof messages !== 'object') return undefined;

    return key.split('.').reduce<unknown>((acc, part) => {
        if (!acc || typeof acc !== 'object') return undefined;
        const record = acc as Record<string, unknown>;
        return record[part];
    }, messages);
}

export function useTranslations() {
    const params = useParams();
    const localeCandidate = (params?.locale as string) || 'fr';
    const locale: Locale = locales.includes(localeCandidate as Locale)
        ? (localeCandidate as Locale)
        : 'fr';

    const messages = messagesByLocale[locale];

    return (key: string) => {
        const value = getMessageValue(messages, key);
        return typeof value === 'string' ? value : key;
    };
}
