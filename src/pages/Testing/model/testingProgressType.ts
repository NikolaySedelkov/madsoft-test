export type TTestingProgress = {
    answers: (string | string[])[];
    step: number;
    id: number;
    timeToEnd: number;
};

/**
 * Type Guard для типа @see {TTestingProgress}
 *
 * @param obj - Данные для проверка
 */
export function isTestingData(obj: any): obj is TTestingProgress {
    return (
        'answers' in obj &&
        Array.isArray(obj.answers) &&
        obj.answers.every(
            (item: any) =>
                typeof item === 'string' ||
                (Array.isArray(item) && item.every((subItem: any) => typeof subItem === 'string'))
        ) &&
        'step' in obj &&
        typeof obj.step === 'number' &&
        'id' in obj &&
        typeof obj.id === 'number' &&
        'timeToEnd' in obj &&
        typeof obj.timeToEnd === 'number'
    );
}
