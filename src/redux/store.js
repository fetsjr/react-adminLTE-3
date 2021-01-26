import {compose, createStore} from "redux";
import  combineReducers  from "./reducers/index"

export function configureStore(initialState={}) {

    return createStore(combineReducers,initialState);
}
