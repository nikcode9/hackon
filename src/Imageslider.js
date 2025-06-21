import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

function ImageSlider() {
  const imgs = [
    { id: 0, value: '../images/img1.jpeg' },
    { id: 1, value: '../images/img2.jpeg' },
    { id: 2, value: '../images/img3.jpeg' },
    { id: 3, value: '../images/img4.jpeg' },
    // { id: 4, value: '../images/img1.jpeg' },
  ];
  const [val, setVal] = useState(0);

  const handleNext = () => {
    const index = val < imgs.length - 1 ? val + 1 : 0; // Loop back to the first image.
    setVal(index);
  };

  const handlePrev = () => {
    const index = val > 0 ? val - 1 : imgs.length - 1; // Loop back to the last image.
    setVal(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000); // Change image every 4 seconds (adjust the time as needed).

    return () => {
      clearInterval(interval);
    };
  }, [val]);

  return (
    <div className="main">
      {imgs[val].type === 'video/mp4' ? (
        <video className="slidevideo" autoPlay loop muted>
          <source src={imgs[val].value} type="video/mp4" />
        </video>
      ) : (
        <img className="slideimg" src={imgs[val].value} alt="Image" />
      )}

      <div className="slider-controls">
        <button onClick={handlePrev} className="prev-button">
          <img className="arrow" src="../images/prev.png"/> 
        </button>
        <button onClick={handleNext} className="next-button">
        <img className="arrow" src="../images/next.png"/>
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;