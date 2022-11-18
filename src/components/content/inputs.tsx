import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { MockedDataProps } from '../../types';
import { InteractiveInput } from './interactiveInput';
import { InterfaceInput } from './interfaceInput';

export const Inputs: FC<MockedDataProps> = ({ mockedData, setMockedData }) => {
    return (
        <Box display="flex" gap="1rem">
            <InteractiveInput
                mockedData={mockedData}
                setMockedData={setMockedData}
            />
            <InterfaceInput
                mockedData={mockedData}
                setMockedData={setMockedData}
            />
        </Box>
    );
};
