import React, { useState } from "react"; // Don't forget to import React
// import Data from "./EventsData";
import classes from "./Styles/SingleEvent.module.css";
import Data from "./EventsData";
import left from "./Assets/left-arrow.png";
import right from "./Assets/right-arrow.png";

const SingleEvent = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const event = Data[props.id - 1];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + event.images.length) % event.images.length
    );
  };

  if (!event) {
    return <></>;
  }
  return (
    <div>
      <div className={classes.single_event_container}>
        <section className={classes.single_event_description}>
          <div key={event.id} className={classes.event_title}>
            {event.title}
          </div>

          <div className={classes.event_description}>{event.description}</div>
        </section>
        <div className={classes.design}></div>
        <section className={classes.images}>
          <img
            src={left}
            alt=""
            srcSet=""
            onClick={prevImage}
            className={classes.arrow}
          />
          <div className={classes.poster}>
            <img src={event.images[currentImageIndex]} alt={event.title} />
          </div>
          <img
            src={right}
            alt={event.title}
            srcSet=""
            onClick={nextImage}
            className={classes.arrow}
          />
        </section>
      </div>
    </div>
  );
};

export default SingleEvent;
