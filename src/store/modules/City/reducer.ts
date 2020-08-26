import { CityListState, CityActions } from "./types";

const initialState: CityListState = {
    cityList: [],
}

export function searchCity(state = initialState, action: CityActions): CityListState {
    switch (action.type) {
        case 'SEARCH_CITY':
            return {
                ...state,
                cityList: action.payload.cities
            }
    
        default:
            return state;
    }
}