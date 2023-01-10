import { useEffect, useState } from "react";

type Options = RequestInit & {
  timeout: number;
};

const useFetch = <T>(url: string, options?: Options) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), options?.timeout);

  useEffect(() => {
    setError("");
    setData(null);
    setLoading(true);

    fetch(`https://www.balldontlie.io/api/v1/${url}`, { ...options, signal: controller.signal })
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          setError("Request timed out.");
        } else {
          setError("An error occured, please try again.");
        }
        clearTimeout(id);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
