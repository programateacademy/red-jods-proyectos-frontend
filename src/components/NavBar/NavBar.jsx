import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '/src/assets/img/logo.svg'
import { Link } from 'react-router-dom'
import UserLogo from '/src/assets/img/User.png'
import Decoración from '/src/assets/img/Decoración.png'

const pages=[
    {
        name: 'Inicio |',
        route: '/'
    },
    {
        name: 'Proyectos |',
        route: '/projects'
    },
    {
        name: 'Crear Proyecto |',
        route: '/newproject'
    },
    {
        name: 'Admins |',
        route: '/admins'
    }
];

const settings=[
    {
        name: 'Iniciar Sesión',
        route: '/signin'
    }

    // 'Perfil', 
    // 'Cuenta', 
    // 'Dashboard', 
    // 'Logout'
];

function NavBar() {
    const [anchorElNav, setAnchorElNav]=React.useState(null);
    const [anchorElUser, setAnchorElUser]=React.useState(null);

    const handleOpenNavMenu=(event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu=(event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu=() => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu=() => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "white", justifyContent: 'space-between' }}>
            <Container maxWidth="xl">
                <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }}>

                    {/* This elements are displayed when screen is medium or large */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <Link to="/">                        
                            <img src={logo} alt="" style={{ maxHeight: "90px" }} />
                        </Link>

                    </Box>
                    
                        {/* This is the box corresponding to pages menu when the screen is large enough*/}
                    <Box sx={{ display: { xs: 'none', md: 'flex', flexDirection: 'column' } }}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                {pages.map((page) => (
                                        <Link key={page.name} to={page.route} style={{marginRight: "10px", marginLeft: "5px"}}>
                                            {page.name}
                                        </Link>
                                ))}
                            </div>
                            <img src={Decoración} alt="" style={{ maxWidth: "460px", maxHeight: "5px" }} />

                        </Box>

                    {/* This is the box corresponding to users menu in large screen size */}
                    <Box sx={{ display: { xs: 'none', md: 'flex', flexDirection: 'column' } }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={UserLogo} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                                    <Link to={setting.route}>
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* This elements are displayed when screen is small */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <Link to="/">   
                            <img src={logo} alt="" style={{ maxHeight: "53px" }} />
                        </Link>
                    </Box>

                    {/* This is the box corresponding to pages menu in small screens */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon style={{color: "black"}}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Link to={page.route}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            {/* This is the box corresponding to users menu in any screen size */}
                            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                                {settings.map((setting) => (
                                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                                        <Link to={setting.route}>
                                            <Typography textAlign="center">{setting.name}</Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Box>
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
