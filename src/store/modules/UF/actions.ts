import {UF} from './types';
import { action } from 'typesafe-actions';

export function loadUF({uf}: {uf: UF[]}) {
    return action('LOAD_UF', { uf })
};
