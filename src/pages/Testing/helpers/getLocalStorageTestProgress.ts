import { isTestingData, type TTestingProgress } from 'pages/Testing/model/testingProgressType';

/**
 * Получение данных прогресса теста из localStorage
 */
export default function getLocalStorageTestProgress(): TTestingProgress | undefined {
    const data = localStorage.getItem('testData');

    if (data === null) return undefined;

    const obj = JSON.parse(data);
    if (isTestingData(obj)) {
        return obj as TTestingProgress;
    } else {
        return undefined;
    }
}
