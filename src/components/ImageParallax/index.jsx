import React, { useRef, useEffect, useState } from 'react';
import './index.css'

const ImageParallax = () => {

    const canvasRef = useRef(null);
    const [frameIndex, setFrameIndex] = useState(0);
    const [images, setImages] = useState([])
    const totalFrames = 300;


    const currentFrame = (index) => (
        `/assets/parallax-images1/male0${index.toString().padStart(3, '0')}.png`
    );

    // Eagerly load images
    const eagerlyLoad = () => {
        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${currentFrame(i)}`;
            setImages((prevImages) => [...prevImages, img]);
        }
    }

    // Draw and update image on cangas
    const updateImage = (index) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = 1920;
        canvas.height = 1080;

        images.onload = () => {
            context.drawImage(images, 0, 0);
        };
    };

    // handle scroll logic
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        const scrollNormal = scrollTop / maxScrollTop;
        const newFrameIndex = Math.min(totalFrames - 1, Math.floor(scrollNormal * totalFrames));

        setFrameIndex(newFrameIndex + 1);
        console.log(frameIndex);
    };

    useEffect(() => {
        eagerlyLoad()
        updateImage();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!canvasRef.current || images.length < 1 || frameIndex >= totalFrames) {
            return;
        }

        const context = canvasRef.current.getContext('2d');
        let requestId;

        const render = () => {
            console.log(images[frameIndex].src, frameIndex);
            if (frameIndex < images.length && frameIndex < totalFrames) {
                context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // Clear the canvas
                context.drawImage(images[frameIndex], 0, 0);
                requestId = requestAnimationFrame(render);
            }
        };

        render();

        return () => cancelAnimationFrame(requestId);
    }, [frameIndex, images]);

    return <canvas
        ref={canvasRef}
        className="house-model"
        loading="eager" />;
};

export default ImageParallax;