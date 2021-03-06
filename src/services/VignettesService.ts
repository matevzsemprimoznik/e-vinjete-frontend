import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  addVignette,
  deleteVignette,
  getVignetteById,
  getVignettes,
} from '../store/features/vignetteSlice';
import { Vignette } from '../store/models/Vignette';
import { VignetteThunk } from '../store/store';
import { vignettesApi } from './axios';

export const getVignettesAsync = (): VignetteThunk => async (dispatch) => {
  try {
    const response = await vignettesApi.get('/');
    console.log(response);

    dispatch(getVignettes(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const addVignetteAsync =
  (vignette: Vignette): VignetteThunk =>
  async (dispatch) => {
    try {
      const response = await vignettesApi.post('/', vignette);
      console.log(response);

      dispatch(addVignette(response.data));
    } catch (err) {
      console.log(err);
    }
  };
export const getVignetteByIdAsync =
  (id: string): VignetteThunk =>
  async (dispatch) => {
    try {
      const response = await vignettesApi.get(`/${id}`);
      console.log(response);

      dispatch(getVignetteById(response.data));
    } catch (err) {
      console.log(err);
    }
  };

export const deleteViggneteAsync =
  (id: string): VignetteThunk =>
  async (dispatch) => {
    try {
      const response = await vignettesApi.delete(`/${id}`);

      dispatch(deleteVignette(response.data));
    } catch (err) {
      console.log(err);
    }
  };
