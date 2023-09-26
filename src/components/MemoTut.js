import React, { useEffect, useState, useMemo } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { CssBaseline } from '@mui/material';


export default function MemoTut() {

    const [num, setNum] = useState(24)
    const [color, setColor] = useState(false)

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const stylez = useMemo(e => ({ color: color ? [randomColor] : 'black' }), [color])

    const onChangeCounter = (e) => {
        setNum(num => num + e)
    }

    const complexComputed = (e) => {
        console.log('computing');
        let i = 0
        while (i < 1000000000) i++
        return e * 2
    }

    const compute = useMemo(e => complexComputed(num), [num])

    useEffect(e => console.log('Styles changed'), [stylez])

    return (
        <React.Fragment>
            <Container className='card' maxWidth='sm'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography color={stylez} gutterBottom variant='h4'>
                            expensive calculations: {compute}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {num}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button onClick={() => onChangeCounter(1)}>INC</Button>
                            <Button onClick={() => onChangeCounter(-1)}>DEC</Button>
                            <Button onClick={() => setColor(!color)}>CHANGE COLOR</Button>
                        </ButtonGroup>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    )
}