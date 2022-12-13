import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "../context/AppReducer";

export const API_KEY = "a87239141e560f2d1ffa1d2c5b416813";

const initialState = {
    favoriteList: localStorage.getItem("favoriteList")
        ? JSON.parse(localStorage.getItem("favoriteList"))
        : []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
    }, [state]);

    const addToFavoritesList = (movie) => {
        dispatch({ type: "addToFavoritesList", payload: movie });
    };

    const removeFromFavoritesList = (id) => {
        dispatch({ type: "removeFromFavoritesList", payload: id });
    };

    return (
        <GlobalContext.Provider
            value={{
                favoriteList: state.favoriteList,
                addToFavoritesList,
                removeFromFavoritesList,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
