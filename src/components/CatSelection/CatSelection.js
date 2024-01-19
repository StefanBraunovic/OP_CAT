// src/components/CatSelection/CatSelection.js
import React, { useState } from 'react';
import styles from './CatSelection.module.css'; // Import the CSS module
const CatSelection = ({ onSelectCat }) => {
  const [catNumber, setCatNumber] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    console.log('Input Value:', inputValue);

    // Check for numeric input
    if (!/^\d*$/.test(inputValue)) {
      setValidationError('Please enter a valid numeric value.');
    } else {
      setValidationError('');

      // Check for valid cat number range (0 to 3333)
      const numericValue = parseInt(inputValue, 10);
      if (numericValue >= 0 && numericValue <= 3333) {
        setCatNumber(inputValue);
      } else {
        setValidationError('Cat number must be between 0 and 3333.');
      }
    }
  };

  const handleSelect = () => {
    if (!validationError) {
      const catImage = `https://www.quantumcats.xyz/collection/cat${padCatNumber(catNumber)}.png`;
      onSelectCat(catImage);
    }
  };

  const padCatNumber = (number) => {
    return number.padStart(4, '0');
  };

  return (
    <div className={`${styles.messageBox} ${styles.hidden}`}> 
    <div className={`${styles.messageTitle}`}>SELECT CAT</div>
    <div className={`${styles.message}`}>
    <label>
        Cat Number:
        <input type="text" value={catNumber} onChange={handleInputChange} />
      </label>
      {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
    </div>
     
      
      <button onClick={handleSelect} disabled={validationError !== ''}>
        Select Cat
      </button>
      

    </div>
 
  );
};

export default CatSelection;
