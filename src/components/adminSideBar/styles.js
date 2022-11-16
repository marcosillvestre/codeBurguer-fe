/* eslint-disable prettier/prettier */

import { Link } from 'react-router-dom'

import styled from 'styled-components'


export const Bar = styled.div`
    display: flex;
    border-radius: 20px ;
    position: relative ;
`

export const ListLink = styled(Link)`
`

export const MenuItem = styled.div`
height: 60px ;
padding-left: 35px ;
display: flex;
align-items:center ;
gap: 20px;

&:hover{
  background: #ffffff ;
  color: black ;
  transform:${props => !props.trans && "translateX(15px)"};
  transition: transform 0.5s ;
}
`