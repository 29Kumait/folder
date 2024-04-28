import React, { createContext, useState, useEffect, ReactNode } from "react";

export interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  // Use system preference to initialize dark mode state
  const [darkMode, setDarkMode] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};