import { createAsyncThunk } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
// eslint-disable-next-line no-restricted-imports
import { useDispatch, useSelector, useStore } from 'react-redux';

import { AppDispatch, AppStore, RootState } from 'store/store';

// Используется везде вместо стандартных `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
}>();
