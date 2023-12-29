import { useContext, useState, createContext } from "react";

const MyContext = createContext(null)

export const NavContext = () => {
    const nav = useContext(MyContext);
    return nav
}

export const NaveContextProvider = ({ children }) => {
    const [isMenu, setIsMenu] = useState(false)
    return (
        <MyContext.Provider value={{ isMenu, setIsMenu }}>
            {children}
        </MyContext.Provider>
    );
}


