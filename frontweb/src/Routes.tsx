import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Clients from 'pages/Clients';
import Providers from 'pages/Providers';
import Employees from 'pages/Employees';
import Postings from 'pages/Postings';
import Entries from 'pages/Entries';
import Inventory from 'pages/Inventory';
import Navbar from 'components/Navbar';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/clients">
                <Clients />
            </Route>
            <Route path="/providers">
                <Providers />
            </Route>
            <Route path="/employees">
                <Employees />
            </Route>
            <Route path="/postings">
                <Postings />
            </Route>
            <Route path="/entries">
                <Entries />
            </Route>
            <Route path="/inventory">
                <Inventory />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;
