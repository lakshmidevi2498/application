 
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const naviagate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('googleToken') || localStorage.getItem('Token');
  
 
        if (!token) {
          return naviagate('/login')
        //   <Navigate to="/login"  />;
        }

    },[])
 

  return children;  
};

export default PrivateRoute;
