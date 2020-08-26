import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { CityListState, CityActions } from './modules/City/types';

export interface StoreState {
    search: CityListState
}

export type StoreAction = CityActions;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
}