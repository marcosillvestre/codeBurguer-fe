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
padding: 0  5em 0 20em  ;
align-items: center ;
  font-size: 1.2rem ;

a{
  text-decoration: none ;
  font-size: 1.2rem ;

  &:hover{
    opacity: 0.8 ;
  }


}
`
export const RightContainer = styled.div`
display: flex ;
gap: 50px;
align-items: center ;

a{
  border: none ;
  background: none ;
  font-size: 16px ;
  color: #9758A6 ;
  cursor: pointer;

  &:active{
opacity: 0.6 ;
  }
}
.Names{
  display: flex ;
  gap: 10px;
  p{
  font-size: 0.9rem ;

  }
p::first-letter {
  text-transform: uppercase;
}
}




`
export const LeftContainer = styled.div`
display: flex;
gap: 50px;

`
export const Pagelink = styled.a`

    color: ${props => (props?.isActive ? '#9758A6' : '#555555')} ;
    font-weight: ${props => (props?.isActive ? 'bold' : 'light')} ;
    font-size: 16px;
`
export const Profile = styled.div`
border-left: 1px solid #BABABA ;
padding-left: 25px ;

`
