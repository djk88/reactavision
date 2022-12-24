import React, { useState, useEffect } from 'react'
import { ResultCard } from './ResultCard'
import { API_KEY } from '../globals/globals';

const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const UPCOMMING_API = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
const NOW_PLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const Main = () => {

    const [movies, setMovies] = useState([]);
    const [endPoint, setEndPoint] = useState(POPULAR_API)

    const handleChange = (e) => {
        const newValue = e.target.value
        switch (newValue) {
            case "popularMovies":
                setEndPoint(POPULAR_API);
                break;
            case "topRated":
                setEndPoint(TOP_RATED_API);
                break;
            case "upcomming":
                setEndPoint(UPCOMMING_API);
                break;
            case "nowPlaying":
                setEndPoint(NOW_PLAYING_API);
                break;
            default:
                console.log("error")
        }
    }

    useEffect(() => {
        fetch(endPoint)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results)
            });
    }, [endPoint])

    return (
        <div className="add-page">
            <div className="container">
                <div className="select-wrapper">
                    <select onChange={handleChange}>
                        <option value="">Filter by Group</option>
                        <option value="popularMovies" >Popular Movies</option>
                        <option value="topRated" >Top Rated</option>
                        <option value="upcomming" >Upcomming</option>
                        <option value="nowPlaying" >Now Playing</option>
                    </select>
                </div>
                {movies.length > 0 && (
                    <ul className="movies">
                        {movies.map(movie => (
                            <li key={movie.id}>
                                <ResultCard movie={movie} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
