// SmartContractWithCatComponent.jsx

import React from 'react';
import styles from './SmartContractWithCatComponent.module.css';
import githubLogo from '../../assets/images/github.svg'; // Replace with the correct path or URL for your GitHub logo

const SmartContractWithCatComponent = () => {
  return (
    <div className={styles.container}>
           <a href="https://github.com/StefanBraunovic/OP_CAT_SMART_CODE" target="_blank" className={styles.referenceLink} rel="noreferrer">
        <img src={githubLogo} alt="GitHub Logo" />
        Reference: OP_CAT_SMART_CODE GitHub Repository
      </a>
      <h1 className={styles.title}>Bitcoin Smart Contract with OP_CAT</h1>
      <div className={styles.description}>
        <p>
          This Bitcoin smart contract involves the use of the OP_CAT operation, which concatenates secret parts from both Alice and Bob.
          The contract aims to create a secure and verifiable transaction by concatenating these secret parts and applying additional operations.
        </p>
        <h2>Contract Logic</h2>
        <ol>
          <li>
            <strong>Secret Parts:</strong> Alice and Bob each have a secret part (`secret_part_alice` and `secret_part_bob`).
          </li>
          <li>
            <strong>Concatenation (OP_CAT):</strong> The script uses OP_CAT to concatenate the secret parts into a single data element.
          </li>
          <li>
            <strong>Hashing:</strong> The result of concatenation is then hashed using SHA-256.
          </li>
          <li>
            <strong>Verification:</strong> The hashed result is compared with a predetermined hash value.
          </li>
          <li>
            <strong>Signature Verification:</strong> If the hashes match, the script proceeds to signature verification using `OP_CHECKSIG`.
          </li>
        </ol>
        <h2>Implementation</h2>
        <p>
          The Python script provided constructs the smart contract script with OP_CAT and outputs its hex representation. To use it:
        </p>
        <ol>
          <li>Set the secret parts for Alice and Bob (`secret_part_alice` and `secret_part_bob`).</li>
          <li>Set the predetermined hash value (`predetermined_hash`).</li>
          <li>Run the script on a Bitcoin regtest network.</li>
        </ol>
        <p>
          Feel free to customize the secret parts and hash for your specific use case.
        </p>
      </div>
 
    </div>
  );
};

export default SmartContractWithCatComponent;
