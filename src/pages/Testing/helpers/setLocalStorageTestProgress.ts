import type { TTestingProgress } from '../model/testingProgressType';

/**
 * Запись данных прогресса теста в localStorage
 * @param data - Данные для записи в localStorage
 */
export default function setLocalStorageTestProgress(data: TTestingProgress) {
    localStorage.setItem('testData', JSON.stringify(data));
}
