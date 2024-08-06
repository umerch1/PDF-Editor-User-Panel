import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
    reducerPath: 'myApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:6005/"
    }),
    tagTypes: ['Auths'],
    endpoints: (bulder) => ({
        getUser: bulder.query<Array<object>[], any>({
            query: () => 'auth/user',
            providesTags: ['Auths']
        }),
        deleteUser: bulder.mutation<any, number | string>({
            query: (id) => ({
                url: `auth/user/delete`,
                method: 'DELETE',
                body: { id },
                headers: {
                    "Content-Type": "application/json"
                }

            }),
            invalidatesTags: ['Auths']
        }),

        loginUser: bulder.mutation<any, any>({
            query: (post) => ({
                url: 'auth/login',
                method: 'POST',
                body: post,
                headers: {
                    "Content-Type": "application/json"
                }
            }),
        }),
        loginAdmin: bulder.mutation<any, any>({
            query: (data) => ({
                url: 'auth/admin/login',
                method: 'POST',
                body: data,
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }),
        registerUser: bulder.mutation<any, any>({
            query: (post) => ({
                url: 'auth/register',
                method: 'POST',
                body: post,
                headers: {
                    "Content-Type": "application/json"
                }
            }),
        }),
        resetPassword: bulder.mutation<any, any>({
            query: (body) => ({
                url: 'auth/reset-password',
                method: 'PUT',
                body,
                headers: {
                    "Content-Type": "application/json"
                }
            })
        })

    }),
});
export const { useGetUserQuery, useDeleteUserMutation, useLoginUserMutation,useLoginAdminMutation, useRegisterUserMutation, useResetPasswordMutation } = myApi;