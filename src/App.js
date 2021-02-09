import { useState, useEffect } from 'react';
import rocket from './rocket.svg';
import './App.css';

const BASE_URL = "";
const BASE_ROT_VAL = 45;
const TICKER = "GME";

const getRandNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const App = () => {
  const [angleValue, setAngleValue] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     const result = await axios(`${BASE_URL}&symbols=${TICKER}`)
  //     const percentageChange = result.quoteResponse.result.regularMarketChangePercent || 0;
  //     console.log({percentageChange, result})
  //     setAngleValue(getRandNumber(-90, 90))
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

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
