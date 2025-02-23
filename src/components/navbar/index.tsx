import React from 'react';
import { Moon } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-20 py-4 bg-zinc-900 border border-slate-700 rounded-lg">
            <div className="text-white">
                <h1 className="font-medium">Asep Syaepul —</h1>
                <p className="text-sm text-gray-400">Portfolio</p>
            </div>
            <div className="flex gap-8 items-center">
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