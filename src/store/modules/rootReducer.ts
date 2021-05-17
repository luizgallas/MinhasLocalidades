import { combineReducers } from 'redux';
import { loadCities } from '../modules/City/reducer';
import { loadUF } from '../modules/UF/reducer';
import enableLoader from './Loader/reducer';
import { StoreState } from '../createStore';
import { loadDistricts } from './District/reducer';

export default combineReducers<StoreState>({
    loadCities: loadCities,
    loadUF: loadUF,
    enableLoader: enableLoader,
    loadDistricts: loadDistricts,
})
