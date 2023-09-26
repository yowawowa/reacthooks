import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useCallback, useEffect, useState } from 'react';




export default function CallbackTut() {
    const [num, setNum] = useState([1, 2])
    const [color, setColor] = useState(false)

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const stylez = { color: color ? [randomColor] : 'black' }

    const getSomeResult = useCallback(() => {
        console.log('Fetching');
        return [...num]
    }, [num])

    const List = ({ getSomeResult }) => {
        const [list, setList] = useState([])

        useEffect(() => {
            setList(getSomeResult())
        }, [getSomeResult])


        return (list.map((i, id) => <li key={id}>{i}</li>))
    }

    return (
        <React.Fragment>
            <Container className='card' maxWidth='sm'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography color={stylez} gutterBottom variant='h4'>
                            List
                        </Typography>
                        <ul style={stylez}>
                            <List getSomeResult={getSomeResult} />
                        </ul>
                    </CardContent>
                    <CardActions>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button onClick={e => setNum([...num, num[num.length - 1] + 1])}>ADD</Button>
                            <Button onClick={() => setColor(!color)}>COLOR</Button>
                        </ButtonGroup>
                    </CardActions>
                </Card>
            </Container>

        </React.Fragment >
    )
}