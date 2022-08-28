import { useState } from "react";
import classes from "./Calculator.module.css";
import Screen from "./Screen";
import Button from "../components/UI/Button";

const Calculator = (props) => {

    const [input, setInput] = useState('0');

    const handleClick = (event) => {
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
        <Button>/</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>*</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button>C</Button>
        <Button>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
