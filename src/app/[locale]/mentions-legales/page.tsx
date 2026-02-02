'use client';

import React from 'react';

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#051622] pt-20 sm:pt-28 md:pt-40 pb-12 sm:pb-16 md:pb-20 flex justify-center">
      <div className="w-full max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Mentions légales
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
          {/* Section 1 */}
          <div className="bg-white/5 rounded-[8px] p-4 sm:p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all w-full">
            <h2 className="text-base sm:text-lg md:text-xl font-bold !text-white mb-4 sm:mb-6 text-center">
              Éditeur du site
            </h2>
            <div className="text-white/80 text-sm sm:text-base leading-relaxed space-y-2 sm:space-y-3 text-center w-full">
              <p className="font-medium text-white text-base sm:text-lg">Léman Prestige Sàrl</p>
              <p>Entreprise de services basée à Genève, Suisse</p>
              <p>
                <span className="font-semibold text-white">Email :</span>
                <a href="mailto:contact@lemanprestige.ch" className="!text-white hover:!text-[#C5A059] hover:underline transition-colors duration-300 ml-2">
                  contact@lemanprestige.ch
                </a>
              </p>
              <p><span className="font-semibold text-white">Téléphone :</span> +41 XX XXX XX XX</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/5 rounded-[8px] p-4 sm:p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all w-full">
            <h2 className="text-base sm:text-lg md:text-xl font-bold !text-white mb-4 sm:mb-6 text-center">
              Activité
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed text-center">
              Nous proposons des services d'accompagnement administratif, de mise en relation et de support pour particuliers et entreprises. Certaines prestations sont réalisées par des partenaires agréés.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white/5 rounded-[8px] p-4 sm:p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all w-full">
            <h2 className="text-base sm:text-lg md:text-xl font-bold !text-white mb-4 sm:mb-6 text-center">
              Hébergement & Infrastructure
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed text-center">
              Le site est hébergé par Vercel Inc., prestataire de services d'hébergement certifié.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white/5 rounded-[8px] p-4 sm:p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all w-full">
            <h2 className="text-base sm:text-lg md:text-xl font-bold !text-white mb-4 sm:mb-6 text-center">
              Propriété intellectuelle
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed text-center">
              L'ensemble des contenus du site (textes, images, logos, vidéos) sont la propriété de Léman Prestige Sàrl ou de tiers ayant accordé une licence. Toute reproduction, représentation ou diffusion sans autorisation préalable écrite est interdite.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white/5 rounded-[8px] p-4 sm:p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all w-full">
            <h2 className="text-base sm:text-lg md:text-xl font-bold !text-white mb-4 sm:mb-6 text-center">
              Responsabilité
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed text-center">
              Nous nous efforçons d'assurer l'exactitude des informations. Toutefois, nous ne saurions être tenus responsables d'omissions, inexactitudes ou dommages résultant de l'utilisation des données fournies.
            </p>
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-br from-[#C5A059]/20 to-[#e8c16f]/20 rounded-[8px] p-4 sm:p-6 md:p-8 border border-[#C5A059]/30 w-full">
            <h2 className="text-base sm:text-lg md:text-xl font-bold !text-white mb-4 sm:mb-6 text-center flex items-center justify-center gap-2 sm:gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Points importants
            </h2>
            <div className="space-y-3 sm:space-y-4 w-full">
              <div className="bg-white/10 rounded-[6px] p-3 sm:p-4 md:p-5 text-center w-full">
                <p className="font-semibold text-white text-sm sm:text-base mb-1 sm:mb-2">Assurances</p>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">Mise en relation uniquement. Aucune activité de courtage réglementé.</p>
              </div>
              <div className="bg-white/10 rounded-[6px] p-3 sm:p-4 md:p-5 text-center w-full">
                <p className="font-semibold text-white text-sm sm:text-base mb-1 sm:mb-2">Immobilier</p>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">Assistance administrative. Nous n'agissons pas en tant que régie immobilière.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center w-full">
          <p className="text-xs sm:text-sm text-white/70">
            Dernière mise à jour : <span className="font-semibold text-[#C5A059]">Janvier 2026</span>
          </p>
        </div>
      </div>
    </div>
  );
}
