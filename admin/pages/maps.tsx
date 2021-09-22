import React from "react";
import Head from "next/head";

import styles from "../styles/Maps.module.css";
import { Map } from "../components/Map";

const Maps: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Maps - NEWS</title>
      </Head>
      <h1 className={styles.MapPageTitle}>NEWS Map</h1>
      <main role="main" className={styles.container}>
        <div className={styles.MapContainer}>
          <Map />
        </div>
      </main>
    </div>
  );
};

export default Maps;
