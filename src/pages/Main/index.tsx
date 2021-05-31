import React, { useEffect } from 'react';
import { Container, Text, List, ListContainer } from './styles';
import UF from '../../components/UF';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { loadUF } from '../../store/modules/UF/actions';
import { UF as UFObject} from '../../store/modules/UF/types';
import api from '../../services'

const Main = () => {
  const ufList = useSelector((state: StoreState) => state.loadUF.ufList);
  const dispatch = useDispatch(); //dispatch(ACTION(PARAMS))

  useEffect(() => {
      loadUfList();
  }, []);

  function loadUfList() {
    var allUfs = Array<UFObject>();
    api.get("estados")
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
          return (a.name < b.name) ? -1 : 1         
        })
        dispatch(loadUF({ uf: allUfs}));
    })
  }

  return (
    <Container>
      <Text> Minhas Localidades</Text>
      <ListContainer>
          <List //ListHeaderComponent={<Text> Minha Localidade</Text>}
            data={ufList}
            keyExtractor={(item: any) => (item.name)}
            renderItem={({item}: any) => (
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
