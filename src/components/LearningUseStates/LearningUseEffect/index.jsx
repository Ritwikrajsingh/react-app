import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function LearningUseEffect() {


    const [timer, setTimer] = useState(0);
    const reset = () => setTimer(0)

    useEffect(() => {
        const clockTimer = () => setTimer(prev => prev + 1)
        const timerId = setInterval(clockTimer, 1000);
        return () => clearInterval(timerId);
    }, [])

    return (
        <div style={{ display: "flex" }}>
            <div>
                Timer:<ShowTimer>
                    {timer}
                </ShowTimer>
            </div>
            <button onClick={reset}>Reset</button><br />

        </div>
    )
}

const ShowTimer = styled.b`
    padding: 2px 9px;

`