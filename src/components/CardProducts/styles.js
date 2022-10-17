/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.div`
display: flex ;
gap: 15px;
width: 500px;
background: #FFFFFF;
box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
border-radius: 30px;
padding: 20px ;
div{
    display: flex ;
    flex-direction: column;
    justify-content: space-between ;
    width: 100% ;

}
`
export const Img = styled.img`
border-radius: 20px ;
width: 300px ;
`
export const ProductName = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 19px;
`
export const ProductPrice = styled.p`
font-weight: 500;
font-size: 18px;
line-height: 21px;
`
export const Button = styled.button`
color: #F6F6F9;
background: #9758A6;
border-radius: 30px;
border: none ;
width: 100% ;
height: 40px ;
font-weight: 400;
font-size: 15px;
line-height: 18px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
