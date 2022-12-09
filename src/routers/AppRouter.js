import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FavoriteList } from '../components/FavoriteList';
import { Watched } from '../components/Watched';
// import { Search } from '../components/searchNotNeeded';
import { PageSearch } from '../pages/PageSearch';
import { Main } from '../components/Main';
import "../lib/font-awesome/css/all.min.css"

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/FavoriteList" exact element={<FavoriteList />} />
                <Route path="/Watched" exact element={<Watched />} />
                <Route path="/PageSearch" exact element={<PageSearch />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter; 
