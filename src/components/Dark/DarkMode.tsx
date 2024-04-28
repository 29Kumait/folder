import React, { useEffect } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

const DarkMode: React.FC = () => {
    const { darkMode, setDarkMode } = useDarkMode();

    // Side effect to update the `data-theme` attribute on the <html> element
    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            darkMode ? "dark" : "light",
        );
    }, [darkMode]);

    return (
        <div>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "♠︎♣︎" : "♡♢"}
            </button>
        </div>
    );
};

export default DarkMode;