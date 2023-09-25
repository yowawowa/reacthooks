import { useEffect, useState } from 'react';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';

export default function App(props) {

  const [state, setState] = useState(props.counter)
  const [test, setTest] = useState(0)

  // const Test = (a) => {
  //   console.log(a);
  // }
  // const [test, setTest] = useState(() => Test('abc'))

  useEffect(() => {
    document.title = `Counter ${state}`
    console.log('change');
  }, [state])

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
              Counter
            </Typography>
            <Typography variant="h5" component="div">
              {state}
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button onClick={() => onChangeCounter(1)}>INC</Button>
              <Button onClick={() => onChangeCounter(-1)}>DEC</Button>
              <Button onClick={() => onResetCounter()}>RESET</Button>
              <Button onClick={() => onRandomCounter()}>RANDOM</Button>
              <Button onClick={() => setTest(Math.random())}>TEST</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
}