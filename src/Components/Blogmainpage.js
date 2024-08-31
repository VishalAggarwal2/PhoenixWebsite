import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Blog.css'; // Import the CSS file
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

const BlogmainPage = () => {
  // State to hold the events data, current blog, loading state, and error state
  const [events, setEvents] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch events from API using axios
    axios.get('/api/users/getBlogs') // Replace with your API endpoint
      .then(response => {
        setEvents(response.data);
        setCurrentBlog(response.data[0]); // Set the first event as the current blog
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading events: {error.message}</div>;

  return (
    <div className="container">
      {currentBlog && (
        <div className="blogCard">
          <div className="blogImageContainer">
            
            <img src={currentBlog.images} alt={currentBlog.title} className="blogImage" />
          </div>
          <div className="blogContent">
            <h1 className="blogTitle">{currentBlog.title}</h1>
            <p className="blogDescription">{currentBlog.description}</p>
            {/* <p className="blogDate">{currentBlog.date}</p> */}
          </div>
        </div>
      )}

      <h2 className="carouselTitle">All Events</h2>
      <Slider {...calculateSliderSettings()}>
        {events.map((event, index) => (
          <div key={index} className="carouselCardWrapper">
            <div className="carouselCard">
              <img src={event.images} alt={event.title} className="eventImage" />
              <h3 className="eventTitle">{event.title}</h3>
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
    </div>
  );
};

export default BlogmainPage;
