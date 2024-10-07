import { RadioQuestion } from 'shared/types/Tests';

import AbstractChangeForm from './AbstractChangeForm';

type TPropsChangeForm = {
    question: RadioQuestion;
};

export default function RadioForm({ question }: TPropsChangeForm) {
    return <AbstractChangeForm question={question} />;
}
