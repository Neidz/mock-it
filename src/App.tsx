import { Box, ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/header/header'
import { Inputs } from './components/content/inputs'
import { Output } from './components/content/output'
import { theme } from './theme/theme'

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box
                minHeight="100vh"
                backgroundColor="customBlue.900"
                color="whiteAlpha.800"
                display="flex"
                flexDirection="column"
                gap="2rem"
            >
                <Header></Header>
                <Box
                    paddingX="2rem"
                    display="flex"
                    flexDirection="column"
                    gap="2rem"
                >
                    <Inputs></Inputs>
                    <Output></Output>
                </Box>
            </Box>
        </ChakraProvider>
    )
}
