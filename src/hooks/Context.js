/* eslint-disable prettier/prettier */
import React, { createContext, useContext } from "react"

import Proptypes from 'prop-types'
const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const user = { name: 'marcos', age: 20 }
    // dados pra aplicação

    return (
        <UserContext.Provider value={{ user }}>

            {children}

        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("user most be used with UserContext")
    }

    return context
}
UserProvider.propTypes = {
    children: Proptypes.node
}