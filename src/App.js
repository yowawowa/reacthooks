import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import './App.css';
import './components/MemoTut'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { CssBaseline } from '@mui/material';
import MemoTut from './components/MemoTut';

export default function App(props) {
  const [state, setState] = useState(props.counter)
  const [test, setTest] = useState(0)

  // useMemo
  // const checkLog = check()
  const [color, setColor] = useState(false)
  const checkLog = useMemo(() => check(), [color]) // logging of 'check' happens only by clicking 'Counter' span. if used without memo (i.e. above), loggin happens on any action

  function check() {
    console.log('check');
  }

  // useEffect
  useEffect(() => {
    document.title = `Counter ${state}`
    console.log('change');
  }, [state])

  // useRef
  const ref = useRef(null)
  const handleFocus = () => {
    console.log(ref.current.focus());
    ref.current.style.color = 'blue'
  }

  // const Test = (a) => {
  //   console.log(a);
  // }
  // const [test, setTest] = useState(() => Test('abc'))

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
    <React.Fragment>
      <CssBaseline />
      <Container className='card' maxWidth='sm'>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <span style={{ color: color ? 'green' : 'red' }} onClick={() => setColor(!color)}>Counter</span>
            </Typography>
            <Typography variant="h5" component="div">
              {state}
            </Typography>
            <TextField inputRef={ref} id="outlined-basic" label="Outlined" variant="outlined" />
          </CardContent>
          <CardActions>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button onClick={() => onChangeCounter(1)}>INC</Button>
              <Button onClick={() => onChangeCounter(-1)}>DEC</Button>
              <Button onClick={() => onResetCounter()}>RESET</Button>
              <Button onClick={() => onRandomCounter()}>RANDOM</Button>-
              <Button onClick={handleFocus}>FOCUS</Button>
              <Button disabled onClick={() => setTest(Math.random())}>TEST</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Container>
      <MemoTut />
    </React.Fragment >


  );
}