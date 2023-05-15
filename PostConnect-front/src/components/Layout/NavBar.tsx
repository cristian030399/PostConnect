import React, { ReactNode } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { drawerWidth } from '../../common/values';
import MuiDrawer from '@mui/material/Drawer';
import { IconButton, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service';

type DrawerHeaderProps = {
    children: ReactNode
}

interface NavBarProps {
    open: boolean,
    handleDrawerClose: () => void,
    DrawerHeader: React.ComponentType<DrawerHeaderProps>
}

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const menuItems = [
    {
        text: 'Posts',
        to: '/',
        icon: <FormatListBulletedIcon />
    }
]

const NavBar = ({ open, handleDrawerClose, DrawerHeader }: NavBarProps) => {
    const theme = useTheme();

    const navigate = useNavigate()
    const logout = () => {
        authService.logout()
        navigate('/login')
    }

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {menuItems.map(menuItem => (
                    <NavLink to={menuItem.to} key={menuItem.text} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {({ isActive }) => (
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    selected={isActive}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {menuItem.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={menuItem.text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </NavLink>
                ))}
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}

                        onClick={logout}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Cerrar sesión'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Drawer>
    )
}

export default NavBar