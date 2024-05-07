import React, { useState, useRef, useEffect } from 'react';
import home from "../assets/home.ico";
import styles from './Page.module.css';
import Bar from '../components/Bar/Bar';
import Image from '../components/Fetch/Image.tsx';

const Page: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [sidebarHeight, setSidebarHeight] = useState<string>('729px');
    const sidebarRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    useEffect(() => {
        if (sidebarRef.current) {
            const updateHeight = () => {
                const scrollHeight = sidebarRef.current ? sidebarRef.current.scrollHeight : 0;
                const windowHeight = window.innerHeight;
                const adjustedHeight = Math.min(scrollHeight, windowHeight);
                setSidebarHeight(`${adjustedHeight}px`);
            };


            updateHeight();
            window.addEventListener('resize', updateHeight);
            return () => {
                window.removeEventListener('resize', updateHeight);
            };
        }
    }, [sidebarOpen]);

    const sidebarContent = (
        <div className={styles.inputButtonWrapper}>
            <p> 4 API . </p>

            <Image path="IMG_6797.PNG" />
            {/* 
            <input type="text" placeholder=" accept value" />
            <button>Button</button> */}
        </div>

    );

    return (
        <>
            <img
                className={styles.logoHome}
                src={home}
                alt="logo"
                aria-hidden="true"
                onClick={toggleSidebar}
            />
            <Bar ref={sidebarRef} isVisible={sidebarOpen} onClose={closeSidebar} height={sidebarHeight}>
                {sidebarContent}
            </Bar>
        </>
    );
};

export default Page;
