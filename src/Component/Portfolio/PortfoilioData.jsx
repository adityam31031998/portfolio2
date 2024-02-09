// PortfoilioData.js
import React from "react";
import styles from "./Portfolio.module.css";
import { Link } from "react-router-dom";

const PortfoilioData = ({ images }) => {
  return (
    <>
     <div className={styles.container1}>
        <div className={styles.main1}>
      {images.map((image) => (
        <div className={styles.box1} key={image.id}>
          <Link to={image.links} >
            <div className={styles.imageBackground}>
              <img src={image.src} className={styles.img1} alt={image.title} />
            </div>
            <span className={styles.subTitle1}>{image.title}</span>
          </Link>
        </div>
      ))}
      </div>
      </div>
    </>
  );
};

export default PortfoilioData;


// {/* <span src={props.url} className="button1">Click Here</span> */}

    // <div className="portfolio-container">
    //   <div className="column-container">

    //     {images.map((image) => (
    //       <div key={image.id} className="box1">

    //         <img width="100px" className="img1" src={image.src} alt={image.title} />
    //         <span className="subTitle1">{image.title}</span>
    //       </div>
    //     ))}
    //   </div>
    // </div>