import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, customParams = {}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const options = {
    method: "get",
    baseURL: "https://api.themoviedb.org/3/",
    url: url,
    params: {
      api_key: "44c33cc0c757433b2e69dbaedc2942dc",
      ...customParams,
    },
  };

  const { page } = customParams;
  const { query } = customParams;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(options);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [page, query, url]);

  return [data, loading, error];
};
