// WalkingCat.js
import React from 'react';
import styles from './WalkingCat.module.css';

const WalkingCat = () => {
  return (
    <div className={styles.main}>
    <div className={styles.marco}>
      <div className={styles.cielo}></div>
      <div className={styles.luna}></div>
      <div className={styles.gato}></div>
      <div className={styles.muro}></div>
      <div className={styles.edificios}></div>
      <div className={`${styles.matrixTextContainer} ${styles.overlay}}`}>
        <pre className={styles.matrixText}>
          {`case OP_CAT:
{
    if (stack.size() < 2)
        return set_error(serror, SCRIPT_ERR_INVALID_STACK_OPERATION);
    valtype& vch1 = stacktop(-2);
    valtype& vch2 = stacktop(-1);
    if (vch1.size() + vch2.size() > MAX_SCRIPT_ELEMENT_SIZE)
        return set_error(serror, SCRIPT_ERR_INVALID_STACK_OPERATION);
    vch1.insert(vch1.end(), vch2.begin(), vch2.end());
    stack.pop_back();
}
break;`}
        </pre>
      </div>
      <img className={styles.gatoImage} src="/gatito_pushui.svg" alt="Cat" />
    </div></div>
  );
};

export default WalkingCat;
