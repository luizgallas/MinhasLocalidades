import {City} from './types';
import { action } from 'typesafe-actions';

export function searchCity({cities}: {cities: City[]}) {
    return action('SEARCH_CITY', { cities })
};
