import React from "react";
import classes from "./Styles/SingleEvent.module.css";

const SingleEvent = ({ event }) => {
  if (!event) {
    return <div></div>;
  }

  return (
    <div className={classes.single_event_container}>
      <section className={classes.single_event_description}>
        <div key={event.id} className={classes.event_title}>
          {event.title}
        </div>
        <div className={classes.event_description}>{event.description}</div>
      </section>
      <div className={classes.design}></div>
      <section className={classes.images}>
        <div className={classes.poster}>
          <img src={event.images} alt={event.title} />
        </div>
      </section>
    </div>
  );
};

export default SingleEvent;
