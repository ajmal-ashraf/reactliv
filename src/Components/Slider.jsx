import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { useFetch } from "../CustomHook/useFetch";

const Slider = () => {
  // Using custom hook for fetching data from API.
  const [data] = useFetch("movie/now_playing");
  const { results } = data;

  // Customised Options of slider
  let splideOptions = {
    heightRatio: 0.5,
    pagination: false,
    speed: 100,
    cover: true,
    padding: "15vw",
    autoplay: true,
    type: "loop",
    breakpoints: {
      640: {
        heightRatio: 0.54,
        arrows: false,
        pagination: true,
        padding: 0,
      },
    },
  };

  return (
    <div className="movieSlider">
      <Splide options={splideOptions} aria-label="My Favorite Images">
        {results?.map(({ title, backdrop_path, id }) => {
          return (
            <SplideSlide key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
                alt={`${title} movie-poster`}
              />
              <div className="slideCaption">
                <h2>{title}</h2>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Slider;
