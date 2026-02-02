'use client';

import React, { useState } from 'react';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';

export default function DesignSystemPage() {
    const [isLoading, setIsLoading] = useState(false);

    const toggleLoading = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <main className="min-h-screen bg-[#051622] text-[#F5F2EA] selection:bg-[#C5A059] selection:text-[#051622] font-body">
            {/* Editorial Background Lines */}
            <div className="fixed inset-0 pointer-events-none opacity-5">
                <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white" />
                <div className="absolute left-[30%] top-0 bottom-0 w-px bg-white" />
                <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white" />
                <div className="absolute left-[70%] top-0 bottom-0 w-px bg-white" />
                <div className="absolute left-[90%] top-0 bottom-0 w-px bg-white" />
            </div>

            <div className="relative pt-60 pb-40 px-12 max-w-[1800px] mx-auto">
                {/* Section: Introduction */}
                <header className="max-w-4xl mb-60">
                    <div className="flex items-center gap-6 mb-12 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="h-px w-20 bg-[#C5A059]" />
                        <span className="text-[10px] uppercase tracking-[0.8em] font-black text-[#C5A059]">La Signature de l'Excellence</span>
                    </div>
                    <h1 className="text-[8vw] font-heading leading-[0.85] tracking-[-0.04em] mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                        L'Immobilier <br />
                        <span className="italic font-light text-[#C5A059]">Redéfini.</span>
                    </h1>
                    <p className="text-xl text-white/30 leading-relaxed font-light max-w-2xl animate-in fade-in duration-1000 delay-500">
                        Une architecture digitale pensée pour capturer l'essence du luxe lémanique. Minimalisme, précision et prestige se rencontrent dans chaque pixel.
                    </p>
                </header>

                {/* Section: Component Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-40">

                    {/* Left Column: Atoms */}
                    <div className="lg:col-span-4 space-y-40">
                        <section className="space-y-16">
                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-black italic">01. Interaction Elements</h2>
                            <div className="space-y-12">
                                <div className="p-16 border border-white/5 bg-white/[0.01] hover:border-[#C5A059]/20 transition-all duration-700">
                                    <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-10">Primary Action</p>
                                    <Button variant="primary" className="w-full">Découvrir la Sélection</Button>
                                </div>
                                <div className="p-16 border border-[#C5A059]/10 bg-gradient-to-br from-[#C5A059]/5 to-transparent">
                                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] mb-10">Prestige Button</p>
                                    <Button variant="secondary" className="w-full">Contacter un Expert</Button>
                                </div>
                                <div className="p-10 text-center">
                                    <Button variant="ghost" className="text-xs">Mentions Légales</Button>
                                </div>
                            </div>
                        </section>

                        <section className="pt-20">
                            <div className="p-16 border-l border-[#C5A059]/30 italic font-heading text-3xl text-white/80 leading-snug">
                                "Le luxe n'est pas le contraire de la pauvreté, mais celui de la vulgarité."
                            </div>
                            <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-white/20">— Gabrielle Chanel</p>
                        </section>
                    </div>

                    {/* Right Column: Experience */}
                    <div className="lg:col-span-8 space-y-40 text-[#F5F2EA]">
                        <section className="p-24 bg-[#071F2E]/40 border border-white/5 backdrop-blur-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent" />

                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-black italic mb-20">02. Information Flow</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 text-[#F5F2EA]">
                                <Input
                                    label="Propriétaire"
                                    placeholder="Votre nom complet"
                                    className="!text-[#F5F2EA]"
                                />
                                <Input
                                    label="Email"
                                    type="email"
                                    placeholder="prestige@leman.ch"
                                    className="!text-[#F5F2EA]"
                                />
                            </div>

                            <div className="max-w-xl space-y-12">
                                <h3 className="text-6xl font-heading italic leading-none">La Clarté Absolue.</h3>
                                <p className="text-white/40 leading-relaxed font-light">
                                    L'interface s'efface devant le contenu. Nos formulaires utilisent une typographie espacée et des lignes fines pour garantir une lisibilité optimale sans compromettre l'esthétique.
                                </p>
                            </div>
                        </section>

                        {/* Functional States Showcase */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="p-12 border border-white/5 bg-white/[0.01] hover:border-[#C5A059]/20 transition-all duration-700">
                                <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-8 italic">Loading State</p>
                                <Button isLoading={isLoading} onClick={toggleLoading} variant="primary" size="sm" className="w-full">
                                    {isLoading ? '' : 'Démonstration'}
                                </Button>
                            </div>
                            <div className="p-12 border border-white/5 bg-white/[0.01]">
                                <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-8 italic">Disabled State</p>
                                <Button disabled variant="primary" size="sm" className="w-full">Inactif</Button>
                            </div>
                            <div className="p-12 border border-red-500/10 bg-red-500/[0.01]">
                                <p className="text-[9px] uppercase tracking-[0.4em] text-red-500/40 mb-8 italic">Error Handling</p>
                                <Input
                                    error="Format d'email invalide"
                                    defaultValue="invalid-email"
                                    className="!text-[#F5F2EA]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Banner */}
                <section className="mt-60 pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-20">
                    <div className="max-w-sm">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-black mb-8">Typographie & Rythme</h4>
                        <div className="space-y-8">
                            <div className="flex items-baseline gap-6">
                                <span className="text-4xl font-heading italic">Playfair</span>
                                <span className="text-white/20 text-xs">Serif — Titres d'exception</span>
                            </div>
                            <div className="flex items-baseline gap-6">
                                <span className="text-3xl font-body font-light tracking-widest text-[#F5F2EA]">LATO LIGHT</span>
                                <span className="text-white/20 text-xs">Sans — Corps de texte</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-right flex flex-col items-end">
                        <div className="mb-4">
                            <span className="text-white font-heading text-xl tracking-[0.2em] uppercase">Léman Property</span>
                        </div>
                        <p className="text-[9px] uppercase tracking-[0.4em] text-white/20">Design System V3 — Final Prestige Release</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
