import { Field } from 'formik';

import { FormLabel } from '@chakra-ui/react';

import { AbstractChangeQuestion } from 'shared/types/Tests';

type TPropsAbstractChangeForm = {
    question: AbstractChangeQuestion;
};

export default function AbstractChangeForm({ question }: TPropsAbstractChangeForm) {
    return question.variants.map((answer: string) => (
        <FormLabel key={answer}>
            <Field
                name='answer'
                type={question.type}
                value={answer}
            />
            {answer}
        </FormLabel>
    ));
}
