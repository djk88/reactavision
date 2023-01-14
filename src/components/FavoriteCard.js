import React from "react";
import { ButtonControls } from "./ButtonControls";

export const FavoriteCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                />)
                :
                (<img
                    src={require(("../image/filler-picture.png"))}
                    alt={`${movie.title} Poster`}
                />)}
            <ButtonControls type={type} movie={movie} />
        </div>
    )
}
