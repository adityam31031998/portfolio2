import React from "react";
import styles from "../music.module.css";
import artistImg from "./music/artist.png"
import genericImg from "./music/generic2.png"
import musicImg from "./music/musicTrack.png"
import homeImg from "./music/home.png"
const MenuMusic = () => {
  return (
    <div className={styles.menu}>
      <p className={styles.iconName}>
        <img src={homeImg} className={styles.menuIcon} alt="" />
        <span>Home</span>
      </p>
      <p className={styles.iconName}>
        <img src={genericImg} className={styles.menuIcon} alt="" />{" "}
        <span>Generic</span>
      </p>
      <p className={styles.iconName}>
        <img src={artistImg} className={styles.menuIcon} alt="" />{" "}
        <span>Artists</span>
      </p>
      <p className={styles.iconName}>
        <img src={musicImg} className={styles.menuIcon} alt="" />{" "}
        <span>Ablums</span>
      </p>
    </div>
  );
};

export { MenuMusic };
