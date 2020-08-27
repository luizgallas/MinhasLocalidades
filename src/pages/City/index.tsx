import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import CityErrorPage from '../../components/CityErrorPage';
import { Container, Title, SubTitle, List, ListContainer } from './styles';
import CityList from "../../components/CityList";
import axios from 'axios';
import { City as CityObject } from '../../store/modules/City/types';
import { loadCities } from '../../store/modules/City/actions';

const City = ({route}: any)  => {
    const cityList = useSelector((state: StoreState) => state.loadCities.cityList);
    const dispatch = useDispatch(); //dispatch(ACTION(PARAMS))
    var uf: any = null;

    try {
        uf = route.params.uf;
        console.log(`uf value= ${uf.name}`)
    } catch(err) {
        console.log('UF is null')
    }

    useEffect(() => {
        if (uf !== null) {
            handleFillList();
        }
    }, [uf]);

    function handleFillList() {
        dispatch(loadCities({cities: []}))
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
                console.log(`City list ${cityList}`);

                console.log(`UF value is: ${uf.name}`);
            })
        }
    
    if (uf !== undefined || uf !== null) {
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
    } else {
        return (
            <CityErrorPage />
        )
    }
}

export default City;