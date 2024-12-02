import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import Sidebar from './Sidebar';
import './Airing.css';

function Airing({ rendered }) {
    const { airingAnime, isSearch, searchResults } = useGlobalContext();

    const conditionalRender = () => {
        if (!isSearch && rendered === 'airing') {
            return airingAnime?.map((anime) => (
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
        <div className="airing">
            <div className="airing-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </div>
    );
}

export default Airing;
