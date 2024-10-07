import { Heading, Image } from '@chakra-ui/react';

import loader from '../assets/loader.svg';

/**
 * Отображения состояния загрузки тестирования
 */
export default function LoaderTest() {
    return (
        <>
            <Heading> Загрузка данных </Heading>
            <Image
                width='200px'
                src={loader}
            />
        </>
    );
}
