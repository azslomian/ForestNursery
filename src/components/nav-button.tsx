import * as React from "react";
type NavButtonProps = { title: string, href: string, color: string, bald: boolean, hoverColor: string, marginRight: number };

export const NavButton = ({ title, href = '#', color = 'text-gray-500', bald = true, hoverColor = 'text-gray-100', marginRight = 0 }: NavButtonProps) => (
    <a
        href={href}
        className={`inline-block py-1 md:py-4 
                ${color} 
                hover:${hoverColor}
                mr-${marginRight} 
                ${bald === true ? 'font-bold' : ''}`}
    >{title}</a
    >
);