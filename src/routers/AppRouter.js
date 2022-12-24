import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageFavoriteList } from '../pages/PageFavoriteList';
import { PageSearch } from '../pages/PageSearch';
import { PageAbout } from '../pages/PageAbout';
import { PageMovieDetails } from '../pages/PageMovieDetails';
import { Main } from '../components/Main';
import { GlobalProvider } from '../globals/GlobalState';
import "../lib/font-awesome/css/all.min.css"

function AppRouter() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Main />} />
                    <Route path="/PageAbout" exact element={<PageAbout />} />
                    <Route path="/PageMovieDetails/:id" exact element={<PageMovieDetails />} />
                    <Route path="/PageFavoriteList" exact element={<PageFavoriteList />} />
                    <Route path="/PageSearch" exact element={<PageSearch />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </GlobalProvider>
    );
}

export default AppRouter; 
