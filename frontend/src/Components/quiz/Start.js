import React from 'react'
import styled, { css } from 'styled-components/macro'
import Btn from './Btn';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <Btn onClick={startQuiz} style={{height:"6.5vh"}} css={btnCSS}>Begin</Btn>
        </Intro>
    )
}

export default Start