import { Action, AnyAction, configureStore } from '@reduxjs/toolkit';
import vignetteReducer, { VignetteState } from './features/vignetteSlice';
import { ThunkAction } from 'redux-thunk';

export type AppThunk = ThunkAction<
  void,
  { vignetteStore: VignetteState },
  undefined,
  AnyAction
>;

export const store = configureStore({
  reducer: {
    vignetteStore: vignetteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
