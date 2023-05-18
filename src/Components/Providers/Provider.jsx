import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/Firebase.config';

export const firebaseProvider = createContext(null)

const Provider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState("null")
    const [loading, setLoading] = useState(false)

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
        googleSignIn
    }
    return (
        <firebaseProvider.Provider value={infos}>
            {children}
        </firebaseProvider.Provider>
    );
};

export default Provider;