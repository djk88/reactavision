import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">REACTAVISION</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/PageAbout">About</Link>
                        </li>
                        <li>
                            <Link to="/FavoriteList">Favorite List</Link>
                        </li>
                        <li>
                            {/* <Link to="/Watched">Watched</Link> */}
                        </li>
                        <li>
                            <Link to="/PageSearch" className="btn">Search movies</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
