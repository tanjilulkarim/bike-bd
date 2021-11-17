import { Route, Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



function PrivateRoute(props) {
  const { children, ...rest } = props;

  
  const {firebaseContext} = useAuth()
    const {user, isLoading} = firebaseContext
  if(isLoading){
      return <div className="text-center">
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;