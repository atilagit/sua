import React from 'react'

import Navbar from 'core/components/Navbar'
import Daily from 'pages/Daily'
import Entries from 'pages/Entries'
import Inventory from 'pages/Inventory'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/daily'>
                    <Daily />
                </Route>
                <Route path='/entries'>
                    <Entries />
                </Route>
                <Route path='/inventory'>
                    <Inventory />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes