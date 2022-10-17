/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const CategoryLogo = styled.img`
`

export const Container = styled.div`
    display: flex ;
    flex-direction: column ;
    gap: 20px;
    align-items: center ;
    background-color: #E5E5E5; 
    padding: 20px 80px ;
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
    padding: 35px 0 ;
`

export const CategoryImage = styled.img`
    border-radius: 10px ;
    width: 180px ;

`
export const CategoryButton = styled.button`

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
