import { createContext, useState } from "react";

export const LineContext = createContext();
export const LineContextProvider = ({children}) => {
    const [lineGrowth, setLineGrowth] = useState('coloured-line'); 
    return <LineContext.Provider value={{lineGrowth, setLineGrowth}}>
        {children}
    </LineContext.Provider>
}