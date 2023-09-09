import { useState } from 'react';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInputNumber(parseFloat(e.target.value));
  };

  const handleSliderChange = (e) => {
    setSliderValue(parseFloat(e.target.value));
  };

  const calculateResult = () => {
    const newResult = inputNumber * 6 * (sliderValue / 100);
    setResult(newResult);
  };

  return (
    <>
      <div className="card">
        <div>
          <label>Input number: </label>
          <input
            type="number"
            step="0.1"
            value={inputNumber}
            onChange={(e) => {
              handleInputChange(e);
              calculateResult();
            }}
          />
        </div>

        <div>
          <label>Slider: </label>
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={sliderValue}
            onChange={(e) => {
              handleSliderChange(e);
              calculateResult();
            }}
          />
          <span>{sliderValue}</span>
        </div>
        
        <div>
          <p>Result: {result}</p>
        </div>
      </div>
    </>
  );
}

export default App;
