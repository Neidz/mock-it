import { Box, ChakraProvider } from '@chakra-ui/react'

export const App = () => {
    return (
        <ChakraProvider>
            <Box minHeight="100vh"></Box>
        </ChakraProvider>
    )
}
