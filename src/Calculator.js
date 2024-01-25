import React, { useState } from 'react';
import './Calculator.css'; // Make sure to create a corresponding CSS file

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = calculateExpression(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult(error.message);
    }
  };

  const calculateExpression = (expression) => {
    // Custom logic to calculate the expression
    const operators = expression.match(/[+\-*/]/g);
    const operands = expression.split(/[+\-*/]/).map(Number);
    if (operands.includes(NaN) || (expression.includes('0/0'))) {
        throw new Error('NaN');
      }
    if(expression.length===0)
    {
        throw new Error('Error'); 
    }

 
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '*' || operators[i] === '/') {
          const operand1 = operands[i];
          const operand2 = operands[i + 1];
    
          switch (operators[i]) {
            case '*':
              operands.splice(i, 2, operand1 * operand2);
              operators.splice(i, 1);
              i--; // Adjust the index as we removed two elements
              break;
            case '/':
              if (operand2 === 0) {
                throw new Error('Infinity');
              }
              operands.splice(i, 2, operand1 / operand2);
              operators.splice(i, 1);
              i--; // Adjust the index as we removed two elements
              break;
            default:
              break;
          }
        }
      }
    
      // Handle addition and subtraction
      let result = operands[0];
      for (let i = 0; i < operators.length; i++) {
        const operand = operands[i + 1];
        switch (operators[i]) {
          case '+':
            result += operand;
            break;
          case '-':
            result -= operand;
            break;
          default:
            throw new Error('Error');
        }
      }
    
      return result;
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result" style={{ color: 'grey' }}>
        {result}
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>

        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
