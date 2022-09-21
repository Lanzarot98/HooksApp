
import React, { useState } from 'react'
import { UserContext } from './UserContext'


// const user = {
//     id: 123,
//     name: 'Luis Miguel Rojas',
//     email: 'luis@google.com',
// }

export const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState();
    

  return (
    // <UserContext.Provider value={{ Hello: 'World', user, }}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
