import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency || !API_KEY) return;

    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates ?? {}))
      .catch(() => setData({}));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;