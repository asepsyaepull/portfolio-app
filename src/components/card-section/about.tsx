import React from 'react';
import { Card } from '@/components/ui/card'; // Import the Card component
import Image from 'next/image';

const About = () => {
    return (
        <div className="grid grid-cols-12 gap-6 mt-6 md:gap-4">
            <div className="col-span-12 md:col-span-4 dark:bg-zinc-900 bg-white border dark:border-slate-700 border-gray-300 rounded-lg">
                <Image
                    src="/Images/profile.jpeg"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="w-full h-80 object-cover rounded-lg md:h-96 lg:h-112"
                />
            </div>
            <Card className="dark:bg-zinc-900 bg-white border dark:border-slate-700 border-gray-300 col-span-12 md:col-span-8 rounded-lg p-6 md:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-black/10 px-3 py-1 rounded-full mb-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-black dark:text-white">Available for Freelance</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-black dark:text-white font-medium mb-2">Hi, I&apos;m Asep Syaepul —<br />Crafting Creative Code!</h2>
                <p className="text-gray-700 dark:text-gray-400">
                    As a creative developer, I blend code and design to build unique, user-centric experiences. Let&apos;s turn your ideas into a dynamic and engaging digital reality!
                </p>
            </Card>
        </div>
    );
};

export default About;