import React, { useEffect, useRef } from 'react';

import './styles.css'; // Assuming you have CSS styles in a separate file

const EyesFollowCursor = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const moveEye = (event) => {
      moveIndividualEye(leftEyeRef, event);
      moveIndividualEye(rightEyeRef, event);
    };

    window.addEventListener('mousemove', moveEye);

    return () => {
      window.removeEventListener('mousemove', moveEye);
    };
  }, []);

  const moveIndividualEye = (eyeRef, event) => {
    const eye = eyeRef.current;
    const x = eye.offsetLeft + eye.offsetWidth / 2;
    const y = eye.offsetTop + eye.offsetHeight / 2;
    const rad = Math.atan2(event.pageX - x, event.pageY - y);
    const rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.style.transform = `rotate(${rot}deg)`;
  };

  return (
    <div className="container-eyes">
      <div ref={leftEyeRef} className="eye"></div>
      <div ref={rightEyeRef} className="eye"></div>
    </div>
  );
};

export default EyesFollowCursor;