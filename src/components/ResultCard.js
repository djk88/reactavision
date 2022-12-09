import React from 'react'

export const ResultCard = ({ movie }) => {
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (<img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={`${movie.title} Poster`} />
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">{movie.release_date.substring(0, 4)}</h4>
                    <h4 className="rating">Rating: {movie.vote_average}</h4>
                    <p className="overview">{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};
