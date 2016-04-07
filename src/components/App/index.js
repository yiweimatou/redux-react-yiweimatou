import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import HomeContainer from '../../containers/HomeContainer'
import LoginContainer from '../../containers/LoginContainer'

const App = () =>(
        <Router history={hashHistory}>
            <Route>
                <Route path="/" component={HomeContainer}></Route>
                <IndexRoute component={HomeContainer}></IndexRoute>
            </Route>
        </Router>
)
export default App