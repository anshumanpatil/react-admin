import React from 'react';
import ReactDOM from 'react-dom';
import './sb-admin-2.css';

import App from './containers/App';
import * as serviceWorker from './helpers/serviceWorker';
import { Provider } from "react-redux";
import store from './redux/store'
import $ from 'jquery';
window.jQuery = window.$ = $;
window['jquery-easing'] = require('jquery.easing');
require('bootstrap');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
