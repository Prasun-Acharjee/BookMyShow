import {createStore, applyMiddleware} from 'redux';
import {reducer} from './Reducer/reducer';
import thunk from "redux-thunk";
import { logger } from "redux-logger";
export const createstore=()=>createStore(reducer,applyMiddleware(thunk,logger));