import { DistrictListState, DistrictActions } from "./types";

const initialState: DistrictListState = {
    districtList: [],
}

export function loadDistricts(state = initialState, action: DistrictActions): DistrictListState {
    switch (action.type) {
        case 'LOAD_DISTRICTS':
            return {
                ...state,
                districtList: action.payload.districts
            }
        default:
            return state;
    }
}