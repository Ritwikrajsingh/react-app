import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import LearningUseEffect from './LearningUseEffect'
import DropDown from './Accordion'

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

    /*================================================================
        const formData = new FormData()
        formData.append("name", "Ritwik Raj Singh")
        formData.append("email", "ritwik@gmail.com")
        formData.append("phone", 123456)
        formData.append("facadeOption", "Not Sure")
        formData.append("zip", 1234)
        const testConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:13009/api/v2/the-block-contest/register',
            headers: {
                'x-api-key': 'PVdgXUMggj8l9w09rTZA42zVXIfPWjvo9hqxlAnk'
            },
            data: formData
        }
        let data;
        const test = async () => {
            await axios.request(testConfig).then((res) => {
                data = res.data
                console.log(data)
            }).catch((err) => {
                console.log(err.response);
                if (err.response.status === 400) {
                    console.log(err.response.data);
                }
            })
        }
        test()
        console.log(data);
    ================================================================*/

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