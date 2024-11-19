// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//   const isAuthenticated =
//     localStorage.getItem('googleToken') || localStorage.getItem('Token');

 
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;


import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  return <Outlet />;
};

export default PrivateRoute;
