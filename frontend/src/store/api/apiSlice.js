// src/services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const myBaseQuery = fetchBaseQuery({
  baseUrl: `https://the-cage-online.onrender.com/api/`,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      console.log("API Token:", token); 
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("content-type", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: myBaseQuery,
  tagTypes: ["User", "Product", "Order", "Auth"],
  endpoints: () => ({}),
});