import { District } from './types';
import { action } from 'typesafe-actions';

export function loadDistricts({ districts }: {districts: District[]}) {
    return action('LOAD_DISTRICTS', { districts })
};

