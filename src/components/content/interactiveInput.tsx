import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { MockedDataProps } from '../../types';
import { CardWrapper } from './components/cardWrapper';

export const InteractiveInput: FC<MockedDataProps> = ({
    mockedData,
    setMockedData,
}) => {
    return (
        <CardWrapper>
            <Box>
                <Text>{mockedData}</Text>
            </Box>
        </CardWrapper>
    );
};
