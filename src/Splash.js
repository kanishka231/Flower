
import React, { useEffect } from 'react';
import logo from './logo.gif';
import './SplashScreen.css';

function SplashScreen() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          const root = document.getElementById('root');
          root.classList.remove('hidden');
          root.classList.add('fade-in');
        }, 3000);
        return () => clearTimeout(timeoutId);
      }, []);
  return (
    <div className="splash-container">
      <img src={logo} alt="logo" className="splash-logo" />
      <div className="splash-heading">Welcome in Flower land</div>
    </div>
  );
}

export default SplashScreen;

