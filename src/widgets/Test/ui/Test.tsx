import { useEffect } from 'react';

import { Box, Flex, Heading } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from 'shared/customHooks/typedReduxHooks';

import Form from 'entities/Form/ui/Form';

import StepProgress from 'features/StepProgress/ui/StepProgress';
import Timer from 'features/Timer/ui/Timer';

import { TestingProgressStatusType } from 'pages/Testing/constants/testingProgressStatusType';
import { requestTestingData } from 'pages/Testing/model/testingDataSlice';
import { setTimeToEnd } from 'pages/Testing/model/testingProgressSlice';

import LoaderTest from './partials/Loader';

type TPropsTest = {
    id: number;
    time: number;
};

/**
 * Компонент тестирования
 *
 * @param props.id  id теста
 * @param props.time  время на прохождение теста
 * @returns
 */
export default function Test({ id, time }: TPropsTest) {
    const dispath = useAppDispatch();

    const testingDataStatus = useAppSelector(state => state.testingData.status);

    useEffect(() => {
        dispath(requestTestingData(id));
        dispath(setTimeToEnd(time));
    }, [id]);

    if (testingDataStatus === TestingProgressStatusType.LOADING) return <LoaderTest />;

    return (
        <Box>
            <Flex marginBottom='35px'>
                <Heading marginRight='15px'>Тестирование</Heading>
                <Timer />
            </Flex>
            <StepProgress />
            <Form />
        </Box>
    );
}
