import React from "react";
import styles from "./SmartContractWithCatComponent.module.css";

const OPCatExplanation = () => {
  // Mapping between code lines and their explanations
  const codeLines = [
    {
      code: "case OP_CAT:",
      explanation:
        "This line indicates the start of a case block for the OP_CAT operation. It's a part of a larger switch statement where different operations in the Bitcoin scripting language are handled.",
    },
    {
      code: "{",
      explanation:
        "This curly brace marks the beginning of the block of code that executes when the OP_CAT operation is encountered.",
    },
    {
      code: "if (stack.size() < 2):",
      explanation:
        "This line checks if the size of the stack is less than 2. The stack is a data structure used in Bitcoin scripting, and it contains elements that are operated upon. In this context, stack.size() returns the number of elements in the stack.",
    },
    {
      code: "return set_error(serror, SCRIPT_ERR_INVALID_STACK_OPERATION);",
      explanation:
        "If the size of the stack is less than 2, this line returns an error indicating an invalid stack operation. The set_error function is called with an error message and an error code (serror and SCRIPT_ERR_INVALID_STACK_OPERATION, respectively).",
    },
    {
      code: "valtype& vch1 = stacktop(-2);",
      explanation:
        "This line retrieves a reference to the second-to-top element (vch1) from the stack. stacktop(-2) is a function call that accesses the element at the specified position in the stack.",
    },
    {
      code: "valtype& vch2 = stacktop(-1);",
      explanation:
        "Similarly, this line retrieves a reference to the top element (vch2) from the stack.",
    },
    {
      code: "if (vch1.size() + vch2.size() > MAX_SCRIPT_ELEMENT_SIZE):",
      explanation:
        "Here, the sizes of vch1 and vch2 are compared to a maximum script element size (MAX_SCRIPT_ELEMENT_SIZE). If the sum of their sizes exceeds this maximum size, it indicates an error due to the operation potentially creating a script element larger than allowed.",
    },
    {
      code: "return set_error(serror, SCRIPT_ERR_INVALID_STACK_OPERATION);",
      explanation:
        "Similar to line 4, if the size of the concatenated element exceeds the maximum allowed size, an error is returned.",
    },
    {
      code: "vch1.insert(vch1.end(), vch2.begin(), vch2.end());",
      explanation:
        "This line concatenates the elements vch1 and vch2. It inserts the elements of vch2 at the end of vch1. In Bitcoin scripting, vch1 and vch2 represent variable-length data chunks (vch).",
    },
    {
      code: "stack.pop_back();",
      explanation:
        "Finally, this line removes the top element from the stack (vch2), as it has been concatenated with vch1.",
    },
    {
      code: "}",
      explanation:
        "This curly brace marks the end of the block of code for the OP_CAT operation.",
    },
    {
      code: "break;",
      explanation:
        "This line breaks out of the switch statement, indicating the end of the OP_CAT case.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explanation of OP_CAT Operation</h2>
      <div className={styles.codeContainer}>
        {codeLines.map(({ code, explanation }, index) => (
          <div key={index} className={styles.codeLine}>
            <div className={styles.code}>
              <code>{code}</code>
            </div>
            <div className={styles.explanation}>{explanation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OPCatExplanation;
