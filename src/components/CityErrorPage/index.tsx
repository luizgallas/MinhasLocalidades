import React from 'react';

import { Container, Title, Text, StopIcon } from './styles';

export default function CityErrorPage() {
    return (
        <Container>
            <Title>Ops... Caminho errado!</Title>

            <Text>Para acessar a lista de cidades clique em um Estado no menu UF</Text>

            <StopIcon name={'hand-left-outline'} color="#E50191" size={100}/>
        </Container>
    )
}