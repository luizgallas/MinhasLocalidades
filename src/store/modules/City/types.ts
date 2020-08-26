import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CityActions = ActionType<typeof actions>;

export interface City {
    nome: string,
    uf: string,
    regiao: string
};

export interface CityListState {
    readonly cityList: Array<City>
};
