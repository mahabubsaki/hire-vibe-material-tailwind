import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider;

const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


    //creating user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //update a User
    const updateUser = (fullName, image) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: image
        });
    };

    //sign In with email pass
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    //logout user
    const logout = async () => {
        setLoading(true);
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true });
        console.log(data);
        return signOut(auth);
    };

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user on observation', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const allValues = {
        user,
        loading,
        createUser,
        updateUser,
        signInUser,
        googleLogin,
        logout,
        theme, setTheme
    };

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};
FirebaseProvider.propTypes = {
    children: PropTypes.node
};
export default FirebaseProvider;