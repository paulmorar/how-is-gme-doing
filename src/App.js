import { useState, useEffect } from 'react';
import axios from "axios";
import rocket from './rocket.svg';
import './App.css';

const BASE_URL = "https://how-is-my-stock-doing.netlify.app/.netlify/functions/api";
const BASE_ROT_VAL = 45;

const percentStart = -90;
const percentEnd = 90;
const angleStart = -90;
const angleEnd = 90;

const App = () => {
  const [angleValue, setAngleValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      const result = await axios(BASE_URL)
      const percentageChange = result.data.quotes.price.regularMarketChangePercent || 0;
      const conversionValue = (Math.floor(percentageChange*-100) - percentStart)*(angleEnd-angleStart)/(percentEnd-percentStart) + angleStart;
      setAngleValue(conversionValue);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img style={{ transform: `rotate(${BASE_ROT_VAL + angleValue}deg)`}} src={rocket} className="App-pointer" alt="rocket" />
        <p>GME live moon ride!</p>
      </header>
    </div>
  );
}

export default App;
