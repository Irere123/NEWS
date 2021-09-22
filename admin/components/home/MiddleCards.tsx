import React from "react";

import styles from "../../styles/Home.module.css";

const BreakingNewsContent: React.FC = () => {
  return (
    <>
      <h3>BBBB</h3>
    </>
  );
};

const SocialMediaContent: React.FC = () => {
  return (
    <>
      <h3>BBBB</h3>
    </>
  );
};

export const MiddleCards: React.FC = () => {
  return (
    <>
      <div className={styles.breakingNewsCard}>
        <BreakingNewsContent />
      </div>
      <div className={styles.socialMediaCard}>
        <SocialMediaContent />
      </div>
    </>
  );
};
