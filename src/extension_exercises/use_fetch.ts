import { useEffect, useState } from "react";

type State<T> = {
  isLoading: boolean;
  payload: T | null;
  error: Error | null;
};

function useFetch<T>(url: string) {
  const [state, setState] = useState<State<T>>({
    isLoading: true,
    payload: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }

        const payload = await response.json();

        setState(() => ({ isLoading: false, payload, error: null }));
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("Unable to fetch data");

        setState(() => ({ isLoading: false, payload: null, error }));
      }
    };

    fetchData();
  }, [url]);

  return state;
}

export default useFetch;
