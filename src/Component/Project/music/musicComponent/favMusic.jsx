import React from "react";
import styles from "../music.module.css";
function FavMusic(){

    return (
        <div className={styles.fav}>
    <p className={styles.iconName}>
      <span>Favourites</span>
    </p>
  </div>
);
} 
export{FavMusic}