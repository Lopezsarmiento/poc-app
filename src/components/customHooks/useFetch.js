import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [items, setItems] = useState(null)
  const [nextUrl, setNextUrl] = useState(null)
  const [prevUrl, setPrevUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for the resource.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setItems(data.results ? data.results:null)
        setNextUrl(data.next ? data.next:null)
        setPrevUrl(data.previous ? data.previous:null)

        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.log("Error Fetching data: ", err.message);
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return { data, items, nextUrl, prevUrl, isLoading, error };
};

export default UseFetch;
