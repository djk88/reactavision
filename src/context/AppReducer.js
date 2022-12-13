
export default (state, action) => {
    switch (action.type) {
        case "addToFavoritesList":
            return {
                ...state,
                favoriteList: [action.payload, ...state.favoriteList],
            };
        case "removeFromFavoritesList":
            return {
                ...state,
                favoriteList: state.favoriteList.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

