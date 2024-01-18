// src/components/Food.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Food = ({ eaten , onRest}) => {
    const springProps = useSpring({
        to: { opacity: eaten ? 0 : 1 },
        onRest: () => {
          if (eaten) {
            onRest(); // Notify the parent component that the animation is complete
          }
        },
      });

  return <animated.img src="./luke.jpg" style={springProps} alt="Food" />;
};

export default Food;
