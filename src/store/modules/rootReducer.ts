import { combineReducers } from 'redux';
import { searchCity } from '../modules/City/reducer';

export default combineReducers({
    search: searchCity,
})
