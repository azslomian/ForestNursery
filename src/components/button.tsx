import * as React from "react";
type ButtonProps = { title: string, color: string, type?: 'primary' | 'white' | 'red'};

export const Button = ({ title, color = 'text-gray-500', type}: ButtonProps) => (
    <a 
        href='#'
        className={`inline-block py-2 px-4 
        ${color}
        ${type === 'primary' ? 'bg-white hover:bg-gray-100 rounded-lg' : ''}
        ${type === 'white' ? 'bg-white hover:bg-gray-100 rounded-lg' : ''} 
        ${type === 'red' ? 'mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow' : ''} `}>{title}
    </a>
);