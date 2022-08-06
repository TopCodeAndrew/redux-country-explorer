import { createSlice } from "@reduxjs/toolkit";

let initialPotential = [
    {
        name: {
            common: "This is initialPotential",
        },
    },
];

export const potentialCountriesSlice = createSlice({
    name: "potentialCountries",
    initialState: {
        value: initialPotential,
    },
    reducers: {
        setPotentialCountries: (state, action) => {
            state.value = action.payload;
        },
        deletePotentialCountries: (state) => {
            state.value = null;
        },
    },
});

export const { setPotentialCountries, deletePotentialCountries } =
    potentialCountriesSlice.actions;

export const selectPotentials = (state) => state.potentialCountries.value;

export default potentialCountriesSlice.reducer;
