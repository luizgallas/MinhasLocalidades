import React, { FC } from 'react';
import { Container, Text, CityContainer } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { selectCity } from '../../store/modules/City/actions';

interface CityComponent {
    city: any
}

const CityList: FC<CityComponent> = ({ city }) => {
    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    function gotToDistricts() {
        dispatch(selectCity(city));
        navigate('District')
    }

    return (
        <Container>
            <CityContainer onPress={() => gotToDistricts()}>
                <Text>{city.name}</Text>
                <Icon name="angle-right" size={20} color={"#191055"}></Icon>      
            </CityContainer>
        </Container>
    )
}

export default CityList;