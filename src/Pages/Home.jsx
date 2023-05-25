import React, { useState } from "react";
import Slider from "../Components/Slider";
import Wrapper from "../Components/Wrapper";
import ErrorMessage from "../Components/ErrorMessage";
import Loader from "../Components/Loader";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";
import { useFetch } from "../CustomHook/useFetch";

const Home = () => {
  const [pages, setPages] = useState(1);
  const [data, loading, error] = useFetch("movie/popular", { page: pages });
  const { results } = data;
  return (
    <>
      <Slider />
      <Wrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <Loader />}
        {!error && !loading && (
          <>
            <h2 className="sectionTitle">Popular Movies</h2>
            <div className="gallery">
              {results?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
            <Pagination pages={pages} setPages={setPages} />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Home;
