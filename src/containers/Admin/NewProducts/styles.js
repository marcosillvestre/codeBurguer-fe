/* eslint-disable prettier/prettier */

import Select from 'react-select'

import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
    min-height: calc(100vh - 70px) ;
    text-align: center ;
    width: calc(100vw - 500px);
    display: flex ;
    justify-content: center ;
    
`
export const ContainerItens = styled.main`
min-width: 500px ;
background: #565656 ;
padding: 50px  ;
display: flex;
justify-content: center ;
flex-direction: column ;
text-align: left ;
gap: 15px ;
min-height: 65% ;
color: #ffffff;
border-radius: 15px;
`
export const SelectCategory = styled(Select)`
color: black;
margin-bottom: 10px;

`
export const ButtonProducts = styled(Button)`
width: 100% ;
height: 50px;
`
export const Label = styled.label`
margin-bottom: -8px;
`

export const Input = styled.input`
border-radius: 10px;
border: none;
height: 35px ;
padding-left: 15px;
margin-bottom: 10px;
`

export const LabelUpload = styled.label`
border: 1px dashed #FFFFff;
display: flex ;
gap: 10px;
justify-content: center ;
align-items: center ;
margin-bottom: 10px;

input{
    width: 0 ;
    opacity: 0  ;
}
`



