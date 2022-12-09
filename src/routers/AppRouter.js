import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FavoriteList } from '../components/FavoriteList';
import { Watched } from '../components/Watched';
import { PageSearch } from '../pages/PageSearch';
import { PageAbout } from '../pages/PageAbout';
import { Main } from '../components/Main';
import "../lib/font-awesome/css/all.min.css"

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/PageAbout" exact element={<PageAbout />} />
                <Route path="/FavoriteList" exact element={<FavoriteList />} />
                <Route path="/Watched" exact element={<Watched />} />
                <Route path="/PageSearch" exact element={<PageSearch />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter; 
