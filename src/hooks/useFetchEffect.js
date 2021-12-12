import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchEffect(url, dependencies = []) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    const abortController = new AbortController(); // AbortController is a class that can be used to abort fetch requests which usually useful for unmounting
    try {
      const response = await axios.get(url, {
        signal: abortController.signal, // signal gives us the ability to abort the request
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

    return () => {
      // unmounting
      abortController.abort();
    };
  };

  useEffect(() => {
    fetchData();
  }, [...dependencies]);

  return { data, loading, error };
}
