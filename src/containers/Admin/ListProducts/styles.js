/* eslint-disable prettier/prettier */
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';

export const Container = styled.div`
width: 90% ;
height: calc(100vh - 50px) ;
overflow-y: scroll ;
::-webkit-scrollbar{
    display: none;
}
`

export const EditIcon = styled(AutoFixNormalIcon)`
&:hover{
    opacity: 0.8 ;
    cursor: pointer;
}
`

export const TrashIcon = styled(DeleteIcon)`
&:hover{
    opacity: 0.8 ;
    cursor: pointer;
}
`