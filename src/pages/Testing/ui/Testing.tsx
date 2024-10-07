import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';

import { Box, Heading } from '@chakra-ui/react';

import ContinueTest from 'widgets/Test/ui/ContinueTest.tsx';
import Test from 'widgets/Test/ui/Test.tsx';

import { store } from '../../../store/store';

import TestingChange from './partials/TestingChange.tsx';
import { useAppSelector } from 'shared/customHooks/typedReduxHooks.ts';
import { useEffect } from 'react';

/**
 * Общее визуальное оформление страницы тестирования
 */
function TestingStage() {
    const navigate = useNavigate();

    const isEnd = useAppSelector(state => state.testingProgress.isEnd);
    useEffect(()=> {
        if(isEnd) {
            navigate('/test/finish');
        }
    },[isEnd]);

    return (
        <>
            <Box
                width='100%'
                height='100%'
                paddingLeft='200px'
                position='relative'
            >
                <Box
                    position='relative'
                    top='25%'
                >
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}

/**
 * Схема route'ов для страницы тестирования
 */
export default function Testing() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/test'
                        element={<TestingStage />}
                    >
                        <Route
                            path='change'
                            element={<TestingChange />}
                        />
                        <Route
                            path=':id'
                            element={<PrepareTest />}
                        />
                        <Route
                            path='continue'
                            element={<ContinueTest />}
                        />
                        <Route
                            path='finish'
                            element={<Heading> Конец теста! </Heading>}
                        />
                    </Route>
                    <Route
                        path='*'
                        element={<Navigate to='/test/change' />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

/**
 * Proxy-компонент, в котором извлекает url-параметр id-теста
 */
function PrepareTest() {
    const { id } = useParams();

    if (typeof id === 'undefined') return <Navigate to='/test/change' />;

    return (
        <Test
            id={+id}
            time={100000}
        />
    );
}
