import { CityListState, CityActions, SelectCityState } from "./types";

const initialState: CityListState = {
    cityList: []
}

const initialCity: SelectCityState = {
    selectCity: null
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

export function selectCity(state = initialCity, action: CityActions): SelectCityState {
    switch (action.type) {
        case 'SELECTED_CITY':
            return {
                ...state,
                selectCity: action.payload.selectCity
            }
    
        default:
            return state;
    }
}