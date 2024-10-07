import { Form as FormikForm, Formik } from 'formik';

import { Button } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from 'shared/customHooks/typedReduxHooks';

import { nextStep } from 'pages/Testing/model/testingProgressSlice';

import AbstractForm from './partials/AbstractForm';

function FormContent() {
    const step = useAppSelector(state => state.testingProgress.step);
    const question = useAppSelector(state => state.testingData.data?.at(step));

    if (typeof question === 'undefined') return null;
    return (
        <FormikForm>
            <AbstractForm question={question} />
            <Button
                marginTop='30px'
                type='submit'
            >
                Ответить
            </Button>
        </FormikForm>
    );
}

export default function Form() {
    const dispatch = useAppDispatch();

    return (
        <Formik
            initialValues={{
                answer: '',
            }}
            onSubmit={(value, { resetForm }) => {
                resetForm();
                dispatch(nextStep(value.answer));
            }}
        >
            {FormContent}
        </Formik>
    );
}
