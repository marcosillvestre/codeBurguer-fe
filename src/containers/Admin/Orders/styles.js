/* eslint-disable prettier/prettier */
import Select from 'react-select'

import styled from 'styled-components'

export const Container = styled.div`
    background: #efefef ;
    min-height: 100vh ;
    padding: 100px 30px ;
    text-align: center ;
`

export const ProductImg = styled.img`
    width: 70px ;
    height: 70px ;
    border-radius: 5px;
`

export const SelectStatus = styled(Select)`
.css-1s2u09g-control{
    cursor: pointer;
}
`
export const Menu = styled.div`
display: flex;
gap: 50px;
justify-content: center;
margin: 20px 0;
`

export const LinkMenu = styled.a`
color: #323D5D ;
cursor: pointer;
padding: 10px 0 ;
    border-bottom:  ${props => props.isActive && '3px solid #9758A6'} ;
    font-weight:  ${props => props.isActive && 'bold'} ;

`


