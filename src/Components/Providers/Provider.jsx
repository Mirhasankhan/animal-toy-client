import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/Firebase.config';

export const firebaseProvider = createContext(null)

const Provider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState("null")
    const [loading, setLoading] = useState(false)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe;
        }
    }, [])

    const infos = {
        user,
        createUser,
        logIn
    }
    return (
        <firebaseProvider.Provider value={infos}>
            {children}
        </firebaseProvider.Provider>
    );
};

export default Provider;