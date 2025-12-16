import React, { createContext, useEffect, useState } from 'react';

export const AuthContext=createContext();

import { auth } from '../../Auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';



const Authprovider = ({children}) => {

    
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)  
     
     const googleProvider=new GoogleAuthProvider();
     

    const signUp=async(email,pass,UserName,photo_URL)=>{
         
      
       const register=await createUserWithEmailAndPassword(auth,email,pass);

      await  updateProfile(auth.currentUser,{
                
               displayName:UserName,
               photoURL:photo_URL
       })
         
       setLoader(true)
       return register;
    }

    const userLogin=(email,pass)=>{

        setLoader(true)
         return signInWithEmailAndPassword(auth,email,pass)
    }

    const googleLogin=()=>{

        setLoader(true)
        return signInWithPopup(auth,googleProvider);
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
        setLoader(true)
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