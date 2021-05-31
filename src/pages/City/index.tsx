import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import CityErrorPage from '../../components/CityErrorPage';
import { Container, Title, SubTitle, List, ListContainer } from './styles';
import CityList from "../../components/CityList";
import { City as CityObject } from '../../store/modules/City/types';
import { loadCities } from '../../store/modules/City/actions';
import { selectUF } from '../../store/modules/UF/actions';
import { enableLoader } from '../../store/modules/Loader/actions';
import api from '../../services'

const City = ()  => {
    const cityList = useSelector((state: StoreState) => state.loadCities.cityList);
    const dispatch = useDispatch(); //dispatch(ACTION(PARAMS))
    const uf = useSelector((state: StoreState ) => state.selectUF.selectUF)

    useEffect(() => {
        handleFillList();
    }, [uf]);

    function handleFillList() {
        if(uf) {
            dispatch(enableLoader({loader: true}));
            let allCities = Array<CityObject>();
            api.get(`estados/${uf.initials}/municipios`)
                .then(response => {
                    response.data.map((city: any) => {
                        const tempCity: CityObject = {
                            name: city.nome,
                            cod: city.id
                        }
                        allCities.push(tempCity);
                    })
    
                    allCities.sort(function(a, b) {
                        return (a.name < b.name) ? -1 : 1; 
                    })
                    dispatch(loadCities({cities: allCities}));
                    dispatch(enableLoader({loader: false}));
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
                        renderItem={({ item }: any) => (
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