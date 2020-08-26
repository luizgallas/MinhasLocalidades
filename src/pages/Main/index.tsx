import React from 'react';
import { Container, Text, List} from './styles';
import UF from '../components/UF';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store/createStore';

const Main = () => {
  const cityList = useSelector((state: StoreState) => state.search.cityList);

  return (
    <Container>
        <Text> Minha Localidade</Text>
        <List>
        {cityList.map((uf) => {
                    return (
                        <UF 
                            key={uf.nome}
                            uf= {uf}
                        />
                    
                    )
                })}
        </List>
    </Container>
  );
};

export default Main;
