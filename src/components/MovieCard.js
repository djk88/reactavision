import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            <div className="inner">
                <Link
                    key={movie.id}
                    to={`/PageMovieDetails/${movie.id}`}
                    className="movie-item"
                    state={{ movie: movie }}
                >
                    {movie.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`${movie.title} Poster`}
                        />)
                        :
                        (<div className="filler-poster"></div>)}
                </Link>
            </div>
            <h4 className="rating">Rating: {movie.vote_average}</h4>
        </div>
    );
};
