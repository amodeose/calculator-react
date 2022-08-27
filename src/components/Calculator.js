import { useState } from 'react';
import classes from './Calculator.module.css';
import Screen from './Screen';

const Calculator = props =>  {

    return (
        <div className={classes.body}>
            <Screen />
        </div>
    )

};

export default Calculator;