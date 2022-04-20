import { createSlice } from '@reduxjs/toolkit';
import { Purchase } from '../models/Purchase';
import { Vignette } from '../models/Vignette';

export interface PurchaseState {
  purchases: Purchase[];
  currentPurchase: Purchase | null;
}

const initialState: PurchaseState = {
  purchases: [],
  currentPurchase: null,
};

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    getPurchases: (state, action) => {
      state.purchases = action.payload;
    },
  },
});

export const { getPurchases } = purchaseSlice.actions;
export const purchasesSelector = (state: { purchaseStore: PurchaseState }) =>
  state.purchaseStore;
export default purchaseSlice.reducer;
