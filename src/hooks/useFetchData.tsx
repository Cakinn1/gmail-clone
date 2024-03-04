import React, { useEffect, useState } from "react";
import { DataProps } from "../types/typings";
import { fetchDataWithTimeout } from "../services/apiServices";

export default function useFetchData() {
  const [productData, setProductData] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataWithTimeout();
        setProductData(data as DataProps[]);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { productData, loading, error };
}
