import React from 'react';
import { Container, Title, TextDescription, Text, LinkText, BigText } from './styles';

export default function About() {
    return (
        <Container>
            <Title>Sobre o Minha Localidade</Title>
            <TextDescription>
                O aplicativo Minha Localidade tem por sua finalidade realizar um
                 treinamento para os colaboradores da Compasso que desejam treinar
                  suas habilidades com React Native + Typescript + Redux + React Navigation.
            </TextDescription>

            <Text>As cores utilizadas são as que encontramos no site Livelo:</Text>

            <Container>
                <Text>Rosa Livelo - #E50191</Text>
            </Container>

            <Container>
                <Text>Azul Livelo - #191055</Text>
            </Container>

            <Container>
                <Text>A fonte utilizada é a:</Text>
                <BigText>SIGNIKA</BigText>
            </Container>

            <Text>Todo conteúdo é consumindo a API de Localidades do IBGE:</Text>
            <LinkText>https://servicodados.ibge.gov.br/api/docs/localidades</LinkText>

        </Container>
    )
}