import { LoaderState,  LoaderActions} from "./types";

const initialState: LoaderState = {
    enable: false,
}

export function enableLoader(state = initialState, action: LoaderActions): LoaderState {
    switch (action.type) {
        case 'ENABLE_LOADER':
            return {
                ...state,
                enable: action.payload.loader,
            }
    
        default:
            return state;
    }
}