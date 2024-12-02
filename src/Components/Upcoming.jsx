import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import Sidebar from './Sidebar';
import './Upcoming.css';

function Upcoming({ rendered }) {
    const { upcomingAnime, isSearch, searchResults } = useGlobalContext();

    const conditionalRender = () => {
        if (!isSearch && rendered === 'upcoming') {
            return upcomingAnime?.map((anime) => (
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
        <div className="upcoming">
            <div className="upcoming-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </div>
    );
}

export default Upcoming;
