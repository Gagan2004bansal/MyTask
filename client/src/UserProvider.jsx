import { createContext } from "react"

export const UserContext = createContext(); 

const UserProvider = ({children}) => {
  
    const user = "Gagan Bansal";
    
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider