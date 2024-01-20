// src/components/Cat.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Cat = ({ eating, position, catImage }) => {
  const springProps = useSpring({
    to: { opacity: eating ? 0 : 1, scale: eating ? 1.2 : 1, left: eating ? position.x : 0, top: eating ? position.y : 0 },
  });

  return (
    <animated.div style={springProps}>
      <img src={catImage} alt='Cat' style={{ width: '50%', height: '50%', objectFit: 'contain' }} />
    </animated.div>
  );
};

export default Cat;
