import React from "react";
import styles from "../music.module.css";
function PlaylistMusic({ categoryResponse }) {
  return (
    <div className={styles.playlist}>
      {/* <s className={styles.iconName}> */}
        {/* <img src="./home.png" width={"50px"} alt="loading"></img> */}
        {/* </p> */}
        <span className={styles.catsubTitle}>Categories</span>
        <div className={styles.catList}>
        {categoryResponse?.categories?.items.map((item, index) => (
          <span key={index} className={styles.catSubPara}><img className={styles.catImaes} src={item?.icons[0]?.url} alt="" />{item.name}</span>
          ))}
          </div>
    </div>
  );
}
export { PlaylistMusic };
