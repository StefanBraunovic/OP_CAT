import React from 'react';
import styles from './ArticleOverview.module.css'; 
import articleImg1 from '../../assets/articles/2.png';
import articleImg2 from '../../assets/articles/3.png';
import articleImg3 from '../../assets/articles/4.png';
import { Link } from 'react-router-dom'; 
const ArticleComponent = () => {
  return (
    <div className={styles.articleContainer}>

      <div className={styles.articleItem}>
        <img src={articleImg1} className={styles.articleImg} alt=" 1" />
        <h2>OP CAT Flow</h2>
        <p>Bitcoin's scripting language provides a vast toolkit for creating customized transactions and unlocking innovative capabilities. Among the many opcodes available, "OP_CAT" stands out as a versatile operation, allowing for data concatenation within Bitcoin scripts.</p>
        <Link to="/OP">Read more...</Link>
      </div>

  
      <div className={styles.articleItem}>
        <img src={articleImg2} alt=" 2"  className={styles.articleImg} />
        <h2>Satoshi's favorite pet.</h2>
        <p>You have probably seen everyone talking about cats, or OP_CAT, in the bitcoin scene. But what is it and why should we, as users, even care about OP_CAT? OP_CAT was a simple but very powerful function in bitcoin’s scripting language which was removed because it had some unintentional use cases that could have caused issues for the network. However, removing this function also drastically limited bitcoin’s scripting capabilities, making it difficult to build more complex use cases on bitcoin.</p>
        <Link to="/ARTICLE">Read more...</Link>
      </div>

      
      <div className={styles.articleItem}>
        <img src={articleImg3} alt=" 3"  className={styles.articleImg} />
        <h2>Smart Contract with OP_CAT</h2>
        <p>This Bitcoin smart contract involves the use of the OP_CAT operation, which concatenates secret parts from both Alice and Bob. The contract aims to create a secure and verifiable transaction by concatenating these secret parts and applying additional operations.

</p>
        <Link to="/OP_CAT_SMART">Read more...</Link>
      </div>
    </div>
  );
};

export default ArticleComponent;
