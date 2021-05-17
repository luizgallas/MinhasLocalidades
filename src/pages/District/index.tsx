import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { Container, Title, SubTitle, List, ListContainer } from './styles';
import DistrictList from "../../components/DistrictList";
import axios from 'axios';
import { District as DistrictObject } from '../../store/modules/District/types';
import { loadDistricts } from '../../store/modules/District/actions';
import { enableLoader } from '../../store/modules/Loader/actions';

const District = ({ city }: any)  => {
    const districtList = useSelector((state: StoreState) => state.loadDistricts.districtList);
    const dispatch = useDispatch();

    useEffect(() => {
        handleFillList();
        dispatch(loadDistricts({districts: []}))
    }, [city]);

    function handleFillList() {
        if(city) {
            dispatch(enableLoader({loader: true}));
            let allDistricts = Array<DistrictObject>();
            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${city.cod}/distritos`)
                .then(response => {
                    response.data.map((district: any) => {
                        const tempDistrict: DistrictObject = {
                            name: district.nome,
                        }
                        allDistricts.push(tempDistrict);
                    })
    
                    allDistricts.sort(function(a, b) {
                        return (a.name < b.name) ? -1 : 1; 
                    })
                    dispatch(loadDistricts({districts: allDistricts}));
                    dispatch(enableLoader({loader: false}));
                })
            } 
        }
    
    return (
        <Container>
            <Title>Distritos</Title>
            <SubTitle>{city.name}</SubTitle>

            <ListContainer>
                <List
                    data={districtList}
                    keyExtractor={(item: any) => (item.name)}
                    renderItem={({item}) => (
                        <DistrictList
                            district={item}
                        />
                    )}
                />
            </ListContainer>
        </Container>
    )
}

export default District;