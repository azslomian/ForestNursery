import * as React from "react";
type ButtonProps = { title: string, color: string, type?: 'primary' | 'white' | 'red'};

export const Button = ({ title, color = 'text-gray-500', type}: ButtonProps) => (
    <a className={`inline-block py-2 px-4 ${color} 
    ${type === 'primary' ? 'bg-white hover:bg-gray-100 rounded-lg' : ''}
    ${type === 'white' ? 'bg-white hover:bg-gray-100 rounded-lg' : ''} 
    ${type === 'red' ? 'bg-white hover:bg-gray-100 rounded-lg' : ''} `}>{title}</a>
);