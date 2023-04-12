import { AxiosRequestConfig } from 'axios';

type ParamType = { [key: string]: string | number | string[] };

interface DefaultJSearchParams {
  endpoint: string;
  param: ParamType;
}

const defaultJSearchApiConfig: DefaultJSearchParams = {
  endpoint: 'search',
  param: {
    query: 'Java developer, New Zealand',
    num_pages: 1,
  },
};

const jSearchRapidApiConfig = (endpoint?: string, param?: ParamType): AxiosRequestConfig => {
  if (!endpoint && !param) {
    endpoint = defaultJSearchApiConfig.endpoint;
    param = defaultJSearchApiConfig.param;
  }
  return {
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4b449d9d49msh8cfef18dde05d7bp1e7659jsn70bc94bb6c20',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...param },
  };
};

export { jSearchRapidApiConfig };
