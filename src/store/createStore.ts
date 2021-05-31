import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { CityListState, CityActions, SelectCityState } from './modules/City/types';
import { UFListState, UFActions, SelectedUFState } from './modules/UF/types';
import { LoaderState, LoaderActions } from './modules/Loader/types';
import { DistrictListState } from './modules/District/types';

export interface StoreState {
    loadCities: CityListState,
    selectCity: SelectCityState,
    loadUF: UFListState,
    selectUF: SelectedUFState,
    enableLoader: LoaderState,
    loadDistricts: DistrictListState
}

export type StoreAction = CityActions | UFActions | LoaderActions;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
}