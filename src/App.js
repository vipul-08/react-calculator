import React, { useState } from 'react';
import './App.css';
import Button from "./Button";

function App() {

    const [resultText, changeResultText] = useState("");
    const evaluateExpression = () => {
        return eval(resultText);
    };
    const equalClick = () => {
        if (!['+', '*', '/', '-'].includes(resultText[resultText.length - 1])) {
            changeResultText(evaluateExpression());
        }
    };
    const textButtonClick = (e) => {
        if (!(['+', '*', '/', '-'].includes(e.target.innerHTML) && ['+', '*', '/', '-'].includes(resultText[resultText.length - 1]))) {
            changeResultText(resultText+e.target.innerHTML);
        }
    };
    const clearButtonClick = () => {
        changeResultText("");
    };
  return (
    <div className="App">
        <h1>Calculator</h1>
        <div className="result-text">
            {resultText}
        </div>
        <div className="button-container">
            <div className="column">
                <Button text="AC" clickFunction={clearButtonClick} />
                {[1,2,3].map((item) => <Button text={item} clickFunction={textButtonClick} /> )}
            </div>
            <div className="column">
                {[4,5,6,7].map((item) => <Button text={item} clickFunction={textButtonClick} /> )}
            </div>
            <div className="column">
                {[8,9,0].map((item) => <Button text={item} clickFunction={textButtonClick} /> )}
                <Button text="=" clickFunction={equalClick} />
            </div>
            <div className="column">
                <Button text="+" clickFunction={textButtonClick} />
                <Button text="-" clickFunction={textButtonClick} />
                <Button text="*" clickFunction={textButtonClick} />
                <Button text="/" clickFunction={textButtonClick} />
            </div>
        </div>
    </div>
  );
}

export default App;
