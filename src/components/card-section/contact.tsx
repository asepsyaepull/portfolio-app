import React from 'react';
import { Twitter, Dribbble, Instagram, Linkedin, AtSign, Mail } from 'lucide-react';

const SocialButton = ({ icon: Icon }: { icon: React.ElementType }) => (
    <button className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-slate-700 p-4 rounded-lg text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors">
        <Icon size={24} />
    </button>
);

const Contact = () => {
    return (
        <div className="mt-12 grid grid-cols-12 gap-4 ">
            <div className="col-span-12 md:col-span-8 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-slate-700 rounded-lg p-6 md:p-8 lg:p-10">
                <h2 className="text-gray-900 dark:text-white text-xl md:text-2xl mb-4">✨ Let&apos;s Stay Connected!</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Follow me on social media for design inspiration, behind-the-scenes updates, and the latest projects.
                    Let&apos;s create and grow together!
                </p>
            </div>
            <div className="col-span-12 md:col-span-4 grid grid-cols-3 gap-2">
                <SocialButton icon={Twitter} />
                <SocialButton icon={Dribbble} />
                <SocialButton icon={Instagram} />
                <SocialButton icon={Linkedin} />
                <SocialButton icon={AtSign} />
                <SocialButton icon={Mail} />
            </div>
        </div>
    );
};

export default Contact;