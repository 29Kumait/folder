import { useState } from 'react';
import home from "../assets/home.svg";
import styles from './Page.module.css';
import Bar from '../components/Bar/Bar';

const Page = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        < >
            <img
                className={styles.logoHome}
                src={home}
                alt="logo"
                aria-hidden="true"
                onClick={toggleSidebar}
            />
            <Bar isVisible={sidebarOpen} onClose={closeSidebar} />

        </>
    );
};

export default Page;
