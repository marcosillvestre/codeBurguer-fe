/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
// import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

import cart from '../../assets/cart.svg'
import profile from '../../assets/profile.svg'
import { useUser } from '../../hooks/UserContext'
import { Container, HeaderImg, RightContainer, LeftContainer, Profile, Pagelink } from './styles'


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
					<div className='Names'>
						<p>Olá,</p> <p> {name} </p>
					</div>
					<a onClick={logOutUser}> Sair </a>
				</div>
			</RightContainer>

		</Container>
	)
}   
