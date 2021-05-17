import { LoaderState,  LoaderActions} from "./types";
import { createReducer } from 'typesafe-actions';

const initialState: LoaderState = {
    enable: false,
}

const loaderReducer = createReducer(initialState).handleType('ENABLE_LOADER',
     (state: LoaderState, action: LoaderActions) => ({
        ...state,
        enable: action.payload.loader,
}))

export default loaderReducer;