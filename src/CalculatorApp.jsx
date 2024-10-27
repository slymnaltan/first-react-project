import React, { useState } from 'react';
import './styles/Calculator.css';
import { evaluate } from 'mathjs';

function CalculatorApp() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-app">
      <h1 className='title'>Calculator</h1>
      <div className="calculator">
        <input  type="text" value={input} readOnly />
        <div className="buttons">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleEqual}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorApp;
