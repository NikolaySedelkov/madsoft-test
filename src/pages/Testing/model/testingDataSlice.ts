import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { AbstractQuestion } from 'shared/types/Tests';

import { TestingProgressStatusType } from '../constants/testingProgressStatusType';

export const requestTestingData = createAsyncThunk<{ default: AbstractQuestion<string>[] }, number>(
    'data/testingData/request/script',
    async id => {
        const tests = import.meta.glob<boolean, string, { default: AbstractQuestion<string>[] }>(`shared/tests/*.json`);
        return tests[`/src/shared/tests/${id}.json`]();
    }
);

type TTestingDataStatusType = {
    status: TestingProgressStatusType;
    error?: string | undefined;
};

type TTestingData = {
    data: AbstractQuestion<string>[] | null;
};

const initialState: TTestingDataStatusType & TTestingData = {
    status: TestingProgressStatusType.WAIT,
    data: null,
};

const testingDataSlice = createSlice({
    name: 'testingData',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(requestTestingData.pending, state => {
                state.status = TestingProgressStatusType.LOADING;
            })
            .addCase(requestTestingData.fulfilled, (state, { payload }) => {
                state.status = TestingProgressStatusType.SUCCEEDED;
                state.data = payload.default;
            })
            .addCase(requestTestingData.rejected, (state, action) => {
                state.status = TestingProgressStatusType.FAILED;
                state.error = action.error.message;
            });
    },
});

export default testingDataSlice.reducer;
