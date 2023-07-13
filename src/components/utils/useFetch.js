import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error('try "yarn run serve"');
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
        return data;
      } catch (error) {
        console.log(error.message, "no fetch");
      }
    };
    isLoading && setTimeout(() => getData(), 1000);
  }, [url, isLoading]);
  return [data, isLoading];
};

export default useFetch;
