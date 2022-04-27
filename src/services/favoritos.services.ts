import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoritosApi= createApi({
    reducerPath: 'favoritosApi',
    tagTypes: ['Favoritos'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6269bb5caa65b5d23e88b018.mockapi.io/favoritos'}) ,
    endpoints: (builder) => ({
        getFavoritos: builder.query<{ id: number }[], number>({
            query: (n) => '',
        }),
        addFavorito: builder.mutation<number, number>({
            // note: an optional `queryFn` may be used in place of `query`
            query: (id) => ({
                url: ``,
                method: 'POST',
                body: {id: id},
            }),
            invalidatesTags: ['Favoritos'],
        })
    })
});

export const {useGetFavoritosQuery, useAddFavoritoMutation} = favoritosApi;