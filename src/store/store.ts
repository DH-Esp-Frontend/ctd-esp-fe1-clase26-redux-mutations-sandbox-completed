import {configureStore} from "@reduxjs/toolkit";
import personajesReducer from "../reducers/personajesReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {personajesApi} from "../services/personaje.services";

export const store = configureStore({
    reducer: {
        //
        // Add the generated reducer as a specific top-level slice
        [personajesApi.reducerPath]: personajesApi.reducer,
        //
        personajes: personajesReducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(personajesApi.middleware),
})
// Infiere los tipos del `RootState` y `AppDispatch` de la store
export type RootState = ReturnType<typeof store.getState>
// Tipo inferido: {pokemon: PokemonState}
export type AppDispatch = typeof store.dispatch

// Usa los siguientes hooks en la app en vez de los `useDispatch` y `useSelector` planos de Redux
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector