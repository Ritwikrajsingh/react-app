import React, { useState } from 'react'

export default function Question({ title, info }) {
    const [visible, setVisibility] = useState(["+", null])
    const changeVisibility = () => {
        setVisibility(prev => {
            if (prev[0] === "+") {
                return ["-", info]
            }
            return ["+", null]
        })
    }

    return (
        <article className='faq'>
            <div className='question'>
                <h4>{title}</h4>
                <button
                    className='btn'
                    onClick={changeVisibility}
                >{visible[0]}</button>
            </div>
            {visible[1] && <p className='answer'><b>Ans.</b>{" " + visible[1]}</p>}
        </article>
    )
}