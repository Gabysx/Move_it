import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gabysx.png" alt="Gabys" />
            <div>
                <strong>Gabysx</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}