'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled,
    leftIcon,
    rightIcon,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-body font-bold transition-all duration-700 disabled:opacity-30 disabled:cursor-not-allowed selection:bg-transparent';

    const variants = {
        primary: 'bg-[#051622] text-white hover:bg-[#071F2E] border border-white/10 hover:border-[#C5A059]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]',
        secondary: 'bg-transparent text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#C5A059] hover:text-[#051622] hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]',
        ghost: 'bg-transparent text-white/60 hover:text-white hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-4 sm:px-6 py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]',
        md: 'px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em]',
        lg: 'px-8 sm:px-10 md:px-14 py-4 sm:py-5 text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.3em] sm:tracking-[0.4em]',
    };

    const spinner = (
        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    );

    return (
        <button
            disabled={disabled || isLoading}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {isLoading && spinner}
            {!isLoading && leftIcon && <span className="mr-3">{leftIcon}</span>}
            <span className="relative z-10">{children}</span>
            {!isLoading && rightIcon && <span className="ml-3">{rightIcon}</span>}
        </button>
    );
};

export default Button;
