import React, { FC } from 'react';
import { Container, Text, CityContainer } from './styles';

interface CityComponent {
    city: any
}

const CityList: FC<CityComponent> = ({city}) => {
    return (
        <Container>
            <CityContainer>
                <Text>{city.name}</Text>      
            </CityContainer>
        </Container>
    )
}

export default CityList;