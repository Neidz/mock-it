import { Box, ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/theme'

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box minHeight="100vh"></Box>
        </ChakraProvider>
    )
}
