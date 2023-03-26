import {React, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '/src/assets/img/logo.svg'
import { Link } from 'react-router-dom'
import api from "../../services/api/index";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
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
      <Link to="/" style={{ fontSize: "14px" }}>
        RedJODS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Recover() {
  //Estamos importando el contexto de AuthContext y utilizando la función useContext para acceder a la función setAuthData.
  const { authData, setAuthData }=useContext(AuthContext);
  // Hook de react router dom para navegar al darle submit
  const navigate = useNavigate();
  //Handle email change
  const [tokenPreview, setTokenPreview]=useState("");
  const handleTokenChange=(e) => {
    setTokenPreview(e.target.value);
    console.log(tokenPreview)
  } 

  //This handle the submit of login
  const handleSubmit = async(event) => {
    event.preventDefault();
    const rawFormData = new FormData(event.currentTarget);
    const dataToSend = {
      email: rawFormData.get('email'),
      password: rawFormData.get('password')
    } 
    console.log({dataToSend});
    let res = await api.post("/Api/v1/login/password-recovery", dataToSend, {
      headers: {
        Authorization: `Bearer ${tokenPreview}`
      }
    });
    console.log(res.data);
    swal({
      title: "Recuperación de Contraseña",
      text: `Has cambiado exitosamente la contraseña del correo ${res.data.email} ! 

      Inicia Sesión con los nuevos datos de acceso`,
      icon: "success",
      button: "aceptar"
    });
    navigate("/");
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
          {/* <img src={logo} alt="Logo RedJODS"/> */}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Recuperar Contraseña
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="token"
              label="Código Enviado al Correo Electrónico"
              name="token"
              autoComplete="token"
              autoFocus
              onChange={handleTokenChange}
            />
            
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{textTransform: "Capitalize"}}
              >
                Establecer Nueva Contraseña
              </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}