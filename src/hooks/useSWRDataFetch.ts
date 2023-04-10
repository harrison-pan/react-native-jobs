import useSWRImmutable from 'swr/immutable';
import axios, { AxiosRequestConfig } from 'axios';

interface SWRDataFetchResult<T> {
  data: T | undefined;
  isLoading: boolean;
  isValidating: boolean;
  error: Error | undefined;
}

type QueryType = { [key: string]: string | number };

const useSWRDataFetch = <T>(url: string, query: QueryType): SWRDataFetchResult<T> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2d33183cdemsh1762c97dd636f8cp1457dejsn7fc028b377a8',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  };

  // const fetcher = async (url: string) => axios.get(url, options).then((res) => res.data);

  const fetcher = async (url: string) =>
    await axios
      .get(url, options)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error.toJSON());
        throw new Error(`Error fetching data: ${error.message}`);
      });

  const { data, error, isLoading, isValidating } = useSWRImmutable<T>(url, fetcher, {
    shouldRetryOnError: false,
  });

  console.log(`🚀 ~ file: useSWRDataFetch.ts:37 ~ useSWRDataFetch ~ error:`, error);
  console.log(`🚀 ~ file: useSWRDataFetch.ts:32 ~ useSWRDataFetch ~ isValidating:`, isValidating);
  console.log(`🚀 ~ file: useSWRDataFetch.ts:32 ~ useSWRDataFetch ~ isLoading:`, isLoading);

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};

export { useSWRDataFetch };
