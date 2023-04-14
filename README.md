# 🔎 Job Search React Native App

![](https://cdn.dribbble.com/users/1314493/screenshots/11867493/media/4f00b6a24f60c59418c240b9129220be.png)

Inspired by [`JS MASTERY`](https://github.com/adrianhajdin/project_react_native_jobs)'s tutorial. This is a job search mobile application built with [`React Native`](https://github.com/facebook/react-native). The app uses [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory. The application allows users to search for jobs based on keywords, location, and job type.

## ✨ Features

- Search for jobs by keywords, location, and job type
- View detailed job descriptions and apply to jobs directly from the app

## 🔨 Development

To run the application locally, follow these steps:

1. Clone the repository onto your local machine
2. Install all dependencies with `npm install`
3. Start the Expo development server with `npm start`
4. Scan the QR code with the Expo app on your mobile device to view the application

## 📝 Notes

1. This app fetches data from [`RapidAPI JSearch`](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)
2. Go to `/src/env.ts` file and replace the api key with your own key
3. Comment out the following lines in `src/hooks/useSWRDataFetch.ts` in order to use the rapid api data fetching feature

```ts
const mock = new MockAdapter(axios, { delayResponse: 800 });
mock.onGet('https://jsearch.p.rapidapi.com/search').reply(200, mockJobsResponse);
mock.onGet('https://jsearch.p.rapidapi.com/job-details').reply(200, mockJobDetailResponse);
```
