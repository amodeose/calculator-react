import { Fragment } from 'react';
import Calculator from "./components/calculator/Calculator";
import Log from "./components/log/Log";
import { useState } from 'react';

function App() {

  const [history, setHistory] = useState([]);

  const addToHistory = item => {
    setHistory(prev => [...prev, item]);
  }

  return (
    <Fragment>
      <Calculator addToHistory={addToHistory}/>
      <Log history={history}/>
    </Fragment>
  );
}

export default App;
