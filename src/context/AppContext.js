import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [points, setPoints] = useState(0);

    const handleLogin = (nick) => {
        setUser(nick)

    }

    const contextValue = {
        user,
        points,
        setPoints,
        handleLogin
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
