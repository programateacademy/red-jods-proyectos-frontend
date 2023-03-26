import { createContext, useState } from 'react';

export const AuthContext=createContext();

export const AuthProvider=({ children }) => {
    const [authData, setAuthData]=useState({ token: null, role: null, email: null, name: null, id: null });
    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

