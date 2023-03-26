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
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const pages=[
    {
        name: 'Proyectos |',
        route: '/home'
    },
    {
        name: 'Mis Proyectos |',
        route: '/myprojects'
    },
    {
        name: 'Crear Proyecto |',
        route: '/createproject'
    },
    {
        name: 'Usuarios |',
        route: '/users'
    }
];

const settings=[
    {
        name: 'Cerrar Sesión',
        route: '/'
    }
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

    //Using AuthContext information
    const { authData, setAuthData }=useContext(AuthContext);
    const { token, role }=authData;

    const handleCloseSession = () => {
        const rolenull=null;
        const tokennull=null;
        const emailnull=null;
        const namenull=null;
        setAuthData({ tokennull, rolenull, emailnull, namenull });
    }

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
                                        (page.name==='Usuarios |'&&role!=='superAdmin')? null:
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
                                    <button onClick={handleCloseSession}>
                                        <Link to={setting.route}>
                                            <Typography textAlign="center">{setting.name}</Typography>
                                        </Link>
                                    </button>
                                    
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
                                (page.name==='Usuarios |'&&role!=='superAdmin')? null:
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
                                        <button onClick={handleCloseSession}>
                                            <Link to={setting.route}>
                                                <Typography textAlign="center">{setting.name}</Typography>
                                            </Link>
                                        </button>
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
