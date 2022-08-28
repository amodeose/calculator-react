import classes from "./Log.module.css";

const Log = props => {
    return <div className={classes.log}>
        <h3>History:</h3>
        <ul>
            {props.history.map(item => <li>{item}</li>)}
        </ul>
    </div>
};

export default Log;