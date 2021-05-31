import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

const Container = styled.View `
    display: flex;
    width: 100%;
    height: 30px;
    background-color: #fff;
    padding: 12px;
`

const StackHeader = ({ goBack }: any) => {
    return (
        <Container>
            <TouchableOpacity onPress={() => goBack()}>
                <Icon name="arrow-left" size={25} color={"#E50191"}></Icon>      
            </TouchableOpacity>
        </Container>
    )
}

export default StackHeader