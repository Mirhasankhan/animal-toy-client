import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/Firebase.config';

export const firebaseProvider = createContext(null)

const Provider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {            
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe;
        }
    }, [])

    const infos = {
        user,
        createUser,
        logIn,
        googleSignIn,
        loading,
        logOut
    }
    return (
        <firebaseProvider.Provider value={infos}>
            {children}
        </firebaseProvider.Provider>
    );
};

export default Provider;