import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { BoxChallenges } from "../components/BoxChallenges";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start | Move.it</title>
      </Head>

      <ExperienceBar />

      <section>

        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <BoxChallenges />
        </div>
        
      </section>
    </div>
  )
}