import { useEffect, useState } from 'react';
import './App.css';

function App(props) {

  // const Test = (a) => {
  //   console.log(a);
  // }
  // const [test, setTest] = useState(() => Test('abc'))

  const [state, setState] = useState(props.counter)
  const [test, setTest] = useState(0)

  useEffect(() => {
    document.title = `Counter ${state}`
    console.log('change');
  }, [])


  const onChangeCounter = (e) => {
    setState(state => state + e)
  }

  const onResetCounter = () => {
    setState(props.counter)
  }

  const onRandomCounter = () => {
    const min = -100
    const max = 100
    setState(Math.floor(Math.random() * (max - min + 1)) + min)
  }

  return (
    <div className="app">
      <div className='counter'>{state}</div>
      <div className='controls'>
        <button onClick={() => onChangeCounter(1)}>INC</button>
        <button onClick={() => onChangeCounter(-1)}> DEC</button>
        <button onClick={() => onResetCounter()}>RESET</button>
        <button onClick={() => onRandomCounter()}>RANDOM</button>
        <button onClick={() => setTest(Math.random())}>CHANGE</button>

      </div >
    </div >

  );
}


export default App;
