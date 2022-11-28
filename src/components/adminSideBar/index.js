/* eslint-disable prettier/prettier */
import React from 'react';
import { useHistory } from 'react-router-dom';

import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu
} from 'cdbreact';
import PropTypes from 'prop-types';

import allPaths from '../../constants/paths';
import { useUser } from '../../hooks/UserContext';
import { Bar, ListLink, MenuItem } from './styles';


const Sidebar = ({ path }) => {
    const { push } = useHistory()
    const { logOut } = useUser()

    const unLog = async () => {
        logOut()
        push(allPaths.login)
    }
    return (
        <Bar>
            <CDBSidebar textColor="#fff" backgroundColor="#333">

                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href={allPaths.home} className="text-decoration-none" style={{ color: 'inherit' }}>
                        Code Burguer
                    </a>

                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>

                        <ListLink exact to={allPaths.admin} >
                            <MenuItem isActive={path === allPaths.admin}> <HomeIcon /> Pedidos </MenuItem>
                        </ListLink>

                        <ListLink exact to={allPaths.listProducts} >
                            <MenuItem isActive={path === allPaths.listProducts}> <ShoppingCartIcon />Listar produtos</MenuItem>
                        </ListLink>

                        <ListLink exact to={allPaths.newProduct} >
                            <MenuItem isActive={path === allPaths.newProduct} ><AddToPhotosIcon />Adicionar produto</MenuItem>
                        </ListLink>

                        {/* <ListLink exact to={allPaths} >
                            <MenuItem> <DensitySmallIcon />Produtos</MenuItem>
                        </ListLink> */}


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

Sidebar.propTypes = {
    path: PropTypes.string
}
