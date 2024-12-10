import React, { useState, useEffect } from 'react';
import Header from './components/header';
import logo from './logo.svg';
import './App.css';
import Login from '../src/components/login';
import MobileLogin from './components/loginMobile';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 768;
      setIsMobile(mobileCheck);
    };

    checkDevice();

    window.addEventListener('resize', checkDevice);
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      {isMobile ? (
        <div className="mobile-view">
          <MobileLogin />
        </div>
      ) : (
        <div className="desktop-view">
          <Login />
        </div>
      )}

      <div 
        className="loading-message" 
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: 'white',
          borderRadius: '20px',
          fontSize: '14px',
          opacity: '0',
          animation: 'fadeInOut 2s ease-in-out',
          zIndex: '1000'
        }}
      >
        {isMobile ? 'Loading Mobile Version...' : 'Loading Desktop Version...'}
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .mobile-view, .desktop-view {
          flex: 1;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .desktop-view {
            display: none;
          }
        }

        @media (min-width: 769px) {
          .mobile-view {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;