import React, { FC } from 'react';
import { Container, Text, CityContainer } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CityComponent {
    city: any
}

const CityList: FC<CityComponent> = ({ city }) => {
    return (
        <Container>
            <CityContainer>
                <Text>{city.name}</Text>
                <Icon name="angle-right" size={20} color={"#191055"}></Icon>      
            </CityContainer>
        </Container>
    )
}

export default CityList;