// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let result;
  // new state vars
  // const [image, setNewImage] = useState(diceImages[0]);
  // const [image2, setNewImage2] = useState(diceImages[1]);
  // "need to call the useState hook and pass in the initial value you want to assign to that variable"
  const [result, getResult] = useState(0);

  const [diceHand, getDicehand] = useState();

  const addD = (dNum) => {

    // getDicehand()

  }

  const rollDice = () => {
    // gen rando num
    var randomNum1 = Math.ceil(Math.random() * 6);
    // var randomNum2 = Math.floor(Math.random() * 6);

    // setNewImage(diceImages[randomNum1]);
    // setNewImage2(diceImages[randomNum2]);
    getResult(randomNum1);
  }

  const clearDice = () => {

  }


  return (
    <div className="app">
      <h1>Dice Roller</h1>

      <div className="dicebag container">
        <button className="button" onClick={addD(4)}>+d4</button>
        <button className="button" onClick={addD(6)}>+d6</button>
      </div>

      <div className="dicehand container">{diceHand}</div>

      <button className="button" onClick={rollDice}>ROLL</button>

      <div className="result container">{result}</div>

      <button className="button" onClick={clearDice}>Clear</button>
    </div>
  );
}

export default App;
