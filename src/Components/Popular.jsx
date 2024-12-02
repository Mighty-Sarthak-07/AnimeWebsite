import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import './Popular.css';
import Sidebar from './Sidebar';

function Popular({ rendered }) {
    const { popularAnime, isSearch, searchResults } = useGlobalContext();

    const conditionalRender = () => {
        if (!isSearch && rendered === 'popular') {
            return popularAnime?.map((anime) => (
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="anime-card">
                    <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                    <div className="anime-title">{anime.title}</div>
                </Link>
            ));
        } else {
            return searchResults?.map((anime) => (
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="anime-card">
                    <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                    <div className="anime-title">{anime.title}</div>
                </Link>
            ));
        }
    };

    return (
        <div className="popular">
            <div className="popular-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </div>
    );
}

export default Popular;
