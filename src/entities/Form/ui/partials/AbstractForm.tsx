import { Box, Heading } from '@chakra-ui/react';

import { AbstractChangeQuestion, AbstractQuestion, AbstractWriteQuestion } from 'shared/types/Tests';

import AbstractChangeForm from './AbstractChangeForm';
import AbstractWriteForm from './AbstractWriteForm';

type TPropsAbstractForm = {
    question: AbstractQuestion<string>;
};

export default function AbstractForm({ question }: TPropsAbstractForm) {
    return (
        <Box marginTop='30px'>
            <Heading
                as='h4'
                fontSize='20px'
            >
                {question.question}
            </Heading>
            {'variants' in question ? (
                <AbstractChangeForm question={question as AbstractChangeQuestion} />
            ) : (
                <AbstractWriteForm question={question as AbstractWriteQuestion} />
            )}
        </Box>
    );
}
