import React from 'react';
import { Palette, Code, Rocket } from 'lucide-react';
import { HoverEffect } from '../ui/card-hover-effect';

export function Services() {
    return (
        <HoverEffect items={services} />
    );
}
export const services = [
    {
        icon: Palette,
        title: "UI/UX Design 🎨",
        description: "Crafting user-friendly and visually engaging interfaces that deliver exceptional experiences.",
        link: "#",
    },
    {
        icon: Code,
        title: "Web Development 💻",
        description:
            "Building responsive, high-performing websites with modern tools and technologies.",
        link: "#",
    },
    {
        icon: Rocket,
        title: "Prototyping ✨",
        description:
            "Turning ideas into interactive prototypes to visualize functionality and user flow effectively.",
        link: "#",
    }
];