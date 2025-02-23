import React from 'react';
import { Twitter, Dribbble, Instagram, Linkedin, AtSign, Mail } from 'lucide-react';

const SocialButton = ({ icon: Icon }: { icon: React.ElementType }) => (
    <button className="bg-zinc-900 border border-slate-700 p-4 rounded-lg text-white hover:bg-[#2C2C2E] transition-colors">
        <Icon size={24} />
    </button>
);

const Contact = () => {
    return (
        <div className="mt-12 grid grid-cols-12 gap-6">
            <div className="col-span-8 bg-zinc-900 border border-slate-700 rounded-lg p-6">
                <h2 className="text-white text-xl mb-4">✨ Let&apos;s Stay Connected!</h2>
                <p className="text-gray-400">
                    Follow me on social media for design inspiration, behind-the-scenes updates, and the latest projects.
                    Let&apos;s create and grow together!
                </p>
            </div>
            <div className="col-span-4 grid grid-cols-3 gap-4">
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