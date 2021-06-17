/* eslint-disable react-hooks/exhaustive-deps */
import { createContext,  useState } from "react";


export const AppContext = createContext();

const initialState = { isLoggedIn: false};

export default function StateProvider({ children }) {
    
  const [appData, setAppData] = useState(initialState);
 
  return (
    <AppContext.Provider
      
    value={{state: appData, setState: setAppData}}
    >
      {children}
    </AppContext.Provider>
  );
}
