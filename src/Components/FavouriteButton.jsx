import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import HeartFilled from "../assets/heart-filled.svg";
import Heartlined from "../assets/heart-lined.svg";

const FavouriteButton = ({ movie }) => {
  const { state, dispatch } = useContext(AppContext);

  // Checking the movie is added early to avoid duplication.
  let favourited = state.favourites.some((item) => item.id === movie.id);

  const handleFavourite = () => {
    favourited
      ? dispatch({
          type: "REMOVE_FAVOURITE",
          payload: movie.id,
        })
      : dispatch({
          type: "ADD_FAVOURITE",
          payload: movie,
        });
  };
  return (
    <div className="favButton" onClick={handleFavourite}>
      {favourited ? (
        <img src={HeartFilled} width={24} />
      ) : (
        <img src={Heartlined} width={24} />
      )}
    </div>
  );
};

export default FavouriteButton;
