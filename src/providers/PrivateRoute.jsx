import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Spinner } from 'flowbite-react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,isLoading}=useContext(AuthContext)
    const location= useLocation()
    if(user){
        return children
    }
    if(isLoading){
        return <div>
            <div className="text-center">
                <Spinner aria-label="Center-aligned spinner example " size="xl"/>
            </div>
        </div>
    }
    return <Navigate state={location} to={'/login'}></Navigate>
};

export default PrivateRoute;