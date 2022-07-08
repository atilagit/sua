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
import PostingForm from 'pages/Postings/PostingForm';
import ProviderForm from 'pages/Providers/ProviderForm';
import ClientForm from 'pages/Clients/ClientForm';
import EmployeeForm from 'pages/Employees/EmployeeForm';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <PrivateRoute path="/" exact>
                <Home />
            </PrivateRoute>
            <PrivateRoute path="/clients" exact roles={['ROLE_ADMIN', 'ROLE_OPERATOR']}>
                <Clients />
            </PrivateRoute>
            <PrivateRoute path="/clients/details/:clientId" roles={['ROLE_ADMIN', 'ROLE_OPERATOR']}>
                <ClientDetails />
            </PrivateRoute>
            <PrivateRoute path="/clients/:clientId" roles={['ROLE_ADMIN', 'ROLE_OPERATOR']}>
                <ClientForm />
            </PrivateRoute>
            <PrivateRoute path="/providers" exact roles={['ROLE_ADMIN', 'ROLE_OPERATOR']}>
                <Providers />
            </PrivateRoute>
            <PrivateRoute path="/providers/details/:providerId" exact roles={['ROLE_ADMIN', 'ROLE_OPERATOR']}>
                <ProviderDetails />
            </PrivateRoute>
            <PrivateRoute path="/providers/:providerId" roles={['ROLE_ADMIN', 'ROLE_OPERATOR']}>
                <ProviderForm />
            </PrivateRoute>
            <PrivateRoute path="/employees" exact>
                <Employees />
            </PrivateRoute>
            <PrivateRoute path="/employees/details/:employeeId">
                <EmployeeDetails />
            </PrivateRoute>
            <PrivateRoute path="/employees/:employeeId" roles={['ROLE_ADMIN', 'ROLE_OPERATOR']}>
                <EmployeeForm />
            </PrivateRoute>
            <PrivateRoute path="/postings" exact>
                <Postings />
            </PrivateRoute>
            <PrivateRoute path="/postings/details/:postingId" exact>
                <PostingDetails />
            </PrivateRoute>
            <PrivateRoute path="/postings/create" roles={['ROLE_ADMIN', 'ROLE_OPERATOR']}>
                <PostingForm />
            </PrivateRoute>
            <PrivateRoute path="/entries" roles={['ROLE_ADMIN', 'ROLE_OPERATOR']}>
                <Entries />
            </PrivateRoute>
            <PrivateRoute path="/inventory" roles={['ROLE_ADMIN', 'ROLE_OPERATOR']}>
                <Inventory />
            </PrivateRoute>
            <Route path="/auth">
                <Auth />
            </Route>
        </Switch>
    </Router>
)

export default Routes;
