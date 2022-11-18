import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface CardWrapperProps {
    children: ReactNode;
}

export const CardWrapper: FC<CardWrapperProps> = ({ children }) => {
    return (
        <Box
            backgroundColor="whiteAlpha.200"
            borderColor="customBlue.500"
            borderRadius="14px"
            borderWidth="2px"
            minHeight="30vh"
            padding="12px"
            width="100%"
        >
            {children}
        </Box>
    );
};
