import { ReactNode } from 'react';
import Header from '@/components/organisms/Header';
import StickyCTA from '@/components/organisms/StickyCTA';
import Footer from '@/app/components/sections/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      <Header key={locale} locale={locale} />
      <main className="pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-0">{children}</main>
      <Footer />
      <StickyCTA />
    </NextIntlClientProvider>
  );
}
