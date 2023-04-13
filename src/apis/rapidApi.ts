import { AxiosRequestConfig } from 'axios';
import env from 'src/env/env';

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
    url: `${env.JSEARCH_API_URL}/${endpoint}`,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': env.RAPID_API_KEY,
      'X-RapidAPI-Host': env.RAPID_API_HOST,
    },
    params: { ...param },
  };
};

export { jSearchRapidApiConfig };
