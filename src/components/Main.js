import React, { useState, useEffect } from 'react'
import { MovieCard } from './MovieCard';
import { API_KEY } from '../globals/GlobalState';
import { Banner } from './Banner';

const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const UPCOMMING_API = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
const NOW_PLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const Main = () => {

    const [movies, setMovies] = useState([]);
    const [active, setActive] = useState("1")
    const [endPoint, setEndPoint] = useState(POPULAR_API)

    // const savedFilter = window.localStorage.getItem('SORT_BY'); to be implemented later 

    const handleChange = (e) => {
        const newValue = e.target.value
        switch (newValue) {
            case "popularMovies":
                setEndPoint(POPULAR_API);
                setActive(e.target.id)
                break;
            case "topRated":
                setEndPoint(TOP_RATED_API);
                setActive(e.target.id)
                break;
            case "upcoming":
                setEndPoint(UPCOMMING_API);
                setActive(e.target.id)
                break;
            case "nowPlaying":
                setEndPoint(NOW_PLAYING_API);
                setActive(e.target.id)
                break;
            default:
                console.log("error")
        }
    }


    useEffect(() => {
        window.localStorage.setItem('SORT_BY', endPoint)
        fetch(endPoint)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results.slice(0, 12))
            })
    }, [endPoint])


    return (
        <div className="main-page">
            <Banner />
            <div className="container">
                <div className="sort-wrapper">
                    <button className={active === "1" ? "btn-sort-active" : "btn-sort"} value="popularMovies" onClick={handleChange} id="1" >Popular Movies</button>
                    <button className={active === "2" ? "btn-sort-active" : "btn-sort"} value="topRated" onClick={handleChange} id="2">Top Rated</button>
                    <button className={active === "3" ? "btn-sort-active" : "btn-sort"} value="upcoming" onClick={handleChange} id="3">Upcoming</button>
                    <button className={active === "4" ? "btn-sort-active" : "btn-sort"} value="nowPlaying" onClick={handleChange} id="4">Now Playing</button>
                </div>
                {movies.length > 0 && (
                    <ul className="main-movie-grid">
                        {movies.map(movie => (
                            <li key={movie.id}>
                                <MovieCard movie={movie} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
