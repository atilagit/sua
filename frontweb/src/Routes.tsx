import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Clients from 'pages/Clients';
import Providers from 'pages/Providers';
import Employees from 'pages/Employees';
import Postings from 'pages/Postings';
import Entries from 'pages/Entries';
import Inventory from 'pages/Inventory';
import Navbar from 'components/Navbar';
import ClientDetails from 'pages/ClientDetails';
import EmployeeDetails from 'pages/EmployeeDetails';
import ProviderDetails from 'pages/ProviderDetails';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/clients" exact>
                <Clients />
            </Route>
            <Route path="/clients/:clientId">
                <ClientDetails />
            </Route>
            <Route path="/providers" exact>
                <Providers />
            </Route>
            <Route path="/providers/:employeeId">
                <ProviderDetails />
            </Route>
            <Route path="/employees" exact>
                <Employees />
            </Route>
            <Route path="/employees/:employeeId">
                <EmployeeDetails />
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
