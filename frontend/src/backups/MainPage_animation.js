import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

const ConveyorBelt = () => {
  const [images, setImages] = useState(Array.from({ length: 100 }, (_, index) => index));
  const [scroll, setScroll] = useState(0);

  const scrollProps = useSpring({
    from: { transform: `translateX(${scroll}px)` },
    to: { transform: `translateX(-5000px)` },
    config: { ...config.default, duration: 50000 }, // Adjust duration as needed
    reset: true,
    onRest: () => setScroll(0),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScroll((prevScroll) => prevScroll -0); // Adjust scroll speed as needed
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100px' }}>
      <animated.div style={{ display: 'flex', ...scrollProps }}>
        {images.map((imageIndex) => (
          <div key={imageIndex} style={{ width: '100px', height: '100px', marginRight: '10px' }}>
            {/* Render your image component here */}
            <img
              src={`http://www.acclaimedmusic.net/images/A${imageIndex}.jpg`} // Replace with your image URL logic
              alt={`Image ${imageIndex}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default ConveyorBelt;