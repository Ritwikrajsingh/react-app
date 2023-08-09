import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import teamData from '../../../team'
import NotFound from '../../404'

export default function Profile() {
    const { username } = useParams()
    const userdata = teamData.filter(user => user.username === username)[0]

    return (
        userdata !== undefined
            ?
            <div className='main'>
                <div className='profile-body'>
                    <img src={userdata?.image} alt="Profile" />
                    <h1>{userdata?.name}</h1>
                    <p>{userdata?.description}</p>
                    <p>{userdata?.longDescription}</p>
                </div>
            </div>
            :
            <NotFound paths={
                [{
                    url: "/about",
                    name: "Go Back To About"
                }, {
                    url: "/",
                    name: "Go Back To Home"
                }]} />
    );
}
