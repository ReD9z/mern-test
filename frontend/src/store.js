import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import { tasksReducer } from "./reducers";

export default createStore(
    combineReducers({
        tasks: tasksReducer
    }),
    compose(
        applyMiddleware(
            thunk,
            logger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

