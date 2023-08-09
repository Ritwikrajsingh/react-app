import React, { useState } from 'react'
import './App.css'

export default function App(props) {
    const [age, setAge] = useState(17)
    const [name, setName] = useState("")
    const [clickCount, setClickCount] = useState(0)
    const [mouseEnter, setMouseEnter] = useState(0)
    const [mouseLeave, setMouseLeave] = useState(0)
    const [focused, setFocused] = useState(0)
    const [blurred, setBlurred] = useState(0)

    const clickMe = (e) => {
        setClickCount(prev => prev + 1);
        console.log(`count: ${clickCount}, type: ${e.type}`);
    }
    const mouseEnterHandler = (e) => {
        setMouseEnter(prev => prev + 1);
        console.log(`count: ${mouseEnter}, type: ${e.type}`);
    }

    const mouseLeaveHandler = (e) => {
        setMouseLeave(prev => prev + 1);
        console.log(`count: ${mouseLeave}, type: ${e.type}`);
    }

    const focusHandler = (e) => {
        setFocused(prev => prev + 1);
        console.log(`count: ${focused}, type: ${e.type}`);
    }

    const blurHandler = (e) => {
        setBlurred(prev => prev + 1);
        console.log(`count: ${blurred}, type: ${e.type}`);
    }

    return (
        <div className="main-body">
            <h4>Few properties that are shown below are: </h4>
            <ul>
                <li>Conditional Rendering</li>
                <ul>
                    <li>Short Circuiting</li>
                    <li>Ternary Operators</li>
                </ul>
                <li>Event Listeners</li>
            </ul>

            <main>
                {/* Conditional Rendering */}

                {/* 1. short circuiting */}
                <div>
                    <input
                        placeholder='name'
                        onChange={event => setName(event.target.value)}
                    />
                    {name && <p style={{ paddingTop: '15px' }}>Your name is {name}</p>}
                </div>
                {/* 2. ternary operator  */}
                <input
                    placeholder='age ( default is 17 )'
                    onChange={event => setAge(event.target.value)}
                />
                {age >= 18 ? age < 65 ? <p>You're an adult. So what!</p> : <p>What the... Hurry up and die!</p> : <p>Oh! You are a minor. Sucks right!</p>}

                {/* Event Listeners */}
                <button
                    onClick={clickMe}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onFocus={focusHandler}
                    onBlur={blurHandler}>
                    Click Here!
                </button>
                <div className='event-box'>
                    <p>
                        <div>Button Click Count</div>
                        <div>{clickCount}</div>
                    </p>
                    <p>
                        <div>Button MouseEnter Count</div>
                        <div>{mouseEnter}</div>
                    </p>
                    <p>
                        <div>Button Mouse Leave Count</div>
                        <div>{mouseLeave}</div>
                    </p>
                    <p>
                        <div>Button Focus Count</div>
                        <div>{focused}</div>
                    </p>
                    <p>
                        <div>Button Blur Count</div>
                        <div>{blurred}</div>
                    </p>
                </div>
            </main>
        </div>
    )
}
