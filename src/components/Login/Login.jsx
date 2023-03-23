import {React, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '/src/assets/img/logo.svg'
import { Link } from 'react-router-dom'
import api from "../../apis/index";
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/" style={{ fontSize: "14px" }}>
        RedJODS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  //Estamos importando el contexto de AuthContext y utilizando la función useContext para acceder a la función setAuthData.
  const { authData, setAuthData }=useContext(AuthContext);
  // Hook de react router dom para navegar al darle submit
  const navigate = useNavigate();

  //This handle the submit of login
  const handleSubmit = async(event) => {
    event.preventDefault();
    const rawFormData = new FormData(event.currentTarget);
    const dataToSend = {
      email: rawFormData.get('email'),
      password: rawFormData.get('password')
    } 
    console.log({dataToSend});
    let res = await api.post("/Api/v1/login", dataToSend);
    console.log(res.data);
    const role = res.data.data.role;
    const token = res.data.tokenSession;
    const email = res.data.data.email;
    const name=res.data.data.name;
    setAuthData({ token, role, email, name });
    console.log(authData.role);
    swal({
      title: "Inicio de Sesión",
      text: `Has iniciado sesión correctamente! 
      Tu rol es ${role}`,
      icon: "success",
      button: "aceptar"
    });

    navigate("/home");

  };

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
          <img src={logo} alt="Logo RedJODS"/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container>
              <Grid item xs>
                <Link to="/recover">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"¿No tienes una cuenta? Regístrate"}
                </Link>
              </Grid> */}
            </Grid>
            {/*<FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuérdame"
            />*/}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{textTransform: "Capitalize"}}
              >
                Ingresar
              </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}