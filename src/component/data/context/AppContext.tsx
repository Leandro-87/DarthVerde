import { createContext } from "react";

const AppContext= createContext({
})

export function AppProvider(props){
    return (
        <AppContext.Provider value={{
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
