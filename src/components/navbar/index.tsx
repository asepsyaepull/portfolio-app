import React, { useState } from 'react';
import { Moon, Menu, X } from 'lucide-react';
import ThemeToggle from './theme-toggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex md:flex-row justify-between items-center px-4 md:px-20 py-4 bg-zinc-900 border border-slate-700 rounded-lg">
            <div className="text-white mb-4 md:mb-0">
                <h1 className="font-medium">Asep Syaepul —</h1>
                <p className="text-sm text-gray-400">Portfolio</p>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white hover:text-gray-300">
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
            <div className={`flex-col md:flex-row gap-4 md:gap-8 items-center ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                <a href="#about" className="text-white hover:text-gray-300">About</a>
                <a href="#work" className="text-white hover:text-gray-300">Work</a>
                <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;