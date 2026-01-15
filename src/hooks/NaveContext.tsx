import { useContext, useState, createContext, ReactNode, Dispatch, SetStateAction } from "react";

interface NavContextType {
    isMenu: boolean;
    setIsMenu: Dispatch<SetStateAction<boolean>>;
}

const MyContext = createContext<NavContextType | null>(null)

export const NavContext = () => {
    const nav = useContext(MyContext);
    if (!nav) {
        throw new Error("useNavContext must be used within a NaveContextProvider");
    }
    return nav
}

export const NaveContextProvider = ({ children }: { children: ReactNode }) => {
    const [isMenu, setIsMenu] = useState(false)
    return (
        <MyContext.Provider value={{ isMenu, setIsMenu }}>
            {children}
        </MyContext.Provider>
    );
}


