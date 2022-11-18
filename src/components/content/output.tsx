import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { CardWrapper } from './components/cardWrapper';

interface OutputProps {
    mockedData: string;
}

export const Output: FC<OutputProps> = ({ mockedData }) => {
    return (
        <CardWrapper>
            <Text>{mockedData}</Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                nisi recusandae autem vel. Assumenda expedita saepe sequi
                facilis rem? Ipsum enim porro sunt explicabo saepe odio tempore
                impedit tempora aspernatur?
            </Text>
        </CardWrapper>
    );
};
