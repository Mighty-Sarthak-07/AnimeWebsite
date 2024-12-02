import React from 'react';
import { useGlobalContext } from '../context/global';
import Airing from './Airing';
import './Homepage.css';
import Popular from './Popular';
import Upcoming from './Upcoming';

function Homepage() {
    const {
        handleSubmit,
        search,
        searchAnime,
        handleChange,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext();

    const [rendered, setRendered] = React.useState('popular');

    const switchComponent = () => {
        switch (rendered) {
            case 'popular':
                return <Popular rendered={rendered} />;
            case 'airing':
                return <Airing rendered={rendered} />;
            case 'upcoming':
                return <Upcoming rendered={rendered} />;
            default:
                return <Popular rendered={rendered} />;
        }
    };

    return (
        <div className="homepage">
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular' ? 'Popular Anime' :
                        rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => setRendered('popular')}>
                            Popular<i className="fas fa-fire"></i>
                        </button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input type="text" placeholder="Search Anime" value={search} onChange={handleChange} />
                            <button type="submit" id='search'>Search</button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('airing');
                            getAiringAnime();
                        }}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('upcoming');
                            getUpcomingAnime();
                        }}>Upcoming</button>
                    </div>
                </div>
            </header>
            {switchComponent()}
            <footer>
    <div class="footer-container">
        <div class="footer-section">
            <div class="footer-logo">ANIMEpedia</div>
            <p>"ANIMEpedia: Your Gateway to the World of Anime and Manga!"</p>
        </div>
        <div class="footer-section footer-links">
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </div>
        <div class="footer-section footer-contact">
            <h3>Contact Us</h3>
            <a href="mailto:info@example.com">info@example.com</a>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
        </div>
        <div class="footer-section footer-social">
            <h3>Follow Us</h3>
            <div className="social-links">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></div>
        </div>
       
    </div>
    <br />
    <hr />
        <div className='footer-end'>
        <p>All Copyrights reserved || ANIMEpedia</p></div>
</footer>

        </div>
        
    );
}

export default Homepage;
