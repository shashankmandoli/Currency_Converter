import { useEffect, useState } from "react";
const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`;

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data)
    return data;
}

export default useCurrencyInfo;