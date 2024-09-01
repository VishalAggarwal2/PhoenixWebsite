// import Aboutcss from './Aboutcard.module.css';
// export default function Aboutcard(props) {
//     return(
//         <>
//          <div className={Aboutcss.container}>
//             <img className={Aboutcss.aboutimage} src={`/images/about${props.imgNo}.jpg`} alt="About-pic" />
//          </div>
//         </>
//     );
// }

// // src={`/images/about${props.imgNo}.jpg`}
// // src={`/images/BLOG-IMG.png`}

// Aboutcard.js
import React, { useEffect, useRef, useState } from 'react';
import Aboutcss from './Aboutcard.module.css';

export default function Aboutcard(props) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reset visibility when scrolling away
          }
        });
      },
      { threshold: 0.5 } // Adjust based on when you want the effect to trigger
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className={Aboutcss.container} ref={cardRef}>
      <img
        className={`${Aboutcss.aboutimage} ${isVisible ? Aboutcss.visible : ''}`}
        src={`/images/about${props.imgNo}.jpg`}
        alt={`About image ${props.imgNo}`}
      />
    </div>
  );
}




// src={`/images/about${props.imgNo}.jpg`}
// src={`/images/BLOG-IMG.png`}