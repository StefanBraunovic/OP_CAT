// CatComponent.js
import React from 'react';
import styles from './OpCatComponent.module.css'

const OpCatComponent = () => {
  const code = "\n7faa4ae40eda9b26ed47e2c4a28924e06550e472\n_DEAD_\nOP_CAT\nOP_HASH160\nOP_EQUALVERIFY";
  return (
    <>
    {/* Step 1*/}
    <div className={styles.container}>
      <div className={styles.column}>
        <img
          src={process.env.PUBLIC_URL + '/step1.png'} // Replace with the path to your animated GIF
          alt="Animated GIF"
          className={styles.imgres} />
      </div>
      <div className={styles.column}>
        <h1 className={styles.header}>Step 1: Setting Up</h1>
        <p className={styles.text}>Setup the debugger with the code on the left</p>
      </div>
    </div>
    {/* Step 2*/}
    <div className={styles.container}>
      <div className={styles.column}>
        <img
          src={process.env.PUBLIC_URL + '/step2.gif'} // Replace with the path to your animated GIF
          alt="Animated GIF"
          className={styles.imgres} />
      </div>
      <div className={styles.column}>
        <h1 className={styles.header}>Step 2: Pushing items to the stack</h1>
        <p className={styles.text}>Push <mark>7faa4ae40eda9b26ed47e2c4a28924e06550e472</mark> in the stack</p>
      </div>
    </div>
    {/* Step 3*/}
    <div className={styles.container}>
      <div className={styles.column}>
        <img
          src={process.env.PUBLIC_URL + '/step3.gif'} // Replace with the path to your animated GIF
          alt="Animated GIF"
          className={styles.imgres} />
      </div>
      <div className={styles.column}>
      <h1 className={styles.header}>Step 3: Pushing more items</h1>
      <p className={styles.text}>Push <mark>_DEAD_</mark> to the stack (in byte representation) </p>      
    </div>
    </div>
    {/* Step 4*/}
    <div className={styles.container}>
      <div className={styles.column}>
        <img
          src={process.env.PUBLIC_URL + '/step4.gif'} // Replace with the path to your animated GIF
          alt="Animated GIF"
          className={styles.imgres} />
      </div>
      <div className={styles.column}>
      <h1 className={styles.header}>Step 4: Pushing last item</h1>
      <p className={styles.text}>Push <mark>_CAT_</mark> to the stack (also bytes)</p>
      </div>
    </div>
    {/* Step 5*/}
    <div className={styles.container}>
      <div className={styles.column}>
        <img
          src={process.env.PUBLIC_URL + '/step5.gif'} // Replace with the path to your animated GIF
          alt="Animated GIF"
          className={styles.imgres} />
      </div>
      <div className={styles.column}>
      <h1 className={styles.header}>Step 5: Executing OP_CAT</h1>
      <p className={styles.text}>Execute <mark>OP_CAT</mark> concatenating the two byte strings, popping them from the stack and pushing the concatenating bytes </p>
      </div>
    </div>
    {/* Step 6*/}
    <div className={styles.container}>
      <div className={styles.column}>
        <img
          src={process.env.PUBLIC_URL + '/step6.gif'} // Replace with the path to your animated GIF
          alt="Animated GIF"
          className={styles.imgres} />
      </div>
      <div className={styles.column}>
        <h1 className={styles.header}>Step 6: Execute OP_HASH160</h1>
        <p className={styles.text}>
        Execute <mark>OP_HASH160</mark> to hash the top item on the stack with the HASH160 algorithm</p>
      </div>
    </div>
    {/* Step 7*/}
    <div className={styles.container}>
      <div className={styles.column}>
        <img
          src={process.env.PUBLIC_URL + '/step7.gif'} // Replace with the path to your animated GIF
          alt="Animated GIF"
          className={styles.imgres} />
      </div>
      <div className={styles.column}>
        <h1 className={styles.header}>Step 7: Execute OP_EQUALVERIFY</h1>
        <p className={styles.text}>
          Execute <mark>OP_HASH160</mark> to ensure <mark>7faa4ae40eda9b26ed47e2c4a28924e06550e472</mark> and the newly calculated <mark>hash160</mark> are equal
        </p>
      </div>
    </div>
    </>
  );
};

export default OpCatComponent;
