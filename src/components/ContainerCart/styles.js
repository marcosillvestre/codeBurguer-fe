/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.div`
background: #FFFFFF;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
grid-template-columns: repeat(5, 1fr);
width: 65vw ;
margin: 40px 0 40px 70px ;
`
export const Img = styled.img`
width: 170px ;
border-radius: 25px ;

`
export const Header = styled.header`
display: grid ;
grid-template-columns: repeat(5, 1fr);
border-bottom: 1px solid #B5B5B5 ;
border-radius: 15px ;
padding: 20px ;
p{
font-weight: 400;
font-size: 17px;
line-height: 20px;
color: #9A9A9D;
text-align: center ;
}

`

export const CartContainer = styled.div`
display: grid ;
grid-template-columns: repeat(5, 1fr);
padding: 30px ;
gap: 20px;
p{
    font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #000000;
}
.quantity{
    display: flex ;
    gap: 20px;
    justify-content: center;
    button{
        background: transparent ;
        border: none;
        font-size: 25px;
        height: 15px ;
        &:active {
            opacity: 0.6;
        }
    }
    p{
        margin-top: 5px ;
    }
}
`

export const EmptyCart = styled.div`
    font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #000000;
padding: 50px ;
`