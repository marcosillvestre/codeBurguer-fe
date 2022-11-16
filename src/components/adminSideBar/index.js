/* eslint-disable prettier/prettier */
import React from 'react';
import { useHistory } from 'react-router-dom';

import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu
} from 'cdbreact';

import { useUser } from '../../hooks/UserContext';
import { Bar, ListLink, MenuItem } from './styles';


const Sidebar = () => {
    const { push } = useHistory()
    const { logOut } = useUser()

    const unLog = async () => {
        logOut()
        push("/login")
    }


    return (
        <Bar>
            <CDBSidebar textColor="#fff" backgroundColor="#333">

                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Code Burguer
                    </a>

                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>

                        <ListLink exact to="/admin" >

                            <MenuItem><HomeIcon /> Home </MenuItem>
                        </ListLink>

                        <ListLink exact to="/listagem-produtos" >
                            <MenuItem><ShoppingCartIcon />Listar pedidos</MenuItem>
                        </ListLink>

                        <ListLink exact to="/produtos" >
                            <MenuItem><DensitySmallIcon />Produtos</MenuItem>
                        </ListLink>

                        <ListLink exact to="/*" >
                            <MenuItem ><PostAddIcon />Adicionar produto</MenuItem>
                        </ListLink>

                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div>
                        <MenuItem onClick={unLog} trans={true} ><LogoutIcon />LogOut</MenuItem>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </Bar>
    );
};




export default Sidebar;