/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const OfferLogo = styled.img`
`

export const Container = styled.div`
    display: flex ;
    flex-direction: column ;
    gap: 20px;
    align-items: center ;
    background-color: #ffffff; 
    padding: 20px 10px ;

    .rec.rec-arrow {
        color:  #ffffff ;
        background-color: #9758A6;
        border: #9758A6 ;
}

    .rec.rec-arrow:hover {
        background-color: #ffffff;
        color: #9758A6 ;
        border: #9758A6 ;
}
    .rec.rec-arrow:disabled {
        visibility: hidden ;
}

`

export const ContainerItens = styled.div`
    display: flex ;
    align-items: center ;
    flex-direction: column ;
    gap: 15px;
    padding: 35px 0; n
    
    p{
    text-align:start ;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: #424242;

    }
`

export const OfferImage = styled.img`
    border-radius: 10px ;
    width: 180px ;

`
export const OfferButton = styled.button`

    width: 180px;
    height: 50px;

    background: #9758A6;
    border-radius: 8px;
    border: none ;
    color: #ffffff ;


    &:hover{
        opacity: 0.8 ;
    }
    &:active{
        opacity: 0.5 ;
    }

    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
    text-align: center;
    color: #FFFFFF;
`
