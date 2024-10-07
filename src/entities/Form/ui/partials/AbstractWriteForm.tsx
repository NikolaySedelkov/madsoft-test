import { Field } from 'formik';

import { AbstractWriteQuestion } from 'shared/types/Tests';

import style from '../Form.module.css';

type TPropsAbstractWriteForm = {
    question: AbstractWriteQuestion;
};

export default function AbstractWriteForm({ question }: TPropsAbstractWriteForm) {
    return question.type === 'textarea' ? (
        <Field
            className={style.controlTextarea}
            name='answer'
            as='textarea'
        />
    ) : (
        <Field
            className={style.controlText}
            name='answer'
            type={question.type}
        />
    );
}
