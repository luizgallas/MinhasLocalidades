import React from 'react';
import { Container,
        Title,
        TextDescription,
        Text, LinkText,
        BigText,
        IconText,
        IconContainer,
        OutsideIconContainer,
        FontContainer,
        SecundaryText }
    from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

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

            <OutsideIconContainer>
                <IconContainer>
                    <Icon name='circle' color='#E50191' size={32} ></Icon>
                    <IconText>Rosa Livelo - #E50191</IconText>
                 </IconContainer>

                <IconContainer>
                    <Icon name='circle' color='#191055' size={32} ></Icon>
                    <IconText>Azul Livelo - #191055</IconText>
                </IconContainer>
            </OutsideIconContainer>

            <FontContainer>
                <SecundaryText>A fonte utilizada é a:</SecundaryText>
                <BigText>SIGNIKA</BigText>
            </FontContainer>

            <Text>Todo conteúdo é consumindo a API de Localidades do IBGE:</Text>
            <LinkText>https://servicodados.ibge.gov.br/api/docs/localidades</LinkText>

        </Container>
    )
}