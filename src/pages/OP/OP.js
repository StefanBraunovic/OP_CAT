// OP.js
import React from 'react';
import styles from './OP.module.css';
import Catsvg from './Catsvg';
import Catsvg2 from './Catsvg2';
import Catsvg3 from './Catsvg3';

const OP = () => {
  return (
    <div className={styles.container}>
    
      <div className={styles.twoByTwoGrid}>
      <div className={styles.gridRow}>
      <div className={styles.gridItem}><b>Succcess Flow</b>
      <ul><li><strong>OP_CAT Opcode:</strong> "OP_CAT" allows you to combine data in a Bitcoin script.</li>

  <li><strong>Data Inputs:</strong> Provide the data you want to combine.</li>
  <li><strong>Execution:</strong> "OP_CAT" combines the data.</li>
  <li><strong>Result:</strong> The combined data is placed on the script stack.</li>
  <li><strong>Script Evaluation:</strong> If the script evaluates successfully, the transaction is valid.</li>
  <li><strong>Output:</strong> The combined data can be used in future transactions.</li>
</ul>
</div>
      <div className={styles.gridItem}>
      <Catsvg />

      </div>
    </div>
    <div className={styles.gridRow}>
      <div className={styles.gridItem}>
      <Catsvg2 />
      </div>
      <div className={styles.gridItem}><b>Fail Flow 1</b>
      <ul>
  <li><strong>OP_CAT Opcode:</strong> Attempt to use the "OP_CAT" operation in a Bitcoin script.</li>
  <li><strong>Data Input:</strong> Provide only one piece of data to be combined.</li>
  <li><strong>Execution:</strong> When "OP_CAT" executes, it attempts to combine the provided data.</li>
  <li><strong>Insufficient Data:</strong> Since there's only one input item, "OP_CAT" cannot concatenate anything with it.</li>
  <li><strong>Data Combination Fail:</strong> The operation fails because there isn't enough data to perform concatenation.</li>
  <li><strong>Script Evaluation:</strong> The script evaluation will halt, and the transaction will be considered invalid.</li>
  <li><strong>Transaction Rejection:</strong> The transaction containing the invalid script will not be included in the Bitcoin blockchain.</li>
</ul>

</div>

    </div>
    <div className={styles.gridRow}>
      <div className={styles.gridItem}><p><strong>Fail Flow 2</strong></p>
<ul>
  <li><strong>OP_CAT Opcode:</strong> Attempt to use the "OP_CAT" operation in a Bitcoin script.</li>
  <li><strong>Data Input:</strong> Provide two pieces of data to be combined.</li>
  <li><strong>Execution:</strong> When "OP_CAT" executes, it attempts to concatenate the provided data.</li>
  <li><strong>Large Data Size:</strong> The two pieces of data provided for concatenation are substantial in size, potentially exceeding the maximum size allowed for a Bitcoin transaction.</li>
  <li><strong>Data Concatenation Fail:</strong> The operation fails because the resulting combined data exceeds the transaction size limits imposed by the Bitcoin network.</li>
  <li><strong>Script Evaluation:</strong> The script evaluation will halt, and the transaction will be considered invalid.</li>
  <li><strong>Transaction Rejection:</strong> The transaction containing the invalid script, with the excessively large combined data, will not be included in the Bitcoin blockchain.</li>
  <li><strong>Error Handling:</strong> Developers and users must be cautious when using "OP_CAT" to ensure that the combined data does not exceed the network's size limits. Proper data size management and validation are essential to prevent such failures.</li>
</ul>
      </div>
      <div className={styles.gridItem}>
      <Catsvg3 />
      </div>
    </div>
  </div>
  </div>
  );
};

export default OP;
