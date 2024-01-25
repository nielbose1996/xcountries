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
      setResult(error);
    }
  };

  const calculateExpression = (expression) => {
    // Custom logic to calculate the expression
    const operators = expression.match(/[+\-*/]/g);
    const operands = expression.split(/[+\-*/]/).map(Number);

    let result = operands[0];

    operators.forEach((operator, index) => {
      const operand = operands[index + 1];
      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          if (operand === 0) throw new Error('Infinity');
          result /= operand;
          break;
        default:
          throw new Error('Error');
      }
    });

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
