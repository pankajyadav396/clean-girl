import React from 'react';

interface PrimaryButtonProps {
    className?: string;
    text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ className = '', text }) => {
    return (
        <button
            className={`${className} bg-pink duration-300 btn-hover text-base px-5 py-4 text-white font-lexend !leading-125 font-bold border-none rounded-5xl`}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;
