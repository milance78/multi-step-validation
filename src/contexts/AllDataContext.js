import { createContext, useState } from "react";

export const AllDataContext = createContext();
export const AllDataContextProvider = ({ children }) => {
    const [allData, setAllData] = useState({
        allergy: [],
        diet: [],
        favorite: [],
        love: {},
    });
    return <AllDataContext.Provider value={{ allData, setAllData }}>
        {children}
    </AllDataContext.Provider>
}