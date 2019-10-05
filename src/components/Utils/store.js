import {loadState, saveState} from "./localStorage";
import {createStore} from "redux";
import {rootReducer} from "./reducers";
import throttle from "lodash/throttle";

const persistedState = loadState();
export const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));
