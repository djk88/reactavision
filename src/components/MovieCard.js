import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, type }) => {

    var rate = movie.vote_average;
    rate = parseFloat(rate);
    rate = rate * 10


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
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={`${movie.title} Poster`}
                        />)
                        :
                        ((<img
                            src={require(("../image/filler-picture.png"))}
                            alt={`${movie.title} Poster`}
                        />))}
                </Link>
            </div>
            <h4 className="title">{movie.title}</h4>
            <h4 className="release-date">{movie.release_date && movie.release_date.substring(0, 4)}</h4>
            <h4 className="rating">Rating: {movie.vote_average}</h4>
        </div>
    );
};
