import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = "";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com'}),
  endpoints: builder => ({
    getMovie: builder.query({
      query: searchTerm => `?apikey=${apiKey}&t=${searchTerm}`
    })
  })
})

export const { useGetMovieQuery } = apiSlice