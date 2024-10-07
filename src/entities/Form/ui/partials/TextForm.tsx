import { Field } from 'formik';

import { Box, Heading } from '@chakra-ui/react';

import { TextQuestion } from 'shared/types/Tests';

import AbstractWriteForm from './AbstractWriteForm';

type TPropsTextForm = {
    question: TextQuestion;
};

export default function TextForm({ question }: TPropsTextForm) {
    return <AbstractWriteForm question={question} />;
}
