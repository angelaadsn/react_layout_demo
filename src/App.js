import React, { useState } from 'react';

const App = () => {
  const [position, setPosition] = useState('top');

  const handleClick = () => {

    const randomTop = Math.floor(Math.random() * (window.innerHeight - 100));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));

    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="App">
      <button
        onClick={handleClick}

        style={{
          position: 'absolute',
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        Hello World
      </button>
    </div>
  );
};

export default App;