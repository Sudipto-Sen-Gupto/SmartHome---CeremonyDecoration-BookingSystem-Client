import React, { createContext, useEffect, useState } from 'react';

export const AuthContext=createContext();

import { auth } from '../../Auth';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const Authprovider = ({children}) => {


    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)  

    const signUp=(email,pass)=>{
         
       return createUserWithEmailAndPassword(auth,email,pass)
    }

    const userLogin=(email,pass)=>{
         return signInWithEmailAndPassword(auth,email,pass)
    }

    const googleLogin=()=>{
        return signInWithPopup(auth);
    }

     
    useEffect(()=>{
        
        const unsubscriber=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoader(false);
        })
              
        return ()=>{
                  unsubscriber()
        }
    },[])


    const logOut=()=>{
        return signOut(auth);
    }
      
     const userInfo={
         signUp,
         userLogin,
         googleLogin,
         logOut,
         user,
         loader
     }

    return (
        <AuthContext.Provider value={userInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;