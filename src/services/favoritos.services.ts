import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FavList } from '../types/personaje.types';

export const favoritosApi= createApi({
    reducerPath: 'favoritosApi',
    tagTypes: ['Favoritos'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://digital-api.fly.dev/api/collections/favoritos/records"}) ,
    endpoints: (builder) => ({
        getFavoritos: builder.query<FavList, string>({
            query: ()=>"",
            providesTags: ["Favoritos"]
        }),
        addFavorito: builder.mutation<string, string>({
            // note: an optional `queryFn` may be used in place of `query`
            query: (name) => ({
                url: ``,
                method: 'POST',
                body: {name: name}
            }),
            invalidatesTags: ['Favoritos'],
        }),
        deleteFavortio: builder.mutation<string, string>({
            // note: an optional `queryFn` may be used in place of `query`
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                body: {id: id}
            }),
            invalidatesTags: ['Favoritos'],
        })
    })
});

export const { useAddFavoritoMutation, useGetFavoritosQuery, useDeleteFavortioMutation } = favoritosApi;