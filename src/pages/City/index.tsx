import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import CityErrorPage from '../../components/CityErrorPage';
import { Container, Title, SubTitle, List, ListContainer } from './styles';
import CityList from "../../components/CityList";
import axios from 'axios';
import { City as CityObject } from '../../store/modules/City/types';
import { loadCities } from '../../store/modules/City/actions';
import { LoaderState } from '../../store/modules/Loader/types';

const City = ({route}: any)  => {
    const cityList = useSelector((state: StoreState) => state.loadCities.cityList);
    const dispatch = useDispatch(); //dispatch(ACTION(PARAMS))

    try {
        var uf = route.params.uf !== undefined ? (route.params.uf) : null;
    } catch {
        var uf = null;
    }

    useEffect(() => {
        handleFillList();
        dispatch(loadCities({cities: []}))
    }, [uf]);

    function handleFillList() {
        if(uf) {
            var allCities = Array<CityObject>();
            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.initials}/municipios`)
                .then(response => {
                    response.data.map((city: any) => {
                        const tempCity: CityObject = {
                            name: city.nome,
                        }
                        allCities.push(tempCity);
                    })
    
                    allCities.sort(function(a, b) {
                        return (a.name < b.name) ? -1 : 1; 
                    })
                    dispatch(loadCities({cities: allCities}));
                })
            }
        }
    
    if (!uf) {
        return (
            <CityErrorPage />
        )
    } else {
        return (
            <Container>
                <Title>Cidades</Title>
                <SubTitle>{uf.fullName}</SubTitle>
    
            <ListContainer>
              <List
                data={cityList}
                keyExtractor={(item: any) => (item.name)}
                renderItem={({item}) => (
                  <CityList
                    city={item}
                  />
                )}
              />
          </ListContainer>
            </Container>
        )
    }
}

export default City;