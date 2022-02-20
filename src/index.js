import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './components/Layouts/Container/MainContainer';
import App from './modules/App/routes'
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./config/store";


ReactDOM.render(
    <Provider store={store}>
        <MainContainer >
             <App   /> 
        </MainContainer>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
