// importamos los modulos de redux
import {createStore, combineReducers} from 'redux';
// importamos los reducers
import palabraReducer from './palabra/reducer';

const reducers = combineReducers({
    palabraReducer
});

const store = createStore(
    reducers,

    // esto es pluggin Redux para chrome en herram desarrolladores, ver lo que hay en store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// OK