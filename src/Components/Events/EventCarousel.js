import Data from "./EventsData";
import SingleEvent from "./SingleEvent";
import classes from "./Styles/EventCarousel.module.css";
import axios from 'axios';
import React, { useState, useEffect } from "react";

const EventCarousel = () => {

  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    axios
      .get("/api/users/getBlogs")
      .then((response) => {
        // Assuming the backend returns the blog data as an array
        setEventsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

   
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
