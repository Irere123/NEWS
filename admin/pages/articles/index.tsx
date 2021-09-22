import React from "react";
import Head from "next/head";
import Link from "next/link";
import { AddCircleOutlined } from "@mui/icons-material";

import styles from "../../styles/Articles.module.css";
import { LastetStories } from "../../components/articles/LastestStories";
import { AllStories } from "../../components/articles/AllStories";

const Index: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Articles - NEWS</title>
      </Head>
      <main role="main">
        <h1 className={styles.articlesTitle}>NEWS Articles</h1>
        <div className={styles.composeButton}>
          <Link href="/">
            <a>
              <AddCircleOutlined />
              <span>Compose</span>
            </a>
          </Link>
        </div>
        <div className={styles.newsCategories}>
          <div className={styles.newsCategoryButton}>
            <h3>BUSINESS</h3>
          </div>
          <div className={styles.newsCategoryButton}>
            <h3>TECH</h3>
          </div>
          <div className={styles.newsCategoryButton}>
            <h3>POLITICS</h3>
          </div>
        </div>
        <h1 className={styles.LatestTitle}>Latest</h1>
        <div className={styles.StoriesContainer}>
          <div className={styles.LastestStories}>
            <LastetStories />
          </div>
          <h1 className={styles.LatestTitle}>Articles</h1>
          <div className={styles.AllStories}>
            <AllStories />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
