import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { CityListState, CityActions } from './modules/City/types';
import { UFListState, UFActions } from './modules/UF/types';
import { LoaderState, LoaderActions } from './modules/Loader/types';

export interface StoreState {
    loadCities: CityListState,
    loadUF: UFListState,
    enableLoader: LoaderState,
}

export type StoreAction = CityActions | UFActions | LoaderActions;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
}