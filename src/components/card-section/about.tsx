import React from 'react';
import { Card } from '@/components/ui/card'; // Import the Card component
import Image from 'next/image';

const About = () => {
    return (
        <div className="grid grid-cols-12 gap-6 mt-6">
            <div className="col-span-4 bg-zinc-900 border border-slate-700 rounded-lg">
                <Image
                    src="/Images/profile.jpeg"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="w-90 h-80 object-cover rounded-lg"
                />
            </div>
            <Card className="bg-zinc-900 border border-slate-700 col-span-8 rounded-lg p-6">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full mb-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-white">Available for Freelance</span>
                </div>
                <h2 className="text-2xl text-white font-medium mb-2">Hi, I&apos;m Asep Syaepul —<br />Crafting Creative Code!</h2>
                <p className="text-gray-400">
                    As a creative developer, I blend code and design to build unique, user-centric experiences. Lets turn your ideas into a dynamic and engaging digital reality!
                </p>
            </Card>
        </div>
    );
};

export default About;