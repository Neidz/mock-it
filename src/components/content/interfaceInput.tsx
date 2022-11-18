import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { MockedDataProps } from '../../types';
import { createMockFromInterface } from '../../utils/interfaceParsing';
import { CardWrapper } from './components/cardWrapper';

export const InterfaceInput: FC<MockedDataProps> = ({
    mockedData,
    setMockedData,
}) => {
    const [inputInterface, setInputInterface] = useState<string>('');

    useEffect(() => {
        setMockedData(createMockFromInterface(inputInterface));
    }, [inputInterface, setMockedData]);

    return (
        <CardWrapper>
            <Editable
                placeholder="Paste your interface here"
                onChange={(value) => setInputInterface(value)}
            >
                <EditableInput></EditableInput>
                <EditablePreview />
            </Editable>
        </CardWrapper>
    );
};
