import React from 'react';
import { Link, BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from '../App';
import LearningUseStates from '../LearningUseStates';
import NotFound from '../404';
import ImageCarousel from '../ImageCarousel'
import './index.css'
import About from '../About';
import Profile from '../About/Profile';
import Canvas from '../Canvas';
import ImageParallax from '../ImageParallax';
import Navigation from '../Navigation';

export default function Header() {
    return (
        <BrowserRouter>
            <header style={{ margin: "0 0 10px 0" }}>
                <h1>This is a header component</h1>
                <Navigation />
            </header>

            <Routes>
                <Route path="/"
                    element={
                        <div>
                            <App age={24} />
                        </div>
                    } />
                <Route path="/state-management"
                    element={
                        <div>
                            <LearningUseStates />
                        </div>
                    } />
                <Route path="/image-carousel"
                    element={
                        <ImageCarousel />
                    } />
                <Route path="/canvas"
                    element={
                        <div className='canvas-body'>
                            <Canvas />
                        </div>
                    } />
                <Route path="/image-parallax"
                    element={
                        <div className='canvas-body'>
                            <ImageParallax />
                        </div>
                    } />
                <Route path="/about"
                    element={
                        <About />
                    } />

                <Route
                    exact
                    path={`/about/*`}
                    element={
                        < NotFound />
                    }
                />
                <Route
                    exact
                    path={`/about/:username`}
                    element={
                        <Profile />
                    }
                />
                <Route
                    exact
                    path={`/*`}
                    element={
                        <NotFound />
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}