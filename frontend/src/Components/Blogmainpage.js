import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Blog.css'; // Import the CSS file
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import data from './BlogData'; // Import the data from your data.js file

const BlogmainPage = () => {
  // State to hold the events data, current blog, loading state, and error state
  const [events, setEvents] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);

  const handleButtonClick = () => {
    const driveLink = 'https://drive.google.com/drive/folders/1C2FZ8NBhJl4EUQgGwX_n6BktVhb3mzBv';
    window.open(driveLink, '_blank'); // Opens the link in a new tab
  };

  useEffect(() => {
    // Initialize events with the data imported from data.js
    setEvents(data);
    setCurrentBlog(data[0]); // Set the first event as the current blog
  }, []);

  // Function to calculate slider settings based on the number of events
  const calculateSliderSettings = () => {
    let slidesToShow = 5;

    if (events.length <= 2) {
      slidesToShow = 2;
    } else if (events.length <= 4) {
      slidesToShow = 3;
    } else if (events.length <= 6) {
      slidesToShow = 4;
    } else if (events.length <= 8) {
      slidesToShow = 6;
    }

    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow,
      slidesToScroll: 1,
      nextArrow: <FaArrowRight className="slick-arrow slick-next" />,
      prevArrow: <FaArrowLeft className="slick-arrow slick-prev" />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: Math.min(slidesToShow, 2),
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(slidesToShow, 3),
          },
        },
      ],
    };
  };

  const handleMoreInfoClick = (event) => {
    setCurrentBlog(event);
  };

  return (
    <div className="container">
      {currentBlog && (
        <div className="blogCard">
          <div className="blogImageContainer">
            <img src={currentBlog.url} alt={currentBlog.heading} className="blogImage" />
          </div>
          <div className="blogContent">
            <h1 className="blogTitle">{currentBlog.heading}</h1>
            <p className="blogDescription">{currentBlog.subheading}</p>
            {/* <p className="blogDate">{currentBlog.date}</p> */}
          </div>
        </div>
      )}

      <h2 className="carouselTitle">All Events</h2>
      <Slider {...calculateSliderSettings()}>
        {events.map((event) => (
          <div key={event.id} className="carouselCardWrapper">
            <div className="carouselCard">
              <img src={event.url} alt={event.heading} className="eventImage" />
              <h3 className="eventTitle">{event.heading}</h3>
              {/* <p className="eventDate">{event.date}</p> */}
              <button
                className="moreInfoButton"
                onClick={() => handleMoreInfoClick(event)}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <div className="container2">
        <button onClick={handleButtonClick} className="drive-button">
          Snaps
        </button>
      </div>
    </div>
  );
};

export default BlogmainPage;
