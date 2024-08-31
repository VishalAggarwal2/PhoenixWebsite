import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleEvent from "./SingleEvent";
import classes from "./Styles/EventCarousel.module.css";

const EventCarousel = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    axios
      .get("/api/users/getEvents") // Ensure this endpoint returns the event data
      .then((response) => {
        const events = response.data;
        setEventsData(events);

        // Set the second event as the default selected event
        if (events.length > 1) {
          setSelectedEvent(events[1]);
        } else if (events.length === 1) {
          setSelectedEvent(events[0]); // Fallback to the first event if only one event is available
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    window.scrollTo(0, 0); // Scroll to top when an event is selected
  };

  return (
    <>
      {selectedEvent && <SingleEvent event={selectedEvent} />}
      <div className={classes.EventCarousel}>
        <div className={classes.Event_data}>
          {eventsData.map((event) => (
            <div
              key={event.id}
              onClick={() => handleEventClick(event)}
              className={classes.EventCard}
            >
              <img src={event.images} alt={event.title} />
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventCarousel;
