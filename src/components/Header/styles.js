/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const HeaderImg = styled.img`

`

export const Container = styled.div`
    z-index: 12;
text-decoration: none ;
border-bottom: 1px solid #BABABA;
position: fixed;
top: 0px ;
height: 70px ;
width: 100vw ;
background-color: #ffffff ;
display: flex ;
justify-content: space-between ;
padding: 10px 10em 5px 25em  ;
align-items: center ;

a{
  text-decoration: none ;
  &:hover{
    opacity: 0.8 ;
  }


}
`
export const RightContainer = styled.div`
display: flex ;
gap: 50px;
align-items: center ;

`
export const Names = styled.div`
  display: flex ;
  align-items: center ;
  p{ font-size: 18px ;  margin: 25px;
  ::first-letter { text-transform: uppercase; }}

  a{ font-weight: bold;   color: #9758A6;}

`
export const LeftContainer = styled.div`
display: flex;
gap: 50px;

`
export const Pagelink = styled.a`

    color: ${props => (props?.isActive ? '#9758A6' : '#555555')} ;
    font-weight: ${props => (props?.isActive ? 'bold' : 'light')} ;
    font-size: 18px;
`
export const Profile = styled.div`
border-left: 1px solid #BABABA ;
padding-left: 25px ;

`
