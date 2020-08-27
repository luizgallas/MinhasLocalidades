import {City} from './types';
import { action } from 'typesafe-actions';

export function loadCities({cities}: {cities: City[]}) {
    return action('LOAD_CITIES', { cities })
};
