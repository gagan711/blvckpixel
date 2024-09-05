import React, {useState} from 'react';
import './Popup.css';


const SearchPopup = ({ onClose }) => {

    const [selectedOption, setSelectedOption] = useState('all');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
      };


  return (
    <div className="popup-container">
      <div className="popup">
        <h2>[Search]</h2>
        <p>You can search for a specific book by kewords</p>


        <div className="search-options">
          <label
            className={selectedOption === 'all' ? 'active' : ''}
            onClick={() => handleOptionChange('all')}
          >
            All
          </label>

          <label
            className={selectedOption === 'books' ? 'active' : ''}
            onClick={() => handleOptionChange('books')}
          >
            Books
          </label>

          <label
            className={selectedOption === 'reports' ? 'active' : ''}
            onClick={() => handleOptionChange('reports')}
          >
            Reports
          </label>
        </div>


        <div className="search-input">
            <input type="text" placeholder="Enter keywords..." />
        </div>

        <button className='close' onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default SearchPopup;
