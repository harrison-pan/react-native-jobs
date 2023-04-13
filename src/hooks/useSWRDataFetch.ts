import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useSWR from 'swr';
import {
  mockJobDetailResponse,
  mockJobsResponse,
} from '../apis/mock-api-responses/mockApiResponse';

type SWRDataFetchResult<T> = {
  data?: T;
  error?: Error;
  isLoading: boolean;
  isValidating: boolean;
};

// TODO: comment out this mock axios implementation
// const mock = new MockAdapter(axios, { delayResponse: 800 });
// mock.onGet('https://jsearch.p.rapidapi.com/search').reply(200, mockJobsResponse);
// mock.onGet('https://jsearch.p.rapidapi.com/job-details').reply(200, mockJobDetailResponse);

const fetcher = async (options: AxiosRequestConfig) =>
  await axios
    .request(options)
    .then((res) => res.data.data)
    .catch((error) => {
      throw new Error(`Error fetching data: ${error.message}`);
    });

const swrOptions = {
  revalidateIfStale: true,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

const useSWRDataFetch = <T>(options: AxiosRequestConfig | null): SWRDataFetchResult<T> => {
  const { data, error, isLoading, isValidating } = useSWR<T>(options, fetcher, swrOptions);
  return { data, isLoading, isValidating, error };
};

export { useSWRDataFetch, SWRDataFetchResult };
