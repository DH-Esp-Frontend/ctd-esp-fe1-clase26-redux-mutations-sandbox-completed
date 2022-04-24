import {PersonajesResult} from "../types/personaje.types";
// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const personajesApi= createApi({
    reducerPath: 'personajesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/'}) ,
    endpoints: (builder) => ({
        getPersonajes: builder.query<PersonajesResult, string>({
            query: (name) => name ? `?name=${name}` : '',
        })
    })
});

export const {useGetPersonajesQuery} = personajesApi;