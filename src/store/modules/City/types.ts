import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CityActions = ActionType<typeof actions>;

export interface City {
    name: string,
    cod: number
};

export interface CityListState {
    readonly cityList: Array<City>
};

export interface SelectCityState {
    readonly selectCity: City | null
};

