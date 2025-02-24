import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-4 mt-10 bg-zinc-900 border border-slate-700 rounded-lg">
            <div className="text-white mb-4 md:mb-0">
                <h3 className="font-medium">Asep Syaepul —</h3>
                <p className="text-sm text-gray-400">Portfolio</p>
            </div>
            <p className="text-gray-400 text-sm">© 2025 Asys_ All rights reserved.</p>
        </footer>
    );
};

export default Footer;