import React from "react";
import { ButtonControls } from "./ButtonControls"

export const MovieCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                />)
                :
                (<div className="filler-poster"></div>)}
            <ButtonControls type={type} movie={movie} />
        </div>
    );
};
