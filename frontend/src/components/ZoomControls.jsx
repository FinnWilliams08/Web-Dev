import React, { useContext } from 'react';
import { ZoomContext } from '../context/ZoomContext';

export const ZoomControls = () => {
  const { increaseZoom, decreaseZoom, resetZoom } = useContext(ZoomContext);

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}>
      <button onClick={increaseZoom}>+</button>
      <button onClick={decreaseZoom}>-</button>
      <button onClick={resetZoom}>Reset</button>
    </div>
  );
};