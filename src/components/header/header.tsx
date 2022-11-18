import { HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

export const Header = () => {
    return (
        <Box
            display="flex"
            justifyContent="flex-end"
            paddingX="1rem"
            paddingY="0.5rem"
        >
            <HamburgerIcon focusable />
        </Box>
    );
};
