import React from 'react'
import styles from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "../images/12.png";
import image2 from "../images/13.png";
import image3 from "../images/14.png";
import image4 from "../images/15.png";
import image5 from "../images/16.png";
import image6 from "../images/17.png";
import image7 from "../images/18.png";
import image8 from "../images/19.png";

import image9 from "../images/1.png";
import image10 from "../images/2.png";
import image11 from "../images/3.png";
import image12 from "../images/4.png";
import image13 from "../images/5.png";
import image14 from "../images/6.png";
import image15 from "../images/7.png";
import image16 from "../images/8.png";
import image17 from "../images/9.png";
import image18 from "../images/10.png";

import image19 from "../images/44.png";
import image20 from "../images/20.png";
import image21 from "../images/21.png";
import image22 from "../images/22.png";
import image23 from "../images/23.png";
import image24 from "../images/24.png";
import image25 from "../images/25.png";
import image26 from "../images/26.png";
import image27 from "../images/27.png";

function LaptopInfoBotics() {
  return (
    <div>
        <Carousel showIndicators={false} showThumbs={false}>
        <div className={styles.test}>
          <div className={styles.pic}>
            <img src={image} />
          </div>
          <div className={styles.pic}>
            <img src={image2} />
          </div>
          <div className={styles.pic}>
            <img src={image3} />
          </div>
        </div>

        <div className={styles.test}>
          <div className={styles.pic}>
            <img src={image4} />
          </div>
          <div className={styles.pic}>
            <img src={image5} />
          </div>
          <div className={styles.pic}>
            <img src={image6} />
          </div>
        </div>
        <div className={styles.test}> 
        <div className={styles.pic}>
          <img src={image7} />
        </div>
        <div className={styles.pic}>
          <img src={image8} />
        </div>
        <div className={styles.pic}>
          <img src={image6} />
        </div>
        </div>
       

        <div className={styles.test}>
          <div className={styles.pic}>
            <img src={image9} />
          </div>
          <div className={styles.pic}>
            <img src={image10} />
          </div>
          <div className={styles.pic}>
            <img src={image11} />
          </div>
        </div>

        <div className={styles.test}>
          <div className={styles.pic}>
            <img src={image12} />
          </div>
          <div className={styles.pic}>
            <img src={image13} />
          </div>
          <div className={styles.pic}>
            <img src={image14} />
          </div>
        </div>

        <div className={styles.test}>
          <div className={styles.pic}>
            <img src={image15} />
          </div>
          <div className={styles.pic}>
            <img src={image16} />
          </div>
          <div className={styles.pic}>
            <img src={image17} />
          </div>
        </div>

        <div className={styles.test}>
          <div className={styles.pic}>
            <img src={image18} />
          </div>
          <div className={styles.pic}>
            <img src={image19} />
          </div>
          <div className={styles.pic}>
            <img src={image20} />
          </div>
        </div>

        <div className={styles.test}>
          <div className={styles.pic}>
            <img src={image21} />
          </div>
          <div className={styles.pic}>
            <img src={image22} />
          </div>
          <div className={styles.pic}>
            <img src={image23} />
          </div>
        </div>

        <div className={styles.test}>
          <div className={styles.pic}>
            <img src={image24} />
          </div>
          <div className={styles.pic}>
            <img src={image25} />
          </div>
          <div className={styles.pic}>
            <img src={image26} />
          </div>
        </div>
        </Carousel>
    </div>
  )
}

export default LaptopInfoBotics