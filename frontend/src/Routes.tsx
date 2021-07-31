import React from 'react'

import Navbar from 'core/components/Navbar'
import Daily from 'pages/Daily'
import Entries from 'pages/Entries'
import Inventory from 'pages/Inventory'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ClientFilter from 'pages/Daily/ClientFilter/ClientFilter'
import EmployeeFilter from 'pages/Daily/EmployeeFilter'
import ProviderFilter from 'pages/Daily/ProviderFilter/ProviderFilter'

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/daily' exact>
                    <Daily />
                </Route>
                <Route path='/daily/client'>
                    <ClientFilter/>
                </Route>
                <Route path='/daily/employee'>
                    <EmployeeFilter/>
                </Route>
                <Route path='/daily/provider'>
                    <ProviderFilter/>
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