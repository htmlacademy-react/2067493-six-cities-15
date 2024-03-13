import { Navigate } from 'react-router-dom';
import { AppRoute, Autorization } from '../../const';

type PrivateRouteProps = {
  autorization: Autorization;
  children: JSX.Element;
}

function PrivateRoute ({autorization, children}: PrivateRouteProps): JSX.Element {
  return (
    autorization === Autorization.Auth ?
      children : <Navigate to={AppRoute.LoginPage}/>
  );
}

export default PrivateRoute;
