/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState, useEffect } from "react"

import Proptypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState()
    // dados pra aplicação
    const putInfo = async (userInfos) => {
        setUserData(userInfos)

        await localStorage.setItem('codeBurguer:userData', JSON.stringify(userInfos))
    }

    const logOut = async () => {
        await localStorage.removeItem('codeBurguer:userData')
    }


    useEffect(() => {

        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('codeBurguer:userData')

            if (clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }

        }
        loadUserData()
    }, [])





    return (
        <UserContext.Provider value={{ putInfo, userData, logOut }}>

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