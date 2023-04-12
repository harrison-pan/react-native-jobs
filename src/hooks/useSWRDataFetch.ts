import axios, { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

type SWRDataFetchResult<T> = {
  data?: T;
  error?: Error;
  isLoading: boolean;
  isValidating: boolean;
};

const fetcher = async (options: AxiosRequestConfig) =>
  await axios
    .request(options)
    .then((res) => res.data.data)
    .catch((error) => {
      throw new Error(`Error fetching data: ${error.message}`);
    });

const useSWRDataFetch = <T>(options: AxiosRequestConfig | null): SWRDataFetchResult<T> => {
  const { data, error, isLoading, isValidating } = useSWR<T>(options, fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false,
  });

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};

export { useSWRDataFetch, SWRDataFetchResult };
