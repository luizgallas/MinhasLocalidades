import { UFListState, UFActions } from "./types";

const initialState: UFListState = {
    ufList: [],
}

export function loadUF(state = initialState, action: UFActions): UFListState {
    switch (action.type) {
        case 'LOAD_UF':
            return {
                ...state,
                ufList: action.payload.uf
            }
    
        default:
            return state;
    }
}