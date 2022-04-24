import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export type PersonajesState = {
    busqueda: string;
}

const initialState: PersonajesState = {
    busqueda: ""
};

export const personajesSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: {
        buscarPersonajes: (state, action: PayloadAction<string>) => {
            state.busqueda = action.payload
        },
    },
});

export const { buscarPersonajes } = personajesSlice.actions

export const selectBusqueda = (state: RootState) => state.personajes.busqueda;

export default personajesSlice.reducer;