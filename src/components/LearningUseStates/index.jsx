import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import LearningUseEffect from './LearningUseEffect'
import DropDown from './DropDown'

export default function StateManagement() {

    let theCounter = 0
    const [counter, setCounter] = useState(theCounter) // [0, fn]
    // Way 1
    // const increase = () => {
    //     setCounter(counter + 1);
    // };
    // const decrease = () => {
    //     setCounter(counter - 1)
    // };

    // Way 2
    /*function increase() {
        return (
            setCounter(function (oldCounterValue) {
                return (
                    oldCounterValue + 1
                )
            })
        )
    }*/
    const increase = () => setCounter(old => old + 1)
    const decrease = () => setCounter(old => old - 1)

    const [quote, setQuote] = useState(['Nothing to show here yet!', ''])

    const quotesConfig = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.quotable.io/random',
        headers: {}
    }

    const newQuote = async () => {
        await axios.request(quotesConfig).then((response) => {
            const data = response.data
            setQuote([data.content, data.author])
        })
    }

    return (
        <div className='main-body'>
            <CenterDiv>
                <LearningUseEffect />
                <div>
                    <button className="btn" onClick={decrease}>-</button>
                    <ShowCount>
                        {counter}
                    </ShowCount>
                    <button className="btn" onClick={increase}>+</button>
                </div>
                <br />
                <h3>Quote</h3>
                <p>
                    <ShowCount>
                        <code>
                            <q>
                                {quote[0]}
                            </q>
                            {quote[1] && <Author>- {quote[1]}</Author>}
                        </code>
                    </ShowCount>
                </p>
                <button onClick={newQuote}>Randomize</button>
                <DropDown />
            </CenterDiv>
        </div>
    )
}

const ShowCount = styled.b`
    padding: 2px 9px;

`
const Author = styled.p`
    text-align: right;
`
const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`