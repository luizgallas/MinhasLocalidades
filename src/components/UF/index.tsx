import React, { FC } from 'react';
import { Container, Button, Text, ButtonContainer } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { selectUF } from '../../store/modules/UF/actions';
import { UF as UFType } from '../../store/modules/UF/types';

interface UFComponent {
    uf: UFType,
}

const UF: FC<UFComponent> = ({ uf }) => {
    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    function goToCities() {
        dispatch(selectUF(uf))
        navigate('City')
    }

    return (
        <Container>
            <Button onPress={() => goToCities()}>
                <ButtonContainer>
                    <Text>{uf.fullName}</Text>      
                    <Icon name="angle-right" size={20} color={"#191055"}></Icon>
                </ButtonContainer>
            </Button>
        </Container>
    )
}

export default UF;