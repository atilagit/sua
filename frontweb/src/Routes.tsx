import { Router, Switch, Route } from 'react-router-dom';
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
import history from 'util/history';
import PrivateRoute from 'components/PrivateRoute';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <PrivateRoute path="/" exact>
                <Home />
            </PrivateRoute>
            <PrivateRoute path="/clients" exact>
                <Clients />
            </PrivateRoute>
            <PrivateRoute path="/clients/:clientId">
                <ClientDetails />
            </PrivateRoute>
            <PrivateRoute path="/providers" exact>
                <Providers />
            </PrivateRoute>
            <PrivateRoute path="/providers/:providerId">
                <ProviderDetails />
            </PrivateRoute>
            <PrivateRoute path="/employees" exact>
                <Employees />
            </PrivateRoute>
            <PrivateRoute path="/employees/:employeeId">
                <EmployeeDetails />
            </PrivateRoute>
            <PrivateRoute path="/postings" exact>
                <Postings />
            </PrivateRoute>
            <PrivateRoute path="/postings/:postingId">
                <PostingDetails />
            </PrivateRoute>
            <PrivateRoute path="/entries">
                <Entries />
            </PrivateRoute>
            <PrivateRoute path="/inventory">
                <Inventory />
            </PrivateRoute>
            <Route path="/auth">
                <Auth />
            </Route>
        </Switch>
    </Router>
)

export default Routes;
