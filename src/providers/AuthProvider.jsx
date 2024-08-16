
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext= createContext(null)
   
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const registerUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth, provider)
    }
    const logOutUser=()=>{
        return signOut(auth)
    }
    const updateUserProfile=(name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name
          })
          
    }
    const authData= {registerUser,signInUser,googleSignIn,logOutUser,updateUserProfile}
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;