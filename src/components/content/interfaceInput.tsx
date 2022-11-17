import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'
import { FC } from 'react'
import { CardWrapper } from './components/cardWrapper'

export const InterfaceInput: FC = () => {
    const lorem =
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus impedit esse recusandae iste? Veritatis nisi omnis quae possimus. Voluptates, vero sunt? Laborum optio, porro odit quasi eum accusantium ut perferendis.'

    return (
        <CardWrapper>
            <Editable placeholder={lorem}>
                <EditableInput></EditableInput>
                <EditablePreview />
            </Editable>
        </CardWrapper>
    )
}
