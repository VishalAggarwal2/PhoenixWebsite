import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


import useMediaQuery from "../hooks/useMediaQuery";
import styles from "./Carousel.module.css";
import LaptopInfoBotics from "./LaptopInfoBotics";
import MobileInfoBotics from "./MobileInfoBotics";

function Infobotics() {
  const isLaptop = useMediaQuery('(min-width: 1024px)');
  return (
    <div>
      
        {isLaptop ? <LaptopInfoBotics/>:<MobileInfoBotics/>}
    </div>
  );
}

export default Infobotics;
