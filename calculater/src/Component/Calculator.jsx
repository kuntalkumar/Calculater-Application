import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
        setInput(String(eval(input))); // Convert the result back to a string
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '←') { // Handle backspace button
      setInput(input.slice(0, -1)); // Remove the last character
    } else if (value === '+/-') { // Handle positive/negative toggle button
      setInput(input.charAt(0) === '-' ? input.slice(1) : `-${input}`);
    } else if (value === '%') { // Handle percentage button
      setInput(`${parseFloat(input) / 100}`);
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    'C', '←', '%', '+',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '+/-', '0', '.', '=',
  ];

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleButtonClick('=');
    }
  };

  return (
    
    <div className="calculator">
      <h1 style={{color:"white"}}>Calculator Application</h1>
      <br />
      <div className="display">
        <input
          type="text"
          value={input}
          className="inputName"
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      </div>
      <input  className="inputName"
      
 value={result} style={{textAlign:"end"}}/>
    
      <br /><br />
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            className="btn"
            key={index}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
