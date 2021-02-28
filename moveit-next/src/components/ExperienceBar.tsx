import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';
import Switch from 'react-switch';

export function ExperienceBar() {

  const { currentExperience , experienceToNextLevel} = useContext(ChallengesContext);

  const percentToNextLevel = (currentExperience * 100) / experienceToNextLevel;

 


  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left:`${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>

      </div>
      {experienceToNextLevel}xp
      <Switch
      

      >

      </Switch>
    </header>
  );
}