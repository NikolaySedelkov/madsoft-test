import { CheckboxQuestion } from 'shared/types/Tests';

import AbstractChangeForm from './AbstractChangeForm';

type TPropsChangeForm = {
    question: CheckboxQuestion;
};

export default function CheckboxForm({ question }: TPropsChangeForm) {
    return <AbstractChangeForm question={question} />;
}
