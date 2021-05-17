import React from 'react';
import { 
    Container,
    Title,
    TextDescription,
    Text, LinkText 
} from './styles';

import Spacer from '../../components/Spacer';

export default function About() {
    return (
        <Container>
            <Title>Sobre o Minha Localidade</Title>
            <Spacer value={20} />
            <TextDescription>
                O aplicativo Minha Localidade tem por sua finalidade listar todas as Unidades Federativas,
                Municípios e Distritos pertencentes ao Brasil.
            </TextDescription>
            <Spacer value={102} />
            <TextDescription>
                Foi desenvolvido para fins de estudo, sendo utilizado como treinamento de React-native em 2020
                 e como parte da disciplina de Engenharia de Software em 2021.
            </TextDescription>
            <Text>Todo conteúdo é consumindo a API de Localidades do IBGE:</Text>
            <LinkText>https://servicodados.ibge.gov.br/api/docs/localidades</LinkText>
        </Container>
    )
}