import React from 'react';
import './Popup.css';

const DefaultPopup = ({ title, desc, backgroundImage, onClose }) => {

  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'center'
  };

  return (
    <div className="popup-container">
      <div className="popup default">
        <div style={headerStyle} className="header">
          <h2>{title}</h2>
        </div>
        <div className='desc'>
        <div dangerouslySetInnerHTML={{ __html: desc }} />
          <ul>
            <li>
              <a href='#'>
                I
              </a>
            </li>
          </ul>
        </div>
        <button className='close' onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default DefaultPopup;
