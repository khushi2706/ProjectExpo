import styled from 'styled-components'
import {Btn} from './Btn'

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <Title>Game Over</Title>
            <Points>You did {pts} out of 5!</Points>
            <Btn onClick={refreshPage} style={{height:"6.5vh"}}>Retry</Btn>
        </>
    )
}

export default GameOver