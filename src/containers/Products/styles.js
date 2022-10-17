/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const ProductsLogo = styled.img`
width: 100vw;
`

export const Container = styled.div`
background: #E5E5E5;
min-height: 100vh ;
`

export const CategoryNav = styled.div`

display: flex;
flex-wrap: wrap ;
gap: 50px;
justify-content:center;
margin-top: 20px ;


`
export const CategoryButton = styled.button`

    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    cursor: pointer;
    border: none ;
    padding: 10px ;
    border-bottom:  ${props => props.isActivated && '3px solid #9758A6'} ;
    background: none ;
    color: ${props => (props.isActivated ? '#9758A6' : '#9A9A9D')};

    &:hover{
        color: #9758A6;
    }

`

export const ContainerProduct = styled.div`
padding: 80px ;
display: grid ;
grid-template-columns: repeat(3, 1fr);
flex-wrap: wrap ;
gap: 10px;

`
