/* eslint-disable prettier/prettier */
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import styled from 'styled-components';

export const Container = styled.div`
width: 90% ;
height: calc(100vh - 50px) ;
`

export const EditIcon = styled(AutoFixNormalIcon)`
&:hover{
    opacity: 0.8 ;
    cursor: pointer;
}
` 