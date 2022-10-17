/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState, useEffect } from "react"

import Proptypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState([])
    // dados pra aplicação

    const updateLocalStorage = async product => {
        await localStorage.setItem('codeBurguer:cartInfo', JSON.stringify(product))
    }






    const putInfoInCart = async product => {
        const cartIndex = cartData.findIndex(prod => prod.id === product.id)
        let newCart = []

        if (cartIndex >= 0) {
            newCart = cartData
            newCart[cartIndex].quantity =
                newCart[cartIndex].quantity + 1

            setCartData(newCart)
        }
        else {
            product.quantity = 1
            newCart = [...cartData, product]
            setCartData(newCart)
        }
        await updateLocalStorage(newCart)

    }

    const increaseCart = async prodId => {
        const newCart = cartData.map(product => {
            return product.id === prodId ? { ...product, quantity: product.quantity + 1 } : product

        })
        setCartData(newCart)
        await updateLocalStorage(newCart)

    }

    const removeCart = async productId => {
        const cartIndex = cartData.filter(pd => pd.id !== productId)
        setCartData(cartIndex)
        await updateLocalStorage(cartIndex)

    }

    const decreaseCart = async productId => {
        const cartIndex = cartData.findIndex(pd => pd.id === productId)

        if (cartData[cartIndex].quantity > 1) {
            const newQuantity = cartData.map(product => {
                return product.id === productId ? { ...product, quantity: product.quantity - 1 } : product

            })
            setCartData(newQuantity)
            await updateLocalStorage(newQuantity)
        } else {
            removeCart(productId)
        }

    }

    useEffect(() => {

        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('codeBurguer:cartInfo')

            if (clientInfo) {
                setCartData(JSON.parse(clientInfo))
            }

        }
        loadUserData()
    }, [])



    return (
        <CartContext.Provider value={{ putInfoInCart, cartData, increaseCart, decreaseCart }}>

            {children}

        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("Cart most be used with UserContext")
    }

    return context
}
CartProvider.propTypes = {
    children: Proptypes.node
}