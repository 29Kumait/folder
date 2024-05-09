import React, { useState, useRef, useEffect } from 'react';
import home from "../assets/home.ico";
import styles from './Page.module.css';
import Bar from '../components/Bar/Bar';
import FetchImage from '../components/Image/FetchImage.tsx';
import TwoColumnLayout from '../components/Layout/TwoColumnLayout.tsx';
import CVForm from '../components/Form/CVForm';
import ImageUpload from '../components/Image/ImageUpload';

const Page: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarHeight, setSidebarHeight] = useState<string>('100%');
    const sidebarRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    useEffect(() => {
        const updateHeight = () => {
            const scrollHeight = sidebarRef.current ? sidebarRef.current.scrollHeight : 0;
            const windowHeight = window.innerHeight;
            const adjustedHeight = Math.min(scrollHeight, windowHeight);
            setSidebarHeight(`${adjustedHeight}px`);
        };
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [sidebarOpen]);


    const leftContent = (
        <div>
            <CVForm />

        </div>
    );

    const rightContent = (
        <div>
            {/* <CVForm /> */}

        </div>
    );


    const sidebarContent = (
        <>
            <div className={styles.inputButtonWrapper}>
                <p> 4 API . </p>
                <FetchImage path="IMG_6797 2.PNG" />
            </div>
            <TwoColumnLayout left={leftContent} right={rightContent} />
            <div className={styles.inputButtonWrapper}>
                {/* <CVForm /> */}
                <ImageUpload />
            </div>
        </>



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
            <Bar ref={sidebarRef} isVisible={sidebarOpen} onClose={() => setSidebarOpen(false)} height={sidebarHeight}>
                {sidebarContent}
                {/* <CVForm /> */}
            </Bar>
        </>
    );
};

export default Page;


{/* <div className={styles.inputButtonWrapper}>
                <input type="text" placeholder=" accept value" />
                <button>Button</button>
            </div> */}
