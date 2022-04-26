import { createSlice } from '@reduxjs/toolkit';
import { Purchase } from '../models/Purchase';
import { Vignette } from '../models/Vignette';

export interface PurchaseState {
  purchases: Purchase[];
  currentPurchase: Purchase | null;
  isVignetteValid: boolean | null;
}

const initialState: PurchaseState = {
  purchases: [],
  currentPurchase: null,
  isVignetteValid: null,
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
    addPurchase: (state, action) => {
      state.currentPurchase = action.payload;
    },
    setIsVignetteValid: (state, action) => {
      console.log('aaa', action.payload);

      state.isVignetteValid = action.payload;
    },
  },
});

export const {
  getPurchases,
  getPurchaseById,
  addPurchase,
  setIsVignetteValid,
} = purchaseSlice.actions;
export const purchasesSelector = (state: { purchaseStore: PurchaseState }) =>
  state.purchaseStore;
export default purchaseSlice.reducer;
