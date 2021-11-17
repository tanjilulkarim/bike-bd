
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { firebaseContext } = useAuth();
    const { user,admin,isLoading } = firebaseContext;
    if (isLoading) {  return <div className="text-center">
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>}
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;