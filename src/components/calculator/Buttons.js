import classes from "./Buttons.module.css";
import Button from "./Button";

const buttonValues = ['/','7','8','9','*','4','5','6','-','1','2','3','+','0','.'];


const Buttons = (props) => {
  return (
    <div className={classes.buttons}>
      <Button>mrc</Button>
      <Button>m-</Button>
      <Button>m+</Button>
      {buttonValues.map((value) => (
        <Button onClick={props.addInput}>{value}</Button>
      ))}
      <Button onClick={props.clearInput}>C</Button>
      <Button onClick={props.evalInput}>=</Button>
    </div>
  );
};

export default Buttons;
