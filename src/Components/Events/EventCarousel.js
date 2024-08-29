import Data from "./EventsData";
import SingleEvent from "./SingleEvent";
import classes from "./Styles/EventCarousel.module.css";
import { useState } from "react";



const EventCarousel = () => {

   
  const [showMainEvent, setMainEvent] = useState(1);
  const MainEventHandler = (id) => {
    setMainEvent(id);
  };
  const ScrollHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {showMainEvent && <SingleEvent id={showMainEvent} />}
      <div className={classes.EventCarousel}>
        <div className={classes.Event_data}>
          {Data.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                MainEventHandler(item.id);
                ScrollHandler();
              }}
              className={classes.EventCard}
            >
              <img src={item.poster} alt={item.title}></img>
              <h3>{item.title}</h3>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default EventCarousel;
