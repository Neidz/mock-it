import { Box } from '@chakra-ui/react'
import { InteractiveInput } from './interactiveInput'
import { InterfaceInput } from './interfaceInput'

export const Inputs = () => {
    return (
        <Box display="flex" gap="1rem">
            <InteractiveInput />
            <InterfaceInput />
        </Box>
    )
}
