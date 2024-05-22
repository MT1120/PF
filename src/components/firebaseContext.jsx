
import { getAnalytics } from "firebase/analytics";

import React, { createContext, useContext } from 'react';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
const FirebaseContext = createContext(null);


export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error('useFirebase debe ser utilizado dentro de un proveedor FirebaseContext');
    }
    return context;
};
export const FirebaseProvider = ({ children }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyDh4_UxJ88kYvPbVJzP9bkTqQlODgev00Q",
        authDomain: "proyectofinal-ecb4f.firebaseapp.com",
        projectId: "proyectofinal-ecb4f",
        storageBucket: "proyectofinal-ecb4f.appspot.com",
        messagingSenderId: "571627211415",
        appId: "1:571627211415:web:a5eb7873a45022e881f7d2",
        measurementId: "G-CG62SVCNPE"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);

    return (
        <FirebaseContext.Provider value={{ auth }}>
            {children}
        </FirebaseContext.Provider>
    );
}