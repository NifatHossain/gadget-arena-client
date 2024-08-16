
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext= createContext(null)
   
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [isLoading, setIsLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    const registerUser=(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn=()=>{
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOutUser=()=>{
        setIsLoading(true)
        return signOut(auth)
    }
    const updateUserProfile=(name)=>{
        setIsLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
          })
          
    }
    useState(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setIsLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authData= {registerUser,signInUser,googleSignIn,logOutUser,updateUserProfile,user,isLoading}
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;