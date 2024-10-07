import { combineReducers, configureStore } from '@reduxjs/toolkit';

import testingDataSlice from 'pages/Testing/model/testingDataSlice';
import testingProgressSlice from 'pages/Testing/model/testingProgressSlice';

const reducer = combineReducers({
    testingProgress: testingProgressSlice,
    testingData: testingDataSlice,
});

export const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
