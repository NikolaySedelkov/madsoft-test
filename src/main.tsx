import App from 'app/KnowledgeTesting/ui/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </StrictMode>
);
