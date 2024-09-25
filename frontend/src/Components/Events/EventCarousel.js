import React, { useState, useEffect } from "react";
import SingleEvent from "./SingleEvent";
import EventsData from "./EventsData"; // Import the EventsData array
import classes from "./Styles/EventCarousel.module.css";

const EventCarousel = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleButtonClick = (driveLink) => {
    if (driveLink) {
      window.open(driveLink, "_blank"); // Opens the drive link in a new tab
    } else {
      alert("No drive link available for this event");
    }
  };

  useEffect(() => {
    // Use the static EventsData array instead of fetching from an API
    setEventsData(EventsData);

    // Set the second event as the default selected event
    if (EventsData.length > 1) {
      setSelectedEvent(EventsData[1]);
    } else if (EventsData.length === 1) {
      setSelectedEvent(EventsData[0]); // Fallback to the first event if only one event is available
    }
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
              <img src={event.poster} alt={event.title} />
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {selectedEvent && (
        <div className="container2">
          <button
            onClick={() => handleButtonClick(selectedEvent.driveLink)}
            className="drive-button"
            style={{ backgroundColor: "#FFAC1C" }}
          >
            Snaps
          </button>
        </div>
      )}
    </>
  );
};

export default EventCarousel;
