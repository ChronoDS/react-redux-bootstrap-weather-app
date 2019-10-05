import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from '../src/components/Utils/store'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Root from "./Root";

export const handleThemeChange = (isChecked) => {
    if (isChecked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
};
//
// ReactDOM.render(
//     <Provider store={store}>
//         <Router>
//             <Route path="/" component={App}/>
//         </Router>
//     </Provider>,
//     document.getElementById('root'));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
