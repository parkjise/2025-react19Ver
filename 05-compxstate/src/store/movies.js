import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		list: [
			{ id: 1, title: "Pulp Fiction" },
			{ id: 2, title: "Gozila" },
		],
	},
	reducer: {},
});

export default moviesSlice.reducer;
