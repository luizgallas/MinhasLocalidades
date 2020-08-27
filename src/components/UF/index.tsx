import React, { FC } from 'react';
import { Container, Button, Text, ButtonContainer } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

interface UFComponent {
    uf: any,
}

const UF: FC<UFComponent> = ({uf}) => {
    const { navigate } = useNavigation();

    return (
        <Container>
            <Button onPress={() => navigate('City', {uf: uf})}>
                <ButtonContainer>
                    <Text>{uf.fullName}</Text>      
                    <Icon name="angle-right" size={20} color={"#191055"}></Icon>
                </ButtonContainer>
            </Button>
        </Container>
    )
}

export default UF;