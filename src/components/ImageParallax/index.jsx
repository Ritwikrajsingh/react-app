'use client';
import React, { useRef, useEffect, useState } from 'react';
import './index.css'

const ImageParallax = () => {
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    const canvasRef = useRef(null);
    const [frameIndex, setFrameIndex] = useState(0);

    const totalFrames = 300;
    const currentFrame = (index) => (
        `/assets/parallax-images1/male0${index.toString().padStart(3, '0')}.png`
    );

    const updateImage = (index) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height); // Clear previous content
        const frame = new Image();

        frame.src = currentFrame(index);
        frame.onload = () => {
            context.drawImage(frame, 0, 0);
        };
    };


    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        const scrollNormal = scrollTop / maxScrollTop;
        const newFrameIndex = Math.min(totalFrames - 1, Math.floor(scrollNormal * totalFrames));

        setFrameIndex(newFrameIndex + 1);
    };


    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const frame = new Image();

        canvas.height = 1080;
        canvas.width = 1920;

        frame.src = currentFrame(1);
        frame.onload = () => {
            context.drawImage(frame, 0, 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        updateImage(frameIndex);
    }, [frameIndex]);

    return <canvas
        ref={canvasRef}
        className="house-model"
        loading="eager"
        data-scroll
        data-scroll-speed="1"
        data-scroll-direction="horizontal" />;
};

export default ImageParallax;