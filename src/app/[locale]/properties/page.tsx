'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import propertiesData from '@/data/properties.json';
import { PropertyCard } from '@/components/molecules/PropertyCard';
import PropertyFilters, { FilterValues } from '@/components/molecules/PropertyFilters';

export default function PropertiesPage() {
    const t = useTranslations('properties');
    const tFilters = useTranslations('filters');

    const [filters, setFilters] = useState<FilterValues>({
        transaction: 'all',
        location: '',
        budgetMin: '',
        budgetMax: '',
    });

    const parsePrice = (priceString: string): number => {
        // Remove 'CHF', '/ mois', commas, and whitespace
        const cleanString = priceString.replace(/CHF|\/ mois|,|\s/g, '');
        return parseInt(cleanString, 10) || 0;
    };

    const filteredProperties = propertiesData.filter((property) => {
        // Filter by transaction type
        if (filters.transaction !== 'all' && property.type !== filters.transaction) {
            return false;
        }

        // Filter by location
        if (
            filters.location &&
            !property.location.toLowerCase().includes(filters.location.toLowerCase())
        ) {
            return false;
        }

        const propertyPrice = parsePrice(property.price);

        // Filter by budget min
        if (filters.budgetMin) {
            const minPrice = parseInt(filters.budgetMin, 10);
            if (!isNaN(minPrice) && propertyPrice < minPrice) {
                return false;
            }
        }

        // Filter by budget max
        if (filters.budgetMax) {
            const maxPrice = parseInt(filters.budgetMax, 10);
            if (!isNaN(maxPrice) && propertyPrice > maxPrice) {
                return false;
            }
        }

        return true;
    });

    const filterTranslations = {
        transaction: tFilters('transaction'),
        sale: tFilters('sale'),
        rent: tFilters('rent'),
        all: tFilters('all'),
        location: tFilters('location'),
        locationPlaceholder: tFilters('locationPlaceholder'),
        budget: tFilters('budget'),
        budgetMin: tFilters('budgetMin'),
        budgetMax: tFilters('budgetMax'),
    };

    return (
        <div className="min-h-screen bg-[#051622] pt-16 sm:pt-20 pb-16 sm:pb-24 md:pb-32">
            {/* Header Section */}
            <section className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
                    <div className="max-w-4xl">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight leading-tight">
                            {t('title')}
                        </h1>
                    </div>

                    {/* Filters */}
                    <div className="w-full">
                        <PropertyFilters
                            translations={filterTranslations}
                            onFilterChange={setFilters}
                        />
                    </div>
                </div>
            </section>

            {/* Spacer */}
            <div className="h-8 sm:h-12 md:h-16 w-full" />

            {/* Grid Section */}
            <section className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {filteredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                    {filteredProperties.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <p className="text-white/60 text-lg">
                                {t('noResults')}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
