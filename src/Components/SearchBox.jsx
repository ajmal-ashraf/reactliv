import React, { useState } from "react";
import { useFetch } from "../CustomHook/useFetch";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [data] = useFetch("search/movie", { query });
  const { results } = data;

  return (
    <div className="searchBox">
      <input
        className="searchField"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="resultBox">
        <ul>
          {results?.map(({ title, poster_path, vote_average, id }) => {
            return (
              <Link to={`movie/${id}`}>
                <li>
                  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                  <h4>{title}</h4>
                  <p>{vote_average}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
