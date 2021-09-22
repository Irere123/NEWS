/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

import styles from "../../styles/Home.module.css";
import pic from "../../public/irere.jpg";

const Suggestions: React.FC = () => {
  return (
    <>
      <h3>Suggestions</h3>
      <h5 className={styles.Suggestions__text}>
        Today's most viewed article is about Tech and Business so i suggest you
        write about these topics
      </h5>
      <div className={styles.Suggested__Topics}>
        <div className={styles.Suggested__Topics_topics}>
          <h4>#Tech</h4>
          <h4>#Business</h4>
          <h4>#Food</h4>
        </div>
      </div>
      <h3>Statistics</h3>
      <div className={styles.Statistics}></div>
    </>
  );
};

export const ProfileCard: React.FC = () => {
  return (
    <div className={styles.ProfileCard}>
      <div className={styles.userInfo}>
        <div className={styles.userInfo__Image}>
          <Image
            className={styles.userInfo__Image_img}
            src={pic}
            alt="Profile Picture"
          />
        </div>
        <div className={styles.userInfo__Info}>
          <h3>Irere Emmy</h3>
          <h4>Joined NEWS in July 2020</h4>
        </div>
      </div>
      <div className={styles.Suggestions}>
        <Suggestions />
      </div>
    </div>
  );
};
