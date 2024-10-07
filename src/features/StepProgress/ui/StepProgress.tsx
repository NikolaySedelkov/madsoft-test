import { Box, Flex } from '@chakra-ui/react';

import { useAppSelector } from 'shared/customHooks/typedReduxHooks';

type TPropsStepView = {
    color: 'red' | 'black';
};

/**
 * Отображение структурной единицы прогресса теста
 */
function StepView({ color }: TPropsStepView) {
    return (
        <Box
            width='45px'
            height='5px'
            marginRight='7px'
            backgroundColor={color}
        />
    );
}

/**
 * Отображение количества ответов на вопрос и общего числа вопросов
 */
export default function StepProgress() {
    const countSteps = useAppSelector(state => state.testingData.data?.length);
    const currStep = useAppSelector(state => state.testingProgress.step);

    if (typeof countSteps === 'undefined') return null;

    const steps = new Array(countSteps);
    for (let i = 0; i < currStep; ++i) {
        steps[i] = (
            <StepView
                key={i}
                color='red'
            />
        );
    }

    for (let i = currStep; i < countSteps; ++i) {
        steps[i] = (
            <StepView
                key={i}
                color='black'
            />
        );
    }

    return <Flex>{steps}</Flex>;
}
