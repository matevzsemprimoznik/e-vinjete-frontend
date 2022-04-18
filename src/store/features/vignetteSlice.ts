import { createSlice } from '@reduxjs/toolkit';
import { Vignette } from '../models/Vignette';

export interface VignetteState {
  vignettes: Vignette[];
  currentVignette: Vignette[] | null;
}

const initialState: VignetteState = {
  vignettes: [],
  currentVignette: null,
};

export const vignetteSlice = createSlice({
  name: 'vignette',
  initialState,
  reducers: {
    getVignettes: (state, action) => {
      state.vignettes = action.payload;
    },
  },
});

export const { getVignettes } = vignetteSlice.actions;
export const vignettesSelector = (state: { vignetteStore: VignetteState }) =>
  state.vignetteStore;
export default vignetteSlice.reducer;
