import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchEffect(url, dependencies = []) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    const abortController = new AbortController();
    try {
      const response = await axios.get(url, {
        signal: abortController.signal,
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

    return () => {
      abortController.abort();
    };
  };

  useEffect(() => {
    fetchData();
  }, [...dependencies]);

  return { data, loading, error };
}
