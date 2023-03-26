import Box from "@mui/material/Box";
import Decoración from "../../assets/img/Decoración.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./Home.css";
import AppPagination from "../../components/pagination/pagination";
import { useState, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom'

export default function Home() {
  const [card, setCard] = useState([]);
  //Using AuthContext information
  const { authData }=useContext(AuthContext);
  const { token, role, name }=authData;

  return (
    <div className="container_box">
      {/* This elements are displayed when screen is small */}
      <Box className="container2" sx={{ display: { xs: "grid", md: "none" } }}>
        <h1>¡Hola {name}, eres {role}!</h1>
        <img src={Decoración} alt="" />
      </Box>
      <div className="cardBox">
        {card.map((item) => {
          return (
            <Card key={item.id} id="Card" sx={{ maxWidth: 280 }}>
              <CardMedia
                sx={{ height: 280 }}
                image={item.img}
                title={item.Name}
              />
              <CardContent>
                <h2>{item.Name}</h2>
                <h3>{item.ODS}</h3>
              </CardContent>
              <CardActions id="actionsBox">
                <Link to='ViewProject'>
                  <Button id="Btn1" variant="contained">
                    Ver Proyecto
                  </Button>
                </Link>
                <Link>              
                  <Button id="Btn2" variant="outlined">
                    Editar
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <AppPagination setCard={(p) => setCard(p)} />
    </div>
  );
}