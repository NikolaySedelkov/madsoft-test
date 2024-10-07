import { useLayoutEffect } from 'react';

import { Box } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from 'shared/customHooks/typedReduxHooks';

import { setEnd, setTimeToEnd } from 'pages/Testing/model/testingProgressSlice';

function toTime(ms: number) {
    const seconds = Math.floor(ms / 1000);

    return `${Math.floor(seconds / 60)} : ${(seconds % 60).toString().padStart(2, '0')}`;
}

/**
 * Отображение времени до конца тестирования
 */
export default function Timer() {
    const dispatch = useAppDispatch();

    const timeToEnd = useAppSelector(state => state.testingProgress.timeToEnd);

    useLayoutEffect(() => {
        const timeEnd = new Date(Date.now() + timeToEnd);
        const id = setInterval(() => {
            const newTimeValue = timeEnd.getTime() - Date.now();
            if (newTimeValue < 0) {
                dispatch(setEnd());
            } else {
                dispatch(setTimeToEnd(Math.floor(newTimeValue)));
            }
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <Box
            padding='0 4px'
            width='100px'
            textAlign='center'
            height='50px'
            lineHeight='50px'
            border='1px solid gray'
            borderRadius='5px'
        >
            {toTime(timeToEnd)}
        </Box>
    );
}
