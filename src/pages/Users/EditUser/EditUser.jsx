import React, {useState, useEffect, useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { AuthContext } from '../../../contexts/AuthContext';
import users from "../../../services/api/index";
import { useNavigate } from 'react-router-dom'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>{'Copyright © '}
            <Link color="inherit" href="https://redJODS.netlify.app">
                RedJODS
            </Link>{' '}{new Date().getFullYear()}{'.'}
        </Typography>
    );
}

const theme=createTheme();

export default function EditUser() {

    // //Using AuthContext information
    const { authData, setAuthData }=useContext(AuthContext);
    const { token, id }=authData;

    // Hook de react router dom para navegar al darle submit
    const navigate=useNavigate();

    const [name, setName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [role, setRole]=useState('');
    const [userData, setUserData]=useState({});

    useEffect(() => {
        setName(id.name);
        setLastName(id.last_name);
        setEmail(id.email);
        setPhone(id.phone);
        setRole(id.role);
    }, [userData]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data={
            name: name,
            last_name: lastName,
            email: email,
            phone: phone,
            role: role,
            state: true
        };
        let res=await users.put(`/Api/v1/user/${id._id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        swal({
            title: "Edición de Usuario",
            text: `El usuario ${id.name} fue modificado exitosamente`,
            icon: "success",
            button: "Aceptar"
        });
        navigate("/users");
    }

    return (
    <>
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
                        Editar Usuario
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
                                    value={name} onChange={e => setName(e.target.value)}
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
                                        value={lastName} onChange={e => setLastName(e.target.value)}
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
                                    value={email} onChange={e => setEmail(e.target.value)}
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
                                    value={phone} onChange={e => setPhone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="role"
                                        label="Role"
                                        value={role} onChange={e => setRole(e.target.value)}
                                    >
                                        <MenuItem value="user">Usuario</MenuItem>
                                        <MenuItem value="admin">Administrador</MenuItem>
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
                            Editar Usuario
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    </>
    );
}