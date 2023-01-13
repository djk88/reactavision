import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { SidebarData } from './SidebarData';

export const Header = () => {
    // const [sidebar, setSidebar] = useState(false);
    // const showSidebar = () => setSidebar(!sidebar);

    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/"><span className='logo'>REACT</span>AVISION</Link>
                    </div>
                    {/* <div className='navbar'>
                    <a href="#head-nav" className="header-btn" id="header-btn" onClick={showSidebar}><span className="hidden"></span></a>
                    </div>
                    
                    <nav id='navigation' className={sidebar ? 'nav-menu active' : 'nave-menu'}>
                        <ul className='nav-menu-items'>
                            {SidebarData.map((item, index) => {
                                return(
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav> */}
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
                </div>
            </div>
        </header>
    );
};

export default Header;