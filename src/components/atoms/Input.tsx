'use client';

import React, { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    error,
    helperText,
    id,
    className = '',
    ...props
}) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <div className="flex flex-col gap-1.5 sm:gap-2 w-full group">
            {label && (
                <label
                    htmlFor={inputId}
                    className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black text-white group-focus-within:text-[#C5A059] transition-colors duration-500 min-h-[24px] sm:min-h-[32px] flex items-end"
                >
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={inputId}
                    className={`
            w-full px-0 py-2.5 sm:py-3 bg-transparent border-b text-white text-sm sm:text-base placeholder:text-white/50
            transition-all duration-700 focus:outline-none
            [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_30px_#051622_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#fff]
            ${error
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-white/10 focus:border-[#C5A059]'
                        }
            ${className}
          `}
                    {...props}
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-700 group-focus-within:w-full" />
            </div>
            {error && (
                <p className="text-[10px] uppercase tracking-widest text-red-500 mt-2 animate-in fade-in slide-in-from-top-1">
                    {error}
                </p>
            )}
            {!error && helperText && (
                <p className="text-[10px] uppercase tracking-widest text-white/20 mt-2">
                    {helperText}
                </p>
            )}
        </div>
    );
};

export default Input;
