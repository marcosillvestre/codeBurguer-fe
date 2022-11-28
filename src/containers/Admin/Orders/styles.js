/* eslint-disable prettier/prettier */
import Select from 'react-select'

import styled from 'styled-components'

export const Container = styled.div`
    min-height: calc(100vh - 70px) ;
    text-align: center ;
    min-width: calc(100vw - 500px);
    overflow-y: scroll ;
::-webkit-scrollbar{
    display: none;
}
    
`

export const ProductImg = styled.img`
    width: 70px ;
    height: 70px ;
    border-radius: 5px;
`

export const SelectStatus = styled(Select)`
.css-1s2u09g-control{
    cursor: pointer;
    width: 250px ;
}
`
export const Menu = styled.div`
display: flex;
gap: 50px;
justify-content: center;
margin: 20px 0;
`

export const LinkMenu = styled.a`
text-decoration: none;
color: #323D5D ;
cursor: pointer;
padding: 10px 0 ;
    border-bottom:  ${props => props.isActive && '3px solid #9758A6'} ;
    font-weight:  ${props => props.isActive && 'bold'} ;

`


