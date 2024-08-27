
import React, { useEffect, useRef, useState } from 'react';
import blogupcss from "./Blogmaincomponentup.module.css";
import TopBlogdata from "./TopBlogdata";

export default function Blogmaincomponent() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Optional: Reset visibility when out of view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${blogupcss.maincontainer} ${isVisible ? blogupcss.visible : ''}`}
    >
      <div className={blogupcss.maincontainerleft}>
        <img className={blogupcss.containerimage} src={TopBlogdata[0].url} alt="BLOG-IMG" />
      </div>
      <div className={blogupcss.maincontainerright}>
        <p className={blogupcss.blogdate}>
          {TopBlogdata[0].date}
        </p>
        <h2 className={blogupcss.blogheading}>
          {TopBlogdata[0].heading}
        </h2>
        <p className={blogupcss.blogsubheading}>
          {TopBlogdata[0].subheading}
        </p>
      </div>
    </div>
  );
}
