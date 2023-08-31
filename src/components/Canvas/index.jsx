
// import React, { useRef, useEffect } from 'react'

// const Canvas = props => {

//     const canvasRef = useRef(null)

//     const draw = (ctx, frameCount) => {
//         ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//         ctx.fillStyle = '#000000'
//         ctx.beginPath()
//         ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
//         ctx.fill()
//     }

//     useEffect(() => {

//         const canvas = canvasRef.current
//         const context = canvas.getContext('2d')
//         let frameCount = 0
//         let animationFrameId

//         //Our draw came here
//         const render = () => {
//             frameCount++
//             draw(context, frameCount)
//             animationFrameId = window.requestAnimationFrame(render)
//         }
//         render()

//         return () => {
//             window.cancelAnimationFrame(animationFrameId)
//         }
//     }, [draw])

//     return <canvas ref={canvasRef} {...props} />
// }

// export default Canvas

import React, { useRef, useEffect, useState } from 'react';
import './index.css'

const Canvas = () => {
    const canvasRef = useRef(null);
    const [frameIndex, setFrameIndex] = useState(0);

    const totalFrames = 62;
    const currentFrame = (index) => (
        `/assets/parallax-images/image_${index.toString().padStart(3, '0')}.jpg`
    );

    const updateImage = (index) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
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

    return <canvas ref={canvasRef} className="house-model" loading="eager" />;
};

export default Canvas;
