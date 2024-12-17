import React, { useState } from 'react';
import './calci.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    if (Number(num2) === 0) {
      setResult('Cannot divide by zero');
      return;
    }
    setResult(Number(num1) / Number(num2));
  };

  const clear = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div className="body"> <div className="calculator">
    <h1>Calculator-Component</h1>
    
    <div className="input-container">
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
    </div>

    <div className="button-container">
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
    </div>

    <div className="clear-button">
      <button onClick={clear}>Clear</button>
    </div>
    <h2>Result:</h2>
    <div className="result-display">
     {result !== '' ? result : ''}
    </div>
  </div></div>
   
  );
};

export default Calculator;