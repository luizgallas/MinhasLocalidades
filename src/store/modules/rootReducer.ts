import { combineReducers } from 'redux';
import { loadCities } from '../modules/City/reducer';
import { loadUF } from '../modules/UF/reducer';

export default combineReducers({
    loadCities: loadCities,
    loadUF: loadUF,
})
