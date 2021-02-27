import Head from 'next/head';
import { GetServerSideProps} from 'next';
import Cookies from 'js-cookie';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { BoxChallenges } from "../components/BoxChallenges";


import styles from '../styles/pages/Home.module.css';
import React from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start | Move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <CountdownProvider>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>

            <BoxChallenges />

          </div>
        </CountdownProvider>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

 const { level, currentExperience, challengesCompleted } =  ctx.req.cookies;
 
 
  return {
    props:{ 
      level, 
      currentExperience,
      challengesCompleted,
    }
  }
}