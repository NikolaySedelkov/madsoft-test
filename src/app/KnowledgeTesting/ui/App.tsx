import { Box } from '@chakra-ui/react';

import Testing from 'pages/Testing/ui/Testing';

import GlobalStyles from './partials/GlobalStyles';

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Box
                width='100vw'
                height='100vh'
            >
                <Testing />
            </Box>
        </>
    );
}
