import * as React from "react";
type ButtonProps = { title: string, color: string, type?: 'primary' | 'white' };

export const Button = ({ title, color = 'text-gray-500', type}: ButtonProps) => (
    <a className={`inline-block py-1 md:py-4 ${color}`}>{title}</a>
);