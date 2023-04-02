import { createContext, useState } from "react";

export const StageContext = createContext();
export const StageContextProvider = ({children}) => {
    const [stage, setStage] = useState(0)
    return <StageContext.Provider value={{stage, setStage}}>
        {children}
    </StageContext.Provider>
} 