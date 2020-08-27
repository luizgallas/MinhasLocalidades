import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { CityListState, CityActions } from './modules/City/types';
import { UFListState, UFActions } from './modules/UF/types';

export interface StoreState {
    loadCities: CityListState,
    loadUF: UFListState,
}

export type StoreAction = CityActions | UFActions;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
}