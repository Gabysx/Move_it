import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Challenges.module.css'

export function CompletedChallenges() {
    
    const {challengesCompleted} = useContext(ChallengesContext);
    
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted < 10 ? `0${challengesCompleted}` : challengesCompleted}</span>
        </div>
    );
}