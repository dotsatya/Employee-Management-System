import React, { useState , useEffect } from 'react'
import { getLocalStorage } from '../utils/localStorage';
export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const {employees, admins} = getLocalStorage();
        setUserData({employees, admins});
    }, [])

    return (
        <AuthContext.Provider value={{userData}} >
            <div>{children}</div>
        </AuthContext.Provider>
    )
}

export default AuthProvider