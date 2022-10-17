/* eslint-disable prettier/prettier */

import React from "react";

import PropTypes from 'prop-types'

import { CartProvider } from './CartContext'
import { UserProvider } from "./UserContext";

const AppProvider = ({ children }) => (
    <CartProvider>
        <UserProvider>{children}</UserProvider>
    </CartProvider>
)
/* nao importa quem fica dentro de quem */

AppProvider.propTypes = {
    children: PropTypes.node
}

export default AppProvider