import { useState } from "react";
import classes from "./Calculator.module.css";
import Screen from "./Screen";
import Buttons from "./Buttons";

const Calculator = (props) => {
  const [input, setInput] = useState("");

  const addInput = (event) => {
    const newInput = event.target.innerText;
    setInput((prev) => (prev += newInput));
  };

  const clearInput = () => {
    setInput("");
  };

  const evalInput = () => {
    const item = input + "=" + eval(input);
    props.addToHistory(item);
    setInput((prev) => eval(prev));
  };

  return (
    <div className={classes.body}>
      <Screen>{input}</Screen>
      <Buttons
        addInput={addInput}
        clearInput={clearInput}
        evalInput={evalInput}
      />
    </div>
  );
};

export default Calculator;
