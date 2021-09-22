import React from "react";
import Head from "next/head";

import styles from "../styles/Stats.module.css";
import { Cards } from "../components/stats/Cards";
import { Chart } from "../components/stats/Chart";

const Stats: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Statistics - NEWS</title>
      </Head>
      <h1 className={styles.PageTitle}>Statistics</h1>
      <main role="main" className={styles.container}>
        <div className={styles.Cards}>
          <Cards />
        </div>
        <div className={styles.ChartContainer}>
          <Chart />
        </div>
      </main>
    </div>
  );
};

export default Stats;
