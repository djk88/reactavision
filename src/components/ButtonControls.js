import React, { useContext } from "react";
import { GlobalContext } from "../globals/GlobalState";

export const ButtonControls = ({ movie, type }) => {

    const { removeFromFavoritesList } = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === "favoriteList" && (
                <>
                    <button className="ctrl-btn" onClick={() => removeFromFavoritesList(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>

                </>
            )}
        </div>
    );
};