import React from 'react';
import { Moon } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-4 bg-zinc-900 border border-slate-700 rounded-lg">
            <div className="text-white mb-4 md:mb-0">
                <h1 className="font-medium">Asep Syaepul —</h1>
                <p className="text-sm text-gray-400">Portfolio</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <a href="#about" className="text-white hover:text-gray-300">About</a>
                <a href="#work" className="text-white hover:text-gray-300">Work</a>
                <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                <button className="text-white hover:text-gray-300">
                    <Moon size={20} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;