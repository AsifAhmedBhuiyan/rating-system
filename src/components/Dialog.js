import React from 'react';
import '../styles/Dialog.css';

const Dialog = ({ onClose }) => {
  const handleButtonClick = () => {
    onClose();
  };

  return (
    <div className="dialog-container"> 
      <button onClick={handleButtonClick}>Close Dialog</button> {/* Update the onClick event */}
    </div>
  );
};

export default Dialog;
