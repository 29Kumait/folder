import styles from './Bar.module.css';
import x from '../../assets/x.ico';

const Bar = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
    return (
        <>
            <div className={isVisible ? `${styles.bar} ${styles.visible}` : styles.bar}>
                <p>...content</p>
                <div className={styles.inputButtonWrapper}>
                    <input type="text" placeholder=" accept value" />
                    <button>Button</button>
                </div>
            </div>
            <img className={styles.logoX} src={x} alt="x" aria-hidden="true" onClick={onClose} />
        </>
    );
}

export default Bar;