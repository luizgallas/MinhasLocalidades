import { LoaderState,  LoaderActions} from "./types";
import { createReducer } from 'typesafe-actions';

const initialState: LoaderState = {
    enable: false,
}

/* export function enableLoader(state = initialState, action: LoaderActions): LoaderState {
    switch (action.type) {
        case 'ENABLE_LOADER':
            console.log("Reducer: ", action);
            return {
                ...state,
                enable: action.payload.loader,
            }
    
        default:
            return state;
    }
} */

const loaderReducer = createReducer(initialState).handleType('ENABLE_LOADER',
     (state: LoaderState, action: LoaderActions) => ({
        ...state,
        enable: action.payload.loader,
}))

export default loaderReducer;