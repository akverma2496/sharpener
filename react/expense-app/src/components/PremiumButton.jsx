import React from 'react';
import { Button } from 'react-bootstrap';

const PremiumButton = ({ onClick }) => {
  const wrapperStyle = {
    padding: '2px',
    borderRadius: '8px',
    background: 'linear-gradient(270deg, gold, orange, deeppink, gold)',
    backgroundSize: '600% 600%',
    animation: 'gradientBorder 3s linear infinite',
    display: 'inline-block',
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'gold',
    fontWeight: 'bold',
    border: 'none',
    padding: '5px 20px',
    borderRadius: '8px',
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientBorder {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="d-flex justify-content-center">
        <div style={wrapperStyle}>
          <Button style={buttonStyle} onClick={onClick}>
            ✨ Activate Premium
          </Button>
        </div>
      </div>
    </>
  );
};

export default PremiumButton;
