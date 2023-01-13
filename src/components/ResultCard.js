import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { GlobalContext } from '../globals/GlobalState';

export const ResultCard = ({ movie, type }) => {

    const { addToFavoritesList, removeFromFavoritesList, favoriteList } = useContext(GlobalContext)

    let favoriteMovie = favoriteList.find(x => x.id === movie.id);


    return (
        <div className="result-card">
            <div className="poster-wrapper">
                <Link
                    key={movie.id}
                    to={`/PageMovieDetails/${movie.id}`}
                    className="movie-item"
                    state={{ movie: movie }}
                >
                    {movie.poster_path ? (<img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={`${movie.title} Poster`} />
                    ) : (
                        <div className="filler-poster"></div>)}
                </Link>
                {/* <h4 className="rating">Rating: {movie.vote_average}</h4> */}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">{movie.release_date && movie.release_date.substring(0, 4)}</h4>
                    <h4 className="rating">Rating: {movie.vote_average}</h4>
                    <p className="overview">{movie.overview.substring(0, 400)}</p>
                </div>
                <div className="controls">
                    {favoriteMovie ?
                        <button className="btn-remove" onClick={() => removeFromFavoritesList(movie.id)}>
                            Remove from Favorites
                        </button>
                        :
                        <button className="btn" onClick={() => addToFavoritesList(movie)}>
                            <i className="fa-fw fa fa-heart"></i> Add to Favorites
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};


