import { CityListState, CityActions } from "./types";

const initialState: CityListState = {
    cityList: [],
}

export function loadCities(state = initialState, action: CityActions): CityListState {
    switch (action.type) {
        case 'LOAD_CITIES':
            return {
                ...state,
                cityList: action.payload.cities
            }
    
        default:
            return state;
    }
}