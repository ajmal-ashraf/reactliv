export const initialState = {
  favourites: [],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_FAVOURITE":
      return { ...state, favourites: [...state.favourites, payload] };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};
