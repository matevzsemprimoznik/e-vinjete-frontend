import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getVignettes } from '../store/features/vignetteSlice';
import { Vignette } from '../store/models/Vignette';
import { AppThunk } from '../store/store';
import { vignettesApi } from './axios';

export const getVignettesAsync = (): AppThunk => async (dispatch) => {
  try {
    const response = await vignettesApi.get('/');
    console.log(response);

    dispatch(getVignettes(response.data));
  } catch (err) {
    console.log(err);
  }
};
