import React, { useEffect, useState } from 'react';
import './index.css';

const IMAGES_URL = 'https://api.github.com/repos/ritwiksingh-tmpl/Nordic_rose_assets/contents/Blogs/Banner'



export default function ImageCarousel() {
    const [images, setImages] = useState(null)

    async function fetchData() {
        const res = await fetch(IMAGES_URL)
        const data = await res.json()
        setImages(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='app'>
            <div className='container'>
                <h1>A simple example of image carousel</h1>
                <div class='carousel'>
                    {images?.map((image, index) => (
                        <>
                            <img
                                className='image'
                                src={image?.download_url}
                                key={image?.name}
                                alt={`Banner ${index + 1}`}
                            />
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
