import { apiSlice } from "./apiSlice";

export const cloverApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    generateOAuthToken: builder.mutation({
      query: (body) => ({
        url: 'clover/token/',
        method: 'POST',
        body,
      }),
    }),
    fetchPakmsKey: builder.mutation({
      query: (body) => ({
        url: 'clover/api-key/',
        method: 'POST',
        body,
      }),
    }),
    createCheckoutSession: builder.mutation({
      query: (body) => ({
        url: 'clover/checkout-session/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGenerateOAuthTokenMutation,
  useFetchPakmsKeyMutation,
  useCreateCheckoutSessionMutation,
} = cloverApi;
