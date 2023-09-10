import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    // Function to check if a given path matches the current URL location
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav>
            <li className={isActive('/') ? 'active' : ''}>
                <Link to="/">Home</Link>
            </li>
            <li className={isActive('/state-management') ? 'active' : ''}>
                <Link to="/state-management">State Management</Link>
            </li>
            <li className={isActive('/image-carousel') ? 'active' : ''}>
                <Link to="/image-carousel">Image Carousel</Link>
            </li>
            <li className={isActive('/canvas') ? 'active' : ''}>
                <Link to="/canvas">Canvas</Link>
            </li>
            <li className={isActive('/image-parallax') ? 'active' : ''}>
                <Link to="/image-parallax">Image Parallax</Link>
            </li>
            <li className={isActive('/about') ? 'active' : ''}>
                <Link to="/about">About</Link>
            </li>
        </nav>
    );
}

export default Navigation;