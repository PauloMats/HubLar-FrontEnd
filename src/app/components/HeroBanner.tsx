import React from 'react';
import styles from '../styles/heroBanner.module.css'

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className={styles.heroBanner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
