'use client';

import React from 'react';

export default function ConfidentialitePage() {
    return (
        <div className="min-h-screen bg-[#051622] pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32">
            <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-12">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 sm:mb-8 md:mb-12">
                    Politique de confidentialité
                </h1>

                <div className="flex flex-col gap-6 sm:gap-8 text-white/80 text-sm sm:text-base leading-relaxed">
                    <section>
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Introduction</h2>
                        <p>
                            Léman Prestige Sàrl s&apos;engage à protéger la vie privée des utilisateurs de son site web. 
                            Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
                            vos données personnelles conformément à la Loi fédérale sur la protection des données (LPD).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Données collectées</h2>
                        <p>Nous pouvons collecter les données suivantes :</p>
                        <ul className="list-disc list-inside mt-3 sm:mt-4 flex flex-col gap-2">
                            <li>Nom et prénom</li>
                            <li>Adresse email</li>
                            <li>Numéro de téléphone</li>
                            <li>Adresse postale</li>
                            <li>Documents transmis via nos formulaires (pièce d&apos;identité, fiches de salaire, etc.)</li>
                            <li>Données de navigation (cookies, adresse IP)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Utilisation des données</h2>
                        <p>Vos données sont utilisées pour :</p>
                        <ul className="list-disc list-inside mt-3 sm:mt-4 flex flex-col gap-2">
                            <li>Traiter vos demandes de devis et de services</li>
                            <li>Vous recontacter dans le cadre de votre demande</li>
                            <li>Améliorer nos services</li>
                            <li>Respecter nos obligations légales</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Conservation des données</h2>
                        <p>
                            Vos données personnelles sont conservées pendant la durée nécessaire au traitement de votre 
                            demande et conformément aux obligations légales en vigueur. Les documents sensibles 
                            (pièces d&apos;identité, fiches de salaire) sont supprimés après traitement de votre dossier, 
                            sauf accord contraire de votre part.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Sécurité</h2>
                        <p>
                            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                            vos données contre tout accès non autorisé, modification, divulgation ou destruction. 
                            Les transmissions sont sécurisées par protocole SSL (HTTPS).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Vos droits</h2>
                        <p>Conformément à la LPD, vous disposez des droits suivants :</p>
                        <ul className="list-disc list-inside mt-3 sm:mt-4 flex flex-col gap-2">
                            <li>Droit d&apos;accès à vos données personnelles</li>
                            <li>Droit de rectification de données inexactes</li>
                            <li>Droit à l&apos;effacement de vos données</li>
                            <li>Droit d&apos;opposition au traitement</li>
                            <li>Droit à la portabilité de vos données</li>
                        </ul>
                        <p className="mt-3 sm:mt-4">
                            Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@lemanprestige.ch" className="text-[#C5A059] hover:underline">contact@lemanprestige.ch</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Cookies</h2>
                        <p>
                            Notre site utilise des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic. 
                            Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités 
                            du site pourraient ne plus fonctionner correctement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Contact</h2>
                        <p>
                            Pour toute question concernant cette politique de confidentialité :<br /><br />
                            <strong>Léman Prestige Sàrl</strong><br />
                            Email : <a href="mailto:contact@lemanprestige.ch" className="text-[#C5A059] hover:underline">contact@lemanprestige.ch</a><br />
                            Genève, Suisse
                        </p>
                    </section>

                    <p className="text-white/50 text-xs sm:text-sm mt-6 sm:mt-8">
                        Dernière mise à jour : Janvier 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
