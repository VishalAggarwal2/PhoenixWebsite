import EventCarousel from "./EventCarousel";
import SingleEvent from "./SingleEvent";
import classes from "./Styles/SingleEvent.module.css";

const Events = () => {
  return (
    <div className={classes.EventsPage}>
      <SingleEvent />
      <EventCarousel />
    </div>
  );
};
export default Events;
