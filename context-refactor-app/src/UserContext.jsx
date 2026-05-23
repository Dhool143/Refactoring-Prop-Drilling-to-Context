

import { createContext, useState } from "react";

export const UserContext = createContext()


export  function UserProvider({children}) {
    const [user, setUser] = useState({

        name: "Ali",
        email: "aliahmed@gmail.com",
        themepreference: "dark",

        
    })

    return (

      
        <UserContext.Provider value={{user}}> 

            {children}
        </UserContext.Provider>


)



}
