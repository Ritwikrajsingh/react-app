import React, { useState } from 'react'

export default function Question({ title, info }) {
    const [visible, toggle] = useState(false)
    return (
        <article className='faq'>
            <div className='question'>
                <h4>{title}</h4>
                <button
                    className='btn'
                    onClick={() => toggle(prev => !prev)}
                >{visible ? "-" : "+"}</button>
            </div>
            {visible && <p className='answer'><b>Ans.</b>{" " + info}</p>}
        </article>
    )
}