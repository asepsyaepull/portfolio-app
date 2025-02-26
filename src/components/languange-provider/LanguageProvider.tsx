import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext({ language: 'en', switchLanguage: (lang: string) => { } });

import { ReactNode } from 'react';

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState('en');

    const switchLanguage = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
