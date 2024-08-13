import React, { useEffect, useState } from 'react';// Import the CSS file with the provided styles

const RainEffect = () => {
  const [showSplat] = useState(true);
  const [showBackRow] = useState(true);

  useEffect(() => {
    const makeItRain = () => {
      // Clear out everything
      const frontRow = document.querySelector('.rain.front-row');
      const backRow = document.querySelector('.rain.back-row');
      frontRow.innerHTML = '';
      backRow.innerHTML = '';

      let increment = 0;
      let drops = '';
      let backDrops = '';

      while (increment < 100) {
        const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        increment += randoFiver;

        drops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
        backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
      }

      frontRow.innerHTML = drops;
      if (showBackRow) {
        backRow.innerHTML = backDrops;
      }
    };

    makeItRain();
  }, [showBackRow]);

  return (
    <div className={`rain-effect ${showSplat ? 'splat-toggle' : ''} ${showBackRow ? 'back-row-toggle' : ''}`}>
      <div className="rain front-row"></div>
      {showBackRow && <div className="rain back-row"></div>}
    </div>
  );
};

export default RainEffect;
