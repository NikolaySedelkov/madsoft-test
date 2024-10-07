import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

import getLocalStorageTestProgress from '../helpers/getLocalStorageTestProgress';
import setLocalStorageTestProgress from '../helpers/setLocalStorageTestProgress';
import type { TTestingProgress } from './testingProgressType';

type TTestingProgressStatus = {
    isError: boolean;
    isEnd: boolean;
};

const initialState: TTestingProgress & TTestingProgressStatus = {
    answers: [] as (string | string[])[],
    timeToEnd: Number.MAX_SAFE_INTEGER,
    step: 0,
    id: Number.MIN_SAFE_INTEGER,
    isEnd: false,
    isError: false,
};

const testingProgressSlice = createSlice({
    name: 'testingProgress',
    initialState,
    reducers: {
        initialTesting(state) {
            const testProgressData = getLocalStorageTestProgress();

            if (typeof testProgressData !== 'undefined') {
                state.answers = testProgressData.answers;
                state.step = testProgressData.step;
                state.id = testProgressData.id;
                state.timeToEnd = testProgressData.timeToEnd;
                setLocalStorageTestProgress(testProgressData);
            } else {
                state.isError = true;
            }
        },

        reset(state, { payload }: PayloadAction<number>) {
            state.answers = [] as (string | string[])[];
            state.step = 0;
            state.id = payload;
            state.timeToEnd = Number.MAX_SAFE_INTEGER;
        },

        setEnd(state) {
            state.isEnd = true;
            state.timeToEnd = 0;
        },

        setTimeToEnd(state, { payload }: PayloadAction<number>) {
            state.timeToEnd = payload;
            setLocalStorageTestProgress(current(state));
        },

        nextStep(state, { payload }: PayloadAction<string | string[]>) {
            state.step += 1;
            state.answers.push(payload);
            setLocalStorageTestProgress(current(state));
        },
    },
});

export default testingProgressSlice.reducer;
export const { initialTesting, setEnd, nextStep, setTimeToEnd, reset } = testingProgressSlice.actions;
