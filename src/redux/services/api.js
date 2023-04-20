import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coreApi = createApi({
  reducerPath: 'coreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '../src/db/music_db.json',
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = coreApi;
