import { useState } from "react";
import classes from "./Calculator.module.css";
import Screen from "./Screen";
import Button from "./Button";

const buttonValues = ['/','7','8','9','*','4','5','6','-','1','2','3','+','0','.']

const Calculator = (props) => {

    const [input, setInput] = useState('0');

    const handleInput = (event) => {
        const newInput = event.target.innerText;
        setInput(newInput);
    } 

  return (
    <div className={classes.body}>
      <Screen>{input}</Screen>
      <div className={classes.buttons}>
        <Button>mrc</Button>
        <Button>m-</Button>
        <Button>m+</Button>
        {buttonValues.map((value) => <Button onClick={handleInput}>{value}</Button>)}
        <Button>C</Button>
        <Button>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
