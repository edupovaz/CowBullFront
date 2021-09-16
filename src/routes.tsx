import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Login} path="/login"/>
            </Switch>
        </Router>
    )
}

export default Routes