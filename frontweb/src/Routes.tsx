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
import PostingDetails from 'pages/PostingDetails';
import Auth from 'pages/Auth';

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
            <Route path="/providers/:providerId">
                <ProviderDetails />
            </Route>
            <Route path="/employees" exact>
                <Employees />
            </Route>
            <Route path="/employees/:employeeId">
                <EmployeeDetails />
            </Route>
            <Route path="/postings" exact>
                <Postings />
            </Route>
            <Route path="/postings/:postingId">
                <PostingDetails />
            </Route>
            <Route path="/entries">
                <Entries />
            </Route>
            <Route path="/inventory">
                <Inventory />
            </Route>
            <Route path="/auth">
                <Auth />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;
