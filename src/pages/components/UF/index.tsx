import React, { FC } from 'react';
import { Container, Button, Text } from './styles';

interface UFComponent {
    uf: any
}

const UF: FC<UFComponent> = ({uf}) => {
    return (
        <Container>
            <Button>
                <Text>{uf.fullName}</Text>
            </Button>
        </Container>
    )
}

export default UF;