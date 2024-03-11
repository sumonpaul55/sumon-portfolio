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
import { Link } from 'react-router-dom';
// import MailIcon from '@mui/icons-material/Mail';
// import { Stack } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
// import "./navbar.css"
import logo from "../../assets/logo.png"
const drawerWidth = 240;
const navItems = ['Home', "contact", "Gellary", "login"];

function AppDwawer(props) {
    // console.log(props)
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <div className='px-3'>
                    <img src={logo} alt="" />
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

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <div className="container mx-auto">
                    <Toolbar style={{ minHeight: "auto", padding: "4px 10px" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuOpenIcon />
                        </IconButton>
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