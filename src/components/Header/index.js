/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import cart from '../../assets/cart.svg'
import profile from '../../assets/profile.svg'
import { useUser } from '../../hooks/UserContext'
import { Container, HeaderImg, RightContainer, LeftContainer, Profile, Pagelink } from './styles'


export function Header() {

    const { logOut, userData: { data } } = useUser()

    // useEffect(() => {
    //     const vnt = async () => {
    //         await console.log(data)
    //     }



    //     vnt()
    // }, [])


    console.log(data)

    // const [names, setName] = useState()

    // useEffect(() => {
    //     const puttingName = () => {
    //         setName(name)
    //     }
    //     puttingName()
    // }, [])



    const { push, location: { pathname } } = useHistory()

    const logOutUser = () => {
        logOut()
        push("/login")
    }

    return (
        <Container>
            <LeftContainer>
                <Pagelink onClick={() => push("/")} isActive={pathname === '/'}> Home</Pagelink>
                <Pagelink onClick={() => push("/produtos")} isActive={pathname.includes('produtos')} >Ver produtos </Pagelink>
            </LeftContainer>

            <RightContainer>
                <a isActive={pathname === 'carrinho'} onClick={() => push("/carrinho")}>  <HeaderImg src={cart} /></a>
                <Profile>
                    <a href='#'>  <HeaderImg src={profile} /></a>

                </Profile>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <p>Olá, { } </p>
                    <a onClick={logOutUser}> Sair </a>
                </div>
            </RightContainer>

        </Container>
    )
}   
