import React, { FC } from 'react';
import { Container, Text, DistrictContainer } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DistrictComponent {
    district: any
}

const DistrictList: FC<DistrictComponent> = ({ district }) => {
    return (
        <Container>
            <DistrictContainer>
                <Text>{district.name}</Text>
            </DistrictContainer>
        </Container>
    )
}

export default DistrictList;