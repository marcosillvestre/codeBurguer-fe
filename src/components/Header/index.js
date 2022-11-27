/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
// import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

import cart from '../../assets/cart.svg'
import profile from '../../assets/profile.svg'
import allPaths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import { Container, HeaderImg, LeftContainer, Names, Pagelink, Profile, RightContainer } from './styles'


export function Header() {
	const [name, setName] = useState()

	const { logOut } = useUser()

	useEffect(() => {

		const loadUserData = async () => {
			const clientInfo = await localStorage.getItem('codeBurguer:userData')
			const name = clientInfo && JSON.parse(clientInfo).data.name
			setName(name)
		}
		loadUserData()
	}, [])


	const { push, location: { pathname } } = useHistory()

	const logOutUser = () => {
		logOut()
		push(allPaths.login)
	}

	return (
		<Container>
			<LeftContainer>
				<Pagelink onClick={() => push(allPaths.home)} isActive={pathname === '/'}> Home</Pagelink>
				<Pagelink onClick={() => push(allPaths.products)} isActive={pathname.includes('produtos')} >Ver produtos </Pagelink>
			</LeftContainer>

			<RightContainer>
				<a isActive={pathname === 'carrinho'} onClick={() => push(allPaths.cart)}>  <HeaderImg src={cart} /></a>
				<Profile>
					<a href='#'>  <HeaderImg src={profile} /></a>

				</Profile>
				<Names>
					<p> Olá, {name} </p>
					<a onClick={logOutUser} style={{ color: "#9758A6" }}> Sair </a>

				</Names>

			</RightContainer>

		</Container>
	)
}   
