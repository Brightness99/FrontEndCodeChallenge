import React from 'react';
import Button from '../Button';
import './index.css';

function Hero() {
  return (
    <div className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="h4">New Game & Accessories</p>
          <p className="h2 t-light">Monthly packages<br/>Excitement delivered daily.</p>
          <p className="h5">What’s the best way to shop for the latest video games and peripherals? How about never shopping at all? You’ll get new stuff on your doorstep — every month.</p>
          <Button title="Get Started" onClick={() => console.log('get started clicked')} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
