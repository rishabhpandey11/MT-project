import React, { useState } from 'react';
import { styled, useTheme, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../../appStore';
import HomeIcon from '@mui/icons-material/Home';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdSensors } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdListAlt } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { TbUserEdit } from "react-icons/tb";
import { PiUserListLight } from "react-icons/pi";

const drawerWidth = 200;

const openedMixin = (theme: Theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: '#212631',
    color: 'white',
});

const closedMixin = (theme: Theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    backgroundColor: '#212631',
    color: 'white',
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

interface DrawerProps {
    open?: boolean;
}

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})<DrawerProps>(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    color: 'white',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

function Sidenavuser() {
    const theme = useTheme();
    const navigate = useNavigate();
    const open = useAppStore((state) => state.dopen);
    const updateOpen = useAppStore((state) => state.updateOpen);

    // Dropdown state for the Sensor button
    const [sensorDropdownOpen, setSensorDropdownOpen] = useState(false);
    const toggleSensorDropdown = () => {
        setSensorDropdownOpen((prev) => !prev);
    };

    // Dropdown state for the User button
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const toggleUserDropdown = () => {
        setUserDropdownOpen((prev) => !prev);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={() => updateOpen(!open)} style={{ color: 'white' }}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/user")}>
                        <ListItemButton
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
                                    color: 'white',
                                }}
                            >
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                   
                </List>
            </Drawer>
        </Box>
    );
}

export default Sidenavuser;
