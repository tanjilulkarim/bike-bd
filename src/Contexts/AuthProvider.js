import React, { createContext } from 'react';
import useFirebase from '../Hooks/UseFirebase';






export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const firebaseContext = useFirebase();
    
    const data = {firebaseContext};
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;