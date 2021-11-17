import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import "./Login.css";
import backgroundImage from "../../img/pexels-shawn-stutzman-1010496.jpg"

import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const styles = {    
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
};
  const {firebaseContext} = useAuth()
  const {error,saveUser, signInWithGoogle, getEmail,getPassWord,SignInWithEmail,setUser,setError, setIsLoading } = firebaseContext;
  
  const history = useHistory();

  const location = useLocation();
  const redirect = location?.state?.from || "/home";

  return (
    <div className="login-container" style={styles}>
    <div className="container ">
      <div className="row">
      <div className="col-lg-4"></div>

        <div className="col-lg-5">
            <div className="login-div">
          <h2 className="text-center">Login</h2>
          <form onSubmit={(e) =>{
            e.preventDefault()
           SignInWithEmail()
         .then((userCredential) => {
            setUser(userCredential.user)
            history.push(redirect)
          })
          .catch((err) => {
             setError(err.message)
          })
          .finally(() => {
             setIsLoading(false)
           })
          } } className="w-75 mx-auto">
            <div className="mb-3">
 
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text text-danger">{error}</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onBlur={getPassWord} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
           
            <div className="mb-3 ">
                <Link className="link" to="/register">
                  Need an Account? Please Sign up!
                </Link>
            </div>
           
            <button type="submit" className="btn my-btn btn-sm">Login</button>
       </form>
      
      <div className="text-center">
          <p>Login With</p>
      <button onClick={() =>{
         signInWithGoogle()
      .then(result => {
          setUser(result.user)
          
          saveUser(result.user.email, result.user.displayName, 'PUT');
          history.push(redirect)
      })
      .catch(err =>{
          setError(err.message)
      } )
      .finally(() => {
          setIsLoading(false)
      })
         }}  className="btn">
           <img width="40px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
       </button>
       
      </div>
       
       </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
    </div>
  );
};

export default Login;
