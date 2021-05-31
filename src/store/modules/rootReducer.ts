import { combineReducers } from 'redux';
import { loadCities, selectCity } from '../modules/City/reducer';
import { loadUF, selectUF } from '../modules/UF/reducer';
import enableLoader from './Loader/reducer';
import { StoreState } from '../createStore';
import { loadDistricts } from './District/reducer';

export default combineReducers<StoreState>({
    loadCities: loadCities,
    selectCity: selectCity,
    loadUF: loadUF,
    selectUF: selectUF,
    enableLoader: enableLoader,
    loadDistricts: loadDistricts,
})
