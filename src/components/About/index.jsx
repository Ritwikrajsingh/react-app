import React from 'react'
import teamData from '../../team'
import { Link } from 'react-router-dom';
import './index.css'

export default function About() {
    return (
        <div className='main'>
            <div className='members-container'>
                {teamData.map(member => {
                    return (
                        <div
                            className='member'
                            key={member.username}
                        >
                            <Link to={`/about/${member.username}`}>
                                <img src={member.image} alt={member.username} />
                                <p>{member.name}</p>
                            </Link>
                            <p>{member.description}</p>
                        </div>
                    )
                })}
            </div >
        </div>
    )
}
