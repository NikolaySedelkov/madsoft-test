import { Global } from '@emotion/react';

/**
 * Глобальные стили для приложения
 */
export default function GlobalStyles() {
    return (
        <Global
            styles={{
                '*': {
                    margin: 0,
                    padding: 0,
                },
            }}
        />
    );
}
