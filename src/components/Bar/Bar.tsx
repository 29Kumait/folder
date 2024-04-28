import React, { forwardRef } from 'react';
import styles from './Bar.module.css';
import x from '../../assets/x.ico';
// import Image from '../Fetch/Image';

interface BarProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    height: string;
}

const Bar = forwardRef<HTMLDivElement, BarProps>(({ isVisible, onClose, children, height }, ref) => {
    return (
        <>
            <div
                ref={ref}
                className={isVisible ? `${styles.bar} ${styles.visible}` : styles.bar}
                style={{ height: height }}
            >
                {children}
                {/* <Image path="IMG_6797.PNG" /> */}
            </div>
            <img
                className={isVisible ? `${styles.logoX} ${styles.visible}` : styles.logoX}
                src={x}
                alt="Close"
                aria-hidden="true"
                onClick={onClose}
            />
        </>
    );
});

export default Bar;
