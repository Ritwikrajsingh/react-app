import './index.css'
import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound(props) {
    const { paths } = props
    return (
        <div className='main-body'>
            <div id='oopss'>
                <div id='error-text'>
                    <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
                    <span>404 Page Not Found</span>
                    <div className='redirects'>
                        {paths.map(path => <Link key={path.url} to={path.url}>{path.name}</Link>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
