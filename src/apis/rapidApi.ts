import { AxiosRequestConfig } from 'axios';

type QueryType = { [key: string]: string | number };

const jSearchRapidApiConfig = (query: QueryType): AxiosRequestConfig => {
  return {
    url: 'https://jsearch.p.rapidapi.com/search',
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2d33183cdemsh1762c97dd636f8cp1457dejsn7fc028b377a8',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  };
};

export { jSearchRapidApiConfig };
