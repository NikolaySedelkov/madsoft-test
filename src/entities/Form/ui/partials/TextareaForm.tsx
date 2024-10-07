import { TextareaQuestion } from 'shared/types/Tests';

import AbstractWriteForm from './AbstractWriteForm';

type TPropsTextareaForm = {
    question: TextareaQuestion;
};

export default function TextareaForm({ question }: TPropsTextareaForm) {
    return <AbstractWriteForm question={question} />;
}
