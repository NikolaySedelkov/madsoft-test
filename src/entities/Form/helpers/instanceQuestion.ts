import { AbstractQuestion, CheckboxQuestion, RadioQuestion, TextareaQuestion, TextQuestion } from 'shared/types/Tests';

export default function instanceQuestion(question: AbstractQuestion<string>) {
    if (question.type === 'change') return question as CheckboxQuestion;
    if (question.type === 'radio') return question as RadioQuestion;
    if (question.type === 'text') return question as TextQuestion;
    if (question.type === 'textarea') return question as TextareaQuestion;

    throw new Error('Неизвестный тип вопроса');
}
