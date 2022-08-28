import { useState } from "react";
import classes from "./Calculator.module.css";
import Screen from "./Screen";
import Button from "./Button";

const buttonValues = ['/','7','8','9','*','4','5','6','-','1','2','3','+','0','.'];

const Calculator = (props) => {
  const [input, setInput] = useState("");

  const addInput = (event) => {
    const newInput = event.target.innerText;
    setInput(prev => prev += newInput);
  };

  const clearInput = () => {
    setInput('');
  }

  const evalInput = () => {
    setInput(prev => eval(prev));
  }

  return (
    <div className={classes.body}>
      <Screen>{input}</Screen>
      <div className={classes.buttons}>
        <Button>mrc</Button>
        <Button>m-</Button>
        <Button>m+</Button>
        {buttonValues.map((value) => (
          <Button onClick={addInput}>{value}</Button>
        ))}
        <Button onClick={clearInput}>C</Button>
        <Button onClick={evalInput}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
