import React, { useEffect } from 'react';
import { Container, Text, List, ListContainer } from './styles';
import UF from '../../components/UF';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { loadUF } from '../../store/modules/UF/actions';
import { UF as UFObject} from '../../store/modules/UF/types';
import axios from 'axios';

const Main = () => {
  const ufList = useSelector((state: StoreState) => state.loadUF.ufList);
  const dispatch = useDispatch(); //dispatch(ACTION(PARAMS))

  useEffect(() => {
      loadUfList();
  }, []);

  function loadUfList() {
    var allUfs = Array<UFObject>();
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then(response => {
          response.data.map((uf: any) => {
            const tempUF: UFObject = {
              name: uf.nome,
              initials: uf.sigla,
              fullName: uf.nome + " - " + uf.sigla,
            }
            allUfs.push(tempUF);
        })
        allUfs.sort(function(a, b){
          if (a.name < b.name) {
            return -1;
          }
          return 1;
        })
        dispatch(loadUF({ uf: allUfs}));
        console.log(ufList);
    });
  }

  return (
    <Container>
      <Text> Minha Localidade</Text>
      <ListContainer>
          <List
            data={ufList}
            keyExtractor={(item: any) => (item.name)}
            renderItem={({item}) => (
              <UF
                uf={item}
              />
            )}
          />
      </ListContainer>
    </Container>
  );
};

export default Main;
