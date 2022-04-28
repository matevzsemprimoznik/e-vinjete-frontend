import {
  addPurchase,
  deletePurchase,
  getPurchaseById,
  getPurchases,
  setIsVignetteValid,
} from '../store/features/purchaseSlice';
import { Purchase } from '../store/models/Purchase';
import { PurchaseThunk } from '../store/store';
import { purchasesApi } from './axios';

export const getPurchasesAsync = (): PurchaseThunk => async (dispatch) => {
  try {
    const response = await purchasesApi.get('/');
    console.log(response);

    dispatch(getPurchases(response.data));
  } catch (err) {
    console.log(err);
  }
};
export const getPurchaseByIdAsync =
  (id: string): PurchaseThunk =>
  async (dispatch) => {
    try {
      const response = await purchasesApi.get(`/${id}`);
      console.log(response);

      dispatch(getPurchaseById(response.data));
    } catch (err) {
      console.log(err);
    }
  };
export const addPurchaseAsync =
  (purchase: Purchase): PurchaseThunk =>
  async (dispatch) => {
    try {
      const response = await purchasesApi.post('/', purchase);
      console.log(response);

      dispatch(addPurchase(response.data));
    } catch (err) {
      console.log(err);
    }
  };
export const checkIfVignetteIsValid =
  (registrskaOznaka: string): PurchaseThunk =>
  async (dispatch) => {
    try {
      const response = await purchasesApi.get(
        `/preverba-vinjete/${registrskaOznaka}`
      );
      console.log(response.data);

      dispatch(setIsVignetteValid(response.data));
    } catch (err) {
      console.log(err);
    }
  };
export const deletePurchaseAsync =
  (id: string): PurchaseThunk =>
  async (dispatch) => {
    try {
      const response = await purchasesApi.delete(`/${id}`);

      dispatch(deletePurchase(response.data));
    } catch (err) {
      console.log(err);
    }
  };
