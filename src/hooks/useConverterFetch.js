import { useEffect, useState } from "react";

function useConverterFetch(amnt, fromCur, toCur) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchConverterURL();
  }, [amnt, fromCur, toCur]);

  const fetchConverterURL = async () => {
    if (fromCur === toCur) {
      setData(amnt); // Directly set the amount if currencies are the same
      return;
    }

    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amnt}&from=${fromCur}&to=${toCur}`
      );
      const data = await res.json();
      setData(Math.floor(data.rates[toCur] * 1000) / 1000);
    } catch (err) {
      console.error("Error fetching conversion data:", err);
    }
  };

  return { data };
}

export default useConverterFetch;
