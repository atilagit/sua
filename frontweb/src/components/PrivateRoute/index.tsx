import { Redirect, Route } from 'react-router-dom';
import { hasAnyRoles, isAuthenticated, Role } from 'util/requests';

type Props = {
  children: React.ReactNode;
  path: string;
  exact?: boolean;
  roles?: Role[];
};

const PrivateRoute = ({ children, path, exact, roles = [] }: Props) => {

  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location }
            }}
          />
        ) : !hasAnyRoles(roles) ? (
          <Redirect to="/" />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default PrivateRoute;