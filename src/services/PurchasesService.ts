import { getPurchases } from '../store/features/purchaseSlice';
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
