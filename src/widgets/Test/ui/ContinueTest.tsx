import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/customHooks/typedReduxHooks';

import { initialTesting } from 'pages/Testing/model/testingProgressSlice';

import Test from './Test';

/**
 * Компонент продолжения тестирования
 */
export default function ContinueTest() {
    const dispath = useAppDispatch();

    const id = useAppSelector(state => state.testingProgress.id);
    const timeToEnd = useAppSelector(state => state.testingProgress.timeToEnd);

    useEffect(() => {
        dispath(initialTesting());
    }, []);

    return (
        <Test
            id={id}
            time={timeToEnd}
        />
    );
}
