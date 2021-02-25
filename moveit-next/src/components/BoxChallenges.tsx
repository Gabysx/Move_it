import styles from '../styles/components/BoxChallenges.module.css';

export function BoxChallenges() {
  return (
    <div className={styles.container}>
      <div className={styles.not}>
        <strong>
          Finalize um ciclo para receber um desafio
        </strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
        </p>
      </div>
    </div>
  );
}