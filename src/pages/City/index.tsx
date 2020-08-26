import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { View } from 'react-native';

const City = () => {
    const cityList = useSelector((state: StoreState) => state.search.cityList);
    const dispatch = useDispatch(); //dispatch(ACTION(PARAMS))

    return (
        <View>
        </View>
    )
}

export default City;