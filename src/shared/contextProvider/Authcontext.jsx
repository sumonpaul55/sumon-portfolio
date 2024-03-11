import React, { createContext, useEffect, useState } from 'react';
import app from '../../../firebase.config';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


export const UserContext = createContext("")
const Authcontext = ({ children }) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("")


    const provider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    // logout user
    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, curentUser => {
            setUser(curentUser)
            setLoading(false)

        })
        return () => {
            unsubscribe();
        }
    }, [auth])


    const userInfo = {
        loading,
        user,
        loginWithGoogle,
        logOut
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default Authcontext;