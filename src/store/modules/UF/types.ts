import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UFActions = ActionType<typeof actions>;

export interface UF {
    name: string,
    initials: string,
    fullName: string,
};

export interface UFListState {
    readonly ufList: Array<UF>
};
