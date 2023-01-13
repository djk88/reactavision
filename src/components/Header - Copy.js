import { Link } from 'react-router-dom';
import React from 'react';

export const Header = () => {

    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/"><span className='logo'>REACT</span>AVISION</Link>
                    </div>
                    <a href="#head-nav" className="header-btn" id="header-btn"><span className="hidden"></span></a>
                    
                    <nav id='navigation'>
                        <ul className="nav-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/PageAbout">About</Link>
                            </li>
                            <li>
                                <Link to="/PageFavoriteList">Favorite List</Link>
                            </li>
                            <li>
                                <Link to="/PageSearch" className='btn-search'><i className="fa-fw fa fa-search"></i><span className='searchText'>Search</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
