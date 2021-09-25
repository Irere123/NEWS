import Head from "next/head";

import styles from "../styles/Home.module.css";
import { ProfileCard } from "../components/home/ProfileCard";
import { MiddleCards } from "../components/home/MiddleCards";
import { TopStory } from "../components/home/TopStory";

function Home() {
  return (
    <div>
      <Head>
        <title>NEWS - On the Top</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.FeedTitle}>Your Feed</h1>
        <div role="main" className={styles.cardsHome}>
          <div>
            <ProfileCard />
          </div>
          <div className={styles.MiddleCards}>
            <MiddleCards />
          </div>
          <div>
            <TopStory />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
