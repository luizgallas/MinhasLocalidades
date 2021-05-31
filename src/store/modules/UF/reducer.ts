import { UFListState, UFActions, SelectedUFState } from "./types";

const initialState: UFListState = {
    ufList: [],
}

const initialUF: SelectedUFState = {
    selectUF: null
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

export function selectUF(state = initialUF, action: UFActions): SelectedUFState {
    switch (action.type) {
        case 'SELECTED_UF':
            return {
                ...state,
                selectUF: action.payload.selectUF
            }
    
        default:
            return state;
    }
}