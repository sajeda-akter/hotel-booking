import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()

    // craete a user
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // update user profile
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    // signin user
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout the user
    const logOut=()=>{
        setLoading(true)
      return  signOut(auth)
    }

    const googleSignin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
   useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
        console.log('observing user')

    })
    return (()=>unSubscribe())
},[])
    


    const authInfo={user,createUser,updateUserProfile,loading,signIn,logOut,googleSignin}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;