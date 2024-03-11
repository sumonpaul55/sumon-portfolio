import React, { createContext, useState } from 'react';
import app from '../../../firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";




export const UserContext = createContext("")
const Authcontext = ({ children }) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("")


    const provider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const userInfo = {
        loading,
        user,
        loginWithGoogle
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default Authcontext;