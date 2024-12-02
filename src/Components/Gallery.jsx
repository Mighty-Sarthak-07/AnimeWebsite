import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import './Gallery.css';

function Gallery() {
    const { getAnimePictures, pictures } = useGlobalContext();
    const { id } = useParams();
    const [index, setIndex] = useState(0);

    const handleImageClick = (i) => setIndex(i);

    useEffect(() => {
        getAnimePictures(id);
    }, [id]);

    return (
        <div className="gallery">
            <div className="back">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i> Back to Home
                </Link>
            </div>
            <div className="big-image">
                <img src={pictures[index]?.jpg.image_url} alt="" />
            </div>
            <div className="small-images">
                {pictures?.map((picture, i) => (
                    <div className="image-con" onClick={() => handleImageClick(i)} key={i}>
                        <img
                            src={picture?.jpg.image_url}
                            alt=""
                            className={i === index ? 'selected' : ''}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
