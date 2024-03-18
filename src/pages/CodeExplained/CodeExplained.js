// CodeExplained.js
import React from 'react';
import styles from './CodeExplained.module.css';

const CodeExplained = () => {
  return (
    <div className={styles.container}>
         <a href="https://docs.google.com/presentation/d/1-B9dhUxZsf1Vb2Ra3AnrtC7SBxTrjyBahOZUibac-ps/edit#slide=id.g2c3ae4afcd9_0_511" 
         target="_blank" 
         rel="noopener noreferrer" 
         className={styles.button}>
        View Presentation
      </a>
      <h1 className={styles.title}>The Stack</h1>
      <div className={styles.description}>
        <p>
          OP_CAT is a so-called OPCODE that is used in stack based computing. A stack is literally a stack of digital items. These items can be functions or any kind of values, such as numbers and letters or more complex structures like lists. The computer will then process this stack from top to bottom until there are no more items on the stack.
        </p>
        <p>
        <b>{'if (stack.size() < 2)'}</b>
        </p>
          <p>The first line checks if the stack contains less than two items. It would be quite silly if we tried to combine less than two items, right?
        </p>
        <p>
        <b>`return set_error(serror, SCRIPT_ERR_INVALID_STACK_OPERATION);`</b>
          </p>
          <p>The second line ends the execution of the code and returns an error, IF the check of the stack has less than two items.
        </p>
        <p>
        <b>{'valtype& vch1 = stacktop(-2);'}</b>
        </p>
          <p>Now we’re taking the top most item and assign it to a variable that we will call `vch1`. Pretty simple.
        </p>
        <p>
        <b>  {'valtype& vch2 = stacktop(-1);'}</b>
          </p>
          <p> We do the same exercise again, but this time assign the second top most item to the variable `vch2`. Can you guess what’s next?
        </p>
        <p>
        <b> {'if (vch1.size() + vch2.size() > MAX_SCRIPT_ELEMENT_SIZE)'}</b>
         </p>
          <p>WRONG! We’re not yet concatenating the two variables. First we have to make sure that the new item we get from combining the two isn’t larger than what’s allowed. Otherwise we would most certainly get into trouble! And guess what happens if the new item would be greater than the script limit?
        </p>
        <p>
        <b>  {'return set_error(serror, SCRIPT_ERR_INVALID_STACK_OPERATION);'}</b>
          </p>
          <p>RIGHT! Okay, that was easy, the program would exit and throw an error. In fact, that would be the same error as in the first check, telling us that we tried to do an invalid operation.
        </p>
        <p>
        <b> {'vch1.insert(vch1.end(), vch2.begin(), vch2.end());'}</b>
         </p>
          <p> Here we go! Finally, we can concatenate the two values into a single item in a way that looks a bit complicated; but who cares. Hurray! We did it… almost.
        </p>
        <p>
        <b>  {'stack.pop_back();'}</b>
        </p>
          <p>Now that we are done with the script that we ran, we can remove the concatenated item from the stack, so that new scripts can be executed.
        </p>
        <p>
          Congratulations! Now you know every detail about the most powerful function that bitcoin ever had.
        </p>
      </div>
    </div>
  );
};

export default CodeExplained;
