import React, { useContext } from "react";
import Wrapper from "../Components/Wrapper";
import { AppContext } from "../Context/AppContext";
import MovieCard from "../Components/MovieCard";

const Favourites = () => {
  const { state } = useContext(AppContext);

  return (
    <Wrapper>
      <h3 className="sectionTitle">Favourite movies</h3>
      <div className="gallery">
        {state.favourites.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Favourites;
