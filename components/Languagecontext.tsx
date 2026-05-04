"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "EN" | "FR";

interface LangContextType {
  language: Lang;
  setLanguage: (l: Lang) => void;
}

const LanguageContext = createContext<LangContextType>({
  language: "FR", 
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Lang>("FR");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;