import React, { FC } from 'react';
import { Container, Button, Text, ButtonContainer } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface UFComponent {
    uf: any
}

const UF: FC<UFComponent> = ({uf}) => {
    return (
        <Container>
            <Button onPress={() => console.log("Clicado")}>
                <ButtonContainer>
                    <Text>{uf.fullName}</Text>      
                    <Icon name="angle-right" size={20} color={"#191055"}></Icon>
                </ButtonContainer>
            </Button>
        </Container>
    )
}

export default UF;