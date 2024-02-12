import React from "react";
import styles from "../music.module.css";

// import imgs1 from "./music/1.jpg"
function TreandingMusic(artist) {
  return (
    <div className={styles.mus}>
      <div className={styles.trandings}>
        {artist?.items &&
          artist.items.length > 0 &&
          artist.items.map((item, index) => (
            <img key={index}
              src={item?.images[0].url}
              className={styles.trandingImages}
              alt=""
            />
          ))}
        {/* {artist?.items.map((item, index) => (
          <div key={index} className={styles.tranding}>
            <img src={imgs} className={styles.trandingImages} alt="" />
            <span></span>
          </div>
        ))} */}
      </div>
    </div>
  );
}
export { TreandingMusic };
