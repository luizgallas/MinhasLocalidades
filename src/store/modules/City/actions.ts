import { City } from './types';
import { action } from 'typesafe-actions';

export function loadCities({cities}: {cities: City[]}) {
    return action('LOAD_CITIES', { cities })
};

export function selectCity(selectCity: City) {
    return action('SELECTED_CITY', { selectCity })
};