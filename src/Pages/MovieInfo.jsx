import React from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import { useFetch } from "../CustomHook/useFetch";

const MovieInfo = () => {
  const { id } = useParams();
  const [data] = useFetch(`movie/${id}`);

  return (
    <div className="moviePage">
      <Wrapper>
        <div className="movieContent">
          <div className="moviePoster">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt=""
            />
          </div>
          <div className="movieInfo">
            <div className="movieTitle">
              <h1>{data.title}</h1>
              <h3>{data.tagline}</h3>
              <p className="movieCardRating">{data.vote_average}</p>
            </div>
            <div className="moviePlot">{data.overview}</div>
            <div className="movieDetails">
              <div className="movieDetailsItem"></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default MovieInfo;
