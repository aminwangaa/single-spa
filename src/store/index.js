import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
export default createStore(reducer,applyMiddleware(reduxPromise,reduxThunk,reduxLogger));

