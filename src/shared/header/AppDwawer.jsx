import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link, useNavigate } from 'react-router-dom';
// import MailIcon from '@mui/icons-material/Mail';
// import { Stack } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
// import "./navbar.css"
import logo from "../../assets/logo.png"
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { toast } from 'react-toastify';
const drawerWidth = 240;
const navItems = ['Home', "contact", "Gellary"];

function AppDwawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    // getting existing user
    const { user, logOut } = useAuth()
    const [btnToggle, setbtnToggle] = useState(true)
    const navigate = useNavigate()




    const handleUserBtn = () => {
        setbtnToggle(!btnToggle)
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6">
                <div className='px-1 bg-slate-600 py-2 flex'>
                    <img src={logo} alt="" className='max-w-[150px] h-auto' />
                    <div className='inline pointer-events-none'>
                        {
                            user ? <Button sx={{ color: '#fff' }}>
                                <img src={user?.photoURL} alt={user.displayName} className='w-10 rounded-full h-10' rel="no-referrer" />
                            </Button> :
                                <Button sx={{ color: '#fff' }}>
                                    login
                                </Button>
                        }
                    </div>
                </div>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link to={`/${item}`}> <ListItemText primary={item} /></Link>
                        </ListItemButton>
                    </ListItem>
                ))}
                <Link>projects</Link>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    // hadle logout
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("You Have Logged Out", {
                    position: "bottom-right",
                    delay: 1500
                });
                navigate("/")
            })
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <div className="container mx-auto">
                    <Toolbar style={{ minHeight: "auto", padding: "0 10px", justifyContent: "space-between" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuOpenIcon />
                        </IconButton>
                        <div className='inline sm:hidden'>
                            {
                                user ? <div className='text-white group relative'>
                                    <img src={user?.photoURL} alt={user.displayName} className='w-10 rounded-full h-10' rel="no-referrer" />
                                    <div className={`absolute -right-0 top-12 bg-white group-hover:block hidden`}>
                                        <Button sx={{ color: '#fff' }} className='whitespace-nowrap' style={{ color: "black", fontWeight: "bold" }} onClick={handleLogout} >
                                            Log Out
                                        </Button>
                                    </div>
                                </div> :
                                    <Link to="/login">
                                        <Button sx={{ color: '#fff' }}>
                                            login
                                        </Button>
                                    </Link>
                            }
                        </div>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontWeight: "bold" } }}
                        >
                            <Link to="/">
                                <img src={logo} alt="" className='w-32' />
                            </Link>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block', height: 'auto' } }}>
                            {navItems.map((item) => (
                                <Link key={item} to={`${item}`}>
                                    <Button sx={{ color: '#fff' }}>
                                        {item}
                                    </Button>
                                </Link>
                            ))}
                            <div className='inline'>
                                {
                                    user ? <Button sx={{ color: '#fff' }} onClick={handleUserBtn} className='group relative'>
                                        <img src={user?.photoURL} alt={user.displayName} className='w-10 rounded-full h-10' rel="no-referrer" />
                                        <div className={`absolute -right-5 top-12 bg-white group-hover:block hidden`}>
                                            <Button sx={{ color: '#fff' }} className='whitespace-nowrap' style={{ color: "black", fontWeight: "bold" }} onClick={handleLogout} >
                                                Log Out
                                            </Button>
                                        </div>
                                    </Button> :
                                        <Link to="/login">
                                            <Button sx={{ color: '#fff' }}>
                                                login
                                            </Button>
                                        </Link>
                                }
                            </div>
                        </Box>
                    </Toolbar>
                </div>
            </AppBar>
            <nav>
                {/* <Box>
                <Typography variant='h4'>hi</Typography>
                </Box> */}

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}>
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

AppDwawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default AppDwawer;