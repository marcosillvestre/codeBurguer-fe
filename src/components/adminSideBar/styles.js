/* eslint-disable prettier/prettier */

import { Link } from 'react-router-dom';

import styled from 'styled-components';


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
gap: 32px;
  margin: 4px -7px;
  background: ${props => props.isActive ? "#565656" : "none"};
  color: ${props => props.isActive ? "black" : "white"};
  border-radius: ${props => props.isActive ? "16px" : "0px"};
  

  &:hover{
    border-radius: 5px 0 0 5px;
  background: #efefef;
  color: black;
  transform:${props => !props.trans && "translateX(15px)"};
  transition: transform 0.5s;
}
`