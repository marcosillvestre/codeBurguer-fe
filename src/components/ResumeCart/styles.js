/* eslint-disable prettier/prettier */
import styled from 'styled-components'

import { Button } from '../../components'

export const Container = styled.div`

background: #FFFFFF;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
margin-top: 40px;
height: 450px ;
padding: 50px ;
position: sticky;
right: 10% ;
top: 100px ;

`
export const ContainerItens = styled.div`
display: flex;
flex-direction: column ;
gap: 20px;
margin-bottom: 50px ;
div{
  display: flex;
  justify-Content: space-between 
}

`

export const Finalize = styled(Button)`
position: relative ;
left: 40px ;
`