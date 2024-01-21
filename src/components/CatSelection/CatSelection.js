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
    <div className={styles.catContainer}>
    <div className={`${styles.catHead} ${styles.catColor}`}>
      <div className={`${styles.catLeftEye} ${styles.catEye}`}>
        <div className={`${styles.leftEyelid} ${styles.eyelid} ${styles.catColor}`}></div>
        <div className={styles.pupil}></div>
      </div>
      <div className={`${styles.catRightEye} ${styles.catEye}`}>
        <div className={`${styles.rightEyelid} ${styles.eyelid} ${styles.catColor}`}></div>
        <div className={styles.pupil}></div>
      </div>
    </div>
    <div className={`${styles.catLeftEar} ${styles.catEar} ${styles.catColor}`}>
      <div className={styles.catLeftInsideEar}></div>
    </div>
    <div className={`${styles.catRightEar} ${styles.catEar} ${styles.catColor}`}>
      <div className={styles.catRightInsideEar}></div>
    </div>
    <div className={styles.catHair}></div>
    <div className={`${styles.catBody} ${styles.catColor}`}>
      <div className={`${styles.catFoot} ${styles.leftFoot} ${styles.catColor}`}></div>
      <div className={`${styles.catFoot} ${styles.rightFoot} ${styles.catColor}`}></div>
    </div>
    <div className={styles.catTail}>
      {Array.from({ length: 16 }, (_, index) => (
        <span key={index} className={styles.catColor}></span>
      ))}
    </div>
    <div className={`${styles.messageBox} ${styles.hidden}`}> 
    <div className={`${styles.messageTitle}`}>FEED_CAT</div>
    <p className={`${styles.message}`}>Open the tunacan, human!</p>
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
      
  </div>
   
 
  );
};

export default CatSelection;
