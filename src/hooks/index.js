import { useState, useEffect } from "react";

const url = "https://api-test.innoloft.com/product/6781/";

export const useFetch = (options) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetch(url, options);
        const json = await result.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, [options]);
  return { data, error, isLoading };
};
