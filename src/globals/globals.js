
// import React, { createContext, useReducer, useEffect } from "react";
// import AppReducer from "./AppReducer";

export const API_KEY = "a87239141e560f2d1ffa1d2c5b416813";
// export const GlobalContext = createContext(initialState);

// const initialState = {
//     watchlist: localStorage.getItem("favoriteList")
//         ? JSON.parse(localStorage.getItem("favoriteList"))
//         : [],
// };

// export const Globals = (props) => {
//     const [state, dispatch] = useReducer(AppReducer, initialState);

//     useEffect(() => {
//         localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
//     }, [state]);

//     const addToFavoriteList = (movie) => {
//         dispatch({ type: "ADD_MOVIE_TO_FAVORITE_LIST", payload: movie });
//     };

//     const removeFromFavoriteList = (id) => {
//         dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITE_LIST", payload: id });
//     };

//     return (
//         <GlobalContext.Provider
//             value={{
//                 watchlist: state.watchlist,
//                 watched: state.watched,
//                 addToFavoriteList,
//                 removeFromFavoriteList,
//             }}
//         >
//             {props.children}
//         </GlobalContext.Provider>
//     );
// };