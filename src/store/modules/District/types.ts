import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type DistrictActions = ActionType<typeof actions>;

export interface District {
    name: string
};

export interface DistrictListState {
    readonly districtList: Array<District>
};
