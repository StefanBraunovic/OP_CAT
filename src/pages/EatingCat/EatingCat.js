// src/App.js
import React, { useState } from 'react';
import Cat from '../../components/Cat/Cat';
import Food from '../../components/Food/Food';
import styles from './EatingCat.module.css'; // Import the CSS module
import CatSelection from '../../components/CatSelection/CatSelection';


const EatingCat = () => {
  const [eating, setEating] = useState(false);
  const [foodEaten, setFoodEaten] = useState(false);
  const [satisfied, setSatisfied] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedCat, setSelectedCat] = useState(null);

  const handleEat = () => {
    setEating(true);

    // Move the cat towards the food
    setTimeout(() => {
      setPosition({ x: 200, y: 200 });
    }, 500);

    // Start the disappearing animation for the food
    setTimeout(() => {
      setFoodEaten(true);
    }, 1000);

    // Set satisfied after a delay
    setTimeout(() => {
      setSatisfied(true);
    }, 1500);
  };

  const resetGame = () => {
    // Reset the game state
    setEating(false);
    setFoodEaten(false);
    setPosition({ x: 0, y: 0 });
    setSatisfied(false);
    setSelectedCat(null);
  };

  const handleSelectCat = (catImage) => {
    setSelectedCat(catImage);
  };
console.log(selectedCat);
  return (
    <div className={styles['app-container']}>
      {!selectedCat ? (
        <CatSelection onSelectCat={handleSelectCat} />
      ) : (
        <>
          {satisfied && (
            <div className={styles['centered-text']}>
              <img width={80} height={80}  src={selectedCat} alt='quantumCats'/>
              <p>
The quantum cat is happy with the food! !</p>
              <button onClick={resetGame}>Play Again</button>
            </div>
          )}
        <div style={{marginTop:'20px'}}>
          {!satisfied && <Cat eating={eating} position={position} catImage={selectedCat} />}
        {!eating && !foodEaten && !satisfied && (
            <button onClick={handleEat}>{satisfied ? 'Play Again' : 'Eat'}</button>
          )}
        </div>
          {!foodEaten && <Food eaten={foodEaten} onRest={resetGame} />}
        </>
      )}
    </div>
  );
};

export default EatingCat;
