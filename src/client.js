import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import App from './components/App'
import injectTapEventPlugin from 'react-tap-event-plugin'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
//TODO initial from local
const store = configureStore();
render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);
