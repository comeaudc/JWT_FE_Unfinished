import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/auth/auth_context';

function ProtectedRoutes() {
  const { cookies } = useAuth();

  return cookies.token ? <Outlet /> : <h1>You are not Authorized to view this page!</h1>
}

export default ProtectedRoutes;
