import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card'; // Import the Card component
import Image from 'next/image'; // Import the Image component

const PortfolioCard = ({ image, title, description }: {
    image: string;
    title: string;
    description: string;
}) => (
    <Card className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-slate-700 rounded-2xl p-6 flex items-center gap-6 group hover:bg-gray-100 dark:hover:bg-slate-800 transition-all shadow-lg">
        <Image src={image} alt={title} width={96} height={96} className="rounded-xl object-cover" />
        <div className="flex-1 pr-6">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
            <p className="text-gray-400 text-base line-clamp-2">{description}</p>
        </div>
        <button className="text-white p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
            <ArrowUpRight size={24} />
        </button>
    </Card>
);

const PortfolioHeader = () => (
    <Card className="bg-white border dark:bg-zinc-900  border-gray-300 dark:border-slate-700 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📁</span>
            <h2 className="text-white text-2xl font-bold">My Creative Showcase</h2>
        </div>
        <p className="text-gray-400 text-lg">
            Discover my portfolio of projects, where creativity meets functionality. Each work reflects my passion for crafting thoughtful designs and innovative digital experiences.
        </p>
    </Card>
);

const Portfolio = () => {
    const portfolioItems = [
        {
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=200&h=200",
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores with real-time analytics and inventory management."
        },
        {
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=200&h=200",
            title: "Health & Wellness App",
            description: "Mobile application for tracking health metrics, workouts, and nutrition with personalized recommendations."
        },
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200&h=200",
            title: "Financial Analytics Platform",
            description: "Enterprise solution for financial data visualization and analysis with AI-powered insights."
        },
        {
            image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=200&h=200",
            title: "Creative Agency Website",
            description: "Modern and interactive website showcasing creative work and services with dynamic animations."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PortfolioHeader />
            <div className="space-y-4">
                {portfolioItems.map((item, index) => (
                    <PortfolioCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;