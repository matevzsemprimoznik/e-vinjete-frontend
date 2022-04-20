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
    getPurchaseById: (state, action) => {
      state.currentPurchase = action.payload;
    },
  },
});

export const { getPurchases, getPurchaseById } = purchaseSlice.actions;
export const purchasesSelector = (state: { purchaseStore: PurchaseState }) =>
  state.purchaseStore;
export default purchaseSlice.reducer;
