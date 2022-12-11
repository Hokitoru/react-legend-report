import {applyMiddleware, combineReducers, createStore} from "redux";
import {nameReducer} from "./nameReducer";
import {settingsReducer} from "./settingsReducer"
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({name: nameReducer, settings: settingsReducer});

export const store = createStore(rootReducer, composeWithDevTools());