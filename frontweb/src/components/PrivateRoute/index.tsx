import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'util/requests';
 
type Props = {
  children: React.ReactNode;
  path: string;
  exact?: boolean;
};
 
const PrivateRoute = ({ children, path, exact }: Props) => {
 
  return (
    <Route
      path={path}
      exact={exact}
      render={({location}) =>
        isAuthenticated() ? <>{children}</> : <Redirect to={{
          pathname: "/auth",
          state: { from: location }
        }} />
      }
    />
  );
};
  
export default PrivateRoute;