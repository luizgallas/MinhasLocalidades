import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LoaderActions = ActionType<typeof actions>;

export interface LoaderState {
    readonly enable: boolean;
};
