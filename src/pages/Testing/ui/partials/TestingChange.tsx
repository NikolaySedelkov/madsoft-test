import { useNavigate } from 'react-router-dom';

import { Flex, Button } from '@chakra-ui/react';

import { useAppDispatch } from 'shared/customHooks/typedReduxHooks';

import { reset } from 'pages/Testing/model/testingProgressSlice';

const ID = 1;

/**
 * Выбор типа тестирования
 */
export default function TestingChange() {
    const dispath = useAppDispatch();
    const navigate = useNavigate();
    return (
        <Flex>
            <Button
                onClick={_ => {
                    navigate(`/test/${ID}`);
                    dispath(reset(ID));
                }}
                marginRight='25px'
            >
                Начать новый тест
            </Button>
            <Button
                onClick={_ => {
                    navigate('/test/continue');
                }}
            >
                Продолжить прохождение
            </Button>
        </Flex>
    );
}
