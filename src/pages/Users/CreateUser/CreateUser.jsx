import React, { useState, useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import users from "../../../services/api/index";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AuthContext } from '../../../contexts/AuthContext';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://redJODS.netlify.app">
                RedJODS
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme=createTheme();

export default function NewUser() {

    //Using AuthContext information
    const { authData }=useContext(AuthContext);
    const { token }=authData;
    const [rol, setRol]=useState("");
    // Hook de react router dom para navegar al darle submit
    const navigate=useNavigate();

    const handleRolChange=(e) => {
        setRol(e.target.value);
    };

    // It is an event handler that handles the submission of the form. When the user submits the form, this event handler takes the current values of the form fields (name, lastname, duration, password, date, and country) and passes them to the addUser method to add a new element.
    const handleSubmit= async(e) => {
        e.preventDefault();
        const rawFormData=new FormData(e.currentTarget);
        const dataToSend={
            name: rawFormData.get('name'),
            last_name: rawFormData.get('last_name'),
            email: rawFormData.get('email'),
            password: rawFormData.get('password'),
            phone: rawFormData.get('phone'),
            role: "admin",
            state: true
        }
        console.log({ dataToSend });
        //This tries to interacts with the API and Create One User and awaits the response
        let res=await users.post("/Api/v1/user", dataToSend, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(res.data);
        swal({
            title: "Creación de Usuario",
            text: `Has creado el usuario ${res.data.data.name} correctamente!`,
            icon: "success",
            button: "aceptar"
        });
        if (res.data.data._id){
            navigate("/users");
        }

    };

    //To show password
    // Add these variables to your component to track the state
    const [showPassword, setShowPassword]=useState(false);
    const handleClickShowPassword=() => setShowPassword(!showPassword);
    const handleMouseDownPassword=() => setShowPassword(!showPassword);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Crear Nuevo Usuario
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nombre"
                                    autoFocus
                                    // onChange={handleNameChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Apellido"
                                    name="last_name"
                                    autoComplete="family-name"
                                    // onChange={handleLastNameChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo Electrónico"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    id="password"
                                    autoComplete="new-password"
                                    variant="outlined"
                                    type={showPassword? "text":"password"} // <-- This is where the magic happens
                                    InputProps={{ // <-- This is where the toggle button is added.
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword? <Visibility />:<VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Teléfono"
                                    name="phone"
                                    autoComplete="family-name"
                                    // onChange={handlePhoneChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="rol"
                                        value={rol}
                                        label="Rol"
                                        onChange={handleRolChange}
                                    >
                                        <MenuItem value={10}>user</MenuItem>
                                        <MenuItem value={20}>admin</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Crear Usuario
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}