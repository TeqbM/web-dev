import { createContext } from "react";

const AppContext =  createContext();

const AppProvider = ({children}) => {
     return(
          <AppContext.Provider value={{name:"mukesh"}}>
               {children}
          </AppContext.Provider>
     )
} 


export {AppContext, AppProvider}