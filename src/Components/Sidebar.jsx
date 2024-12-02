import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import './Sidebar.css';

function Sidebar() {
    const { popularAnime } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);

    const sorted = popularAnime?.sort((a, b) => {
        return b.score - a.score;
    });

    return (
        <>
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <h3>Top 5 Popular</h3>
                <div className="anime">
                    {sorted?.slice(0, 5).map((anime) => {
                        return (
                            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                                <img src={anime.images.jpg.large_image_url} alt="" />
                                <h4>{anime.title}</h4>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Sidebar;
