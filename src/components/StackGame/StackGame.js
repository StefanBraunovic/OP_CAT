import React, { useState } from "react";
import OPCatExplanation from "../OpCatCodeExplanation/OpCatCodeExplanation";
import styles from "./StackGame.module.css";

const StackGame = () => {
  const [stack, setStack] = useState([]);
  const [targetStack, setTargetStack] = useState([]);
  const [steps, setSteps] = useState(0);
  const [hint, setHint] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [concatenatedValue, setConcatenatedValue] = useState(null);

  const startGame = () => {
    setStack([]);
    setSteps(0);
    setHint("");
    setConcatenatedValue(null);
    setGameStarted(true);
  };

  const restartGame = () => {
    setStack([]);
    setTargetStack([]);
    setSteps(0);
    setHint("");
    setConcatenatedValue(null);
  };

  const displayStack = (stackToDisplay, targetStackToDisplay) => {
    return (
      <div className={styles.stackContainer}>
        <div className={styles.stackDisplay}>
          <h3>Current Stack:</h3>
          <div className={styles.stack}>
            {stackToDisplay.map((item, index) => (
              <div key={index} className={styles.stackItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.stackDisplay}>
          <h3>Target Stack:</h3>
          <div className={styles.stack}>
            {targetStackToDisplay.map((item, index) => (
              <div key={index} className={styles.stackItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const pushElement = () => {
    if (!gameStarted) {
      alert("Please start the game first.");
      return;
    }
    const element = prompt("Enter the element to push onto the stack:");
    setStack([...stack, parseInt(element)]);
    setSteps(steps + 1);
  };

  const concatenateStack = () => {
    if (!gameStarted) {
      alert("Please start the game first.");
      return;
    }
    if (stack.length < 2) {
      alert("Stack does not have enough elements to concatenate.");
      return;
    }
    const vch1 = stack[stack.length - 2];
    const vch2 = stack[stack.length - 1];
    const concatenatedElement = `${vch1}${vch2}`;
    const newStack = [...stack.slice(0, -2), parseInt(concatenatedElement)];
    setStack(newStack);
    setSteps(steps + 1);
    setConcatenatedValue(concatenatedElement);
  };

  const checkTargetStack = () => {
    if (!gameStarted) {
      alert("Please start the game first.");
      return;
    }
    if (JSON.stringify(stack) === JSON.stringify(targetStack)) {
      alert(
        `Congratulations! You achieved the target configuration in ${steps} steps.`
      );
    } else {
      alert("Current stack does not match the target configuration.");
    }
  };

  const showHint = () => {
    if (!gameStarted) {
      alert("Please start the game first.");
      return;
    }
    const missingElements = targetStack.filter((el) => !stack.includes(el));
    if (missingElements.length > 0) {
      setHint(`Hint: Add ${missingElements.join(", ")} to the stack.`);
    } else {
      setHint("Hint: Stack is in the correct configuration. Keep going!");
    }
  };

  const setConfigurationManually = () => {
    if (!gameStarted) {
      alert("Please start the game first.");
      return;
    }
    const configuration = prompt(
      "Enter the target stack configuration (comma-separated):"
    );
    const parsedConfig = configuration
      .split(",")
      .map((item) => parseInt(item.trim()));
    setTargetStack(parsedConfig);
  };

  return (
    <div>
      <div className={styles.gameContainer}>
        {!gameStarted && (
          <button onClick={startGame} className={styles.button}>
            Start Game
          </button>
        )}
        {!gameStarted && <OPCatExplanation />}
        {gameStarted && (
          <div>
            {displayStack(stack, targetStack)}
            {concatenatedValue && (
              <p>Concatenated Value: {concatenatedValue}</p>
            )}
            <div className={styles.buttonContainer}>
              <button onClick={pushElement}>Push</button>
              <button onClick={concatenateStack}>OP_CAT</button>
              <button onClick={checkTargetStack}>Check Target Stack</button>
              <button onClick={showHint}>Hint</button>
              <button onClick={setConfigurationManually}>
                Set Target Configuration
              </button>
              <button onClick={restartGame} className={styles.restartButton}>
                Restart Game
              </button>
            </div>
            {hint && <p>{hint}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default StackGame;
