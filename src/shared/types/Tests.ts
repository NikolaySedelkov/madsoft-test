export type TTypeTest = 'change' | 'radio' | 'text' | 'textarea';

/**
 * Абстрактный вопрос
 */
export class AbstractQuestion<T extends string> {
    /**
     * Вопрос
     */
    readonly question: string;
    /**
     * Тип вопроса
     */
    readonly type: T;

    constructor(question: string, type: T) {
        this.question = question;
        this.type = type;
    }
}

/**
 * Абстрактный вопрос c выбором
 */
export class AbstractChangeQuestion extends AbstractQuestion<'change' | 'radio'> {
    /**
     * Варианты ответа
     */
    readonly variants: string[];
    constructor(question: string, type: 'change' | 'radio', variants: string[]) {
        super(question, type);
        this.variants = variants;
    }
}

/**
 * Вопрос с выбором сheckbox
 */
export class CheckboxQuestion extends AbstractChangeQuestion {
    constructor(question: string, variants: string[]) {
        super(question, 'change', variants);
    }
}

/**
 * Вопрос с выбором radio
 */
export class RadioQuestion extends AbstractChangeQuestion {
    constructor(question: string, variants: string[]) {
        super(question, 'radio', variants);
    }
}

/**
 * Абстрактный вопрос c вводом ответа открытого типа
 */
export class AbstractWriteQuestion extends AbstractQuestion<'text' | 'textarea'> {
    constructor(question: string, type: 'text' | 'textarea') {
        super(question, type);
    }
}

/**
 * Абстрактный вопрос c вводом короткого ответа открытого типа
 */
export class TextQuestion extends AbstractWriteQuestion {
    constructor(question: string) {
        super(question, 'text');
    }
}

/**
 * Абстрактный вопрос c вводом длиного ответа открытого типа
 */
export class TextareaQuestion extends AbstractWriteQuestion {
    constructor(question: string) {
        super(question, 'textarea');
    }
}
