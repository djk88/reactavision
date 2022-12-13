import React, { useContext } from "react";
import { GlobalContext } from "../globals/GlobalState";
import { MovieCard } from "../components/MovieCard";

export const PageFavoriteList = () => {

    const { favoriteList } = useContext(GlobalContext);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My Favorites List</h1>

                    <span className="count-pill">
                        {favoriteList.length} {favoriteList.length === 1 ? "Movie" : "Movies"}
                    </span>
                </div>

                {favoriteList.length > 0 ? (
                    <div className="movie-grid">
                        {favoriteList.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} type="favoriteList" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No movies in your favorites list!</h2>
                )}
            </div>
        </div>
    );
};