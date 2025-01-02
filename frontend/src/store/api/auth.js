import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Login
    login: builder.mutation({
      // export const login = ( email, password )
      query: (credentials) => ({
        url: "auth/dj-rest-auth/login/",
        method: "POST",
        body: credentials,
      }),
    }),
    // Verify Token
    verify: builder.mutation({
      query: (token) => ({
        url: "auth/dj-rest-auth/token/verify/",
        method: "POST",
        body: { token },
      }),
      invalidatesTags: ["Auth"],
    }),
    // Get User
    getUser: builder.query({
      query: () => "auth/dj-rest-auth/user/",
      providesTags: ["Auth"],
    }),
    // Refresh Token
    refresh: builder.mutation({
      query: () => ({
        url: "auth/dj-rest-auth/token/refresh/",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    // Change Password
    changePassword: builder.mutation({
      // export const changePassword = ( new_password1, new_password2, old_password )
      query: (passwords) => ({
        url: "auth/dj-rest-auth/password/change/",
        method: "POST",
        body: passwords,
      }),
      invalidatesTags: ["Auth"],
    }),
    // Logout
    logout: builder.mutation({
      query: () => ({
        url: "auth/dj-rest-auth/logout/",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    // Signup
    register: builder.mutation({
      // export const signup = ( email, first_name, last_name, password1, password2 )
      query: (userData) => ({
        url: "auth/dj-rest-auth/registration/",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),
    // Email Verification
    emailVerification: builder.mutation({
      query: (key) => ({
        url: "auth/dj-rest-auth/registration/verify-email/",
        method: "POST",
        body: { key },
      }),
      invalidatesTags: ["Auth"],
    }),
    // Reset Password
    resetPassword: builder.mutation({
      query: (email) => ({
        url: "auth/dj-rest-auth/password/reset/",
        method: "POST",
        body: { email },
      }),
      invalidatesTags: ["Auth"],
    }),
    // Reset Password Confirm
    resetPasswordConfirm: builder.mutation({
      // export const resetPasswordConfirm = ( uid, token, new_password1, new_password2 )
      query: (data) => ({
        url: "auth/dj-rest-auth/password/reset/confirm/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    // Google Authentication
    googleLogin: builder.mutation({
      query: (code) => ({
        url: "auth/dj-rest-auth/google/",
        method: "POST",
        body: { code },
      }),
      invalidatesTags: ["Auth"],
    }),
    // Facebook Authentication
    facebookLogin: builder.mutation({
      query: (code) => ({
        url: "auth/dj-rest-auth/facebook/",
        method: "POST",
        body: { code },
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useVerifyMutation,
  useGetUserQuery,
  useRefreshMutation,
  useChangePasswordMutation,
  useLogoutMutation,
  useRegisterMutation,
  useEmailVerificationMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useGoogleLoginMutation,
  useFacebookLoginMutation,
} = authApi;
