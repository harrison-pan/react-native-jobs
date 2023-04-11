import axios, { AxiosRequestConfig } from 'axios';
import useSWRImmutable from 'swr/immutable';

type SWRDataFetchResult<T> = {
  data?: T;
  error?: Error;
  isLoading: boolean;
  isValidating: boolean;
};

const useSWRDataFetch = <T>(options: AxiosRequestConfig): SWRDataFetchResult<T> => {
  const fetcher = async () =>
    await axios
      .request(options)
      .then((res) => res.data.data)
      .catch((error) => {
        throw new Error(`Error fetching data: ${error.message}`);
      });

  const { data, error, isLoading, isValidating } = useSWRImmutable<T>(options.url, fetcher, {
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
