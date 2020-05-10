import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from 'react-redux/es/components/Provider';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store'

import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
