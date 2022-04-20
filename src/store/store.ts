import { Action, AnyAction, configureStore } from '@reduxjs/toolkit';
import vignetteReducer, { VignetteState } from './features/vignetteSlice';
import { ThunkAction } from 'redux-thunk';
import purchaseReducer, { PurchaseState } from './features/purchaseSlice';

export type VignetteThunk = ThunkAction<
  void,
  { vignetteStore: VignetteState },
  undefined,
  AnyAction
>;

export type PurchaseThunk = ThunkAction<
  void,
  { purchaseStore: PurchaseState },
  undefined,
  AnyAction
>;

export const store = configureStore({
  reducer: {
    vignetteStore: vignetteReducer,
    purchaseStore: purchaseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
