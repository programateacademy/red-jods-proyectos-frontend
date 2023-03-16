import Box from "@mui/material/Box";
import Decoración from "../../assets/img/Decoración.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./Home.css";
import AppPagination from "./pagination/pagination";
import { useState } from "react";

export default function Home() {
  const [card, setCard] = useState([]);

  return (
    <div className="container_box">
      {/* This elements are displayed when screen is medium or large */}
      <Box className="container1" sx={{ display: { xs: "none", md: "block" } }}>
        <h1 style={{ padding: "50px 40px 0px 0px" }}>
          ¡Hola Súper Administrador!
        </h1>
        <img src={Decoración} alt="" style={{ maxWidth: "480px" }} />
      </Box>

      {/* This elements are displayed when screen is small */}
      <Box className="container2" sx={{ display: { xs: "block", md: "none" } }}>
        <h1>¡Hola Súper Administrador!</h1>
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
                <Button id="Btn1" variant="contained">
                  Ver Proyecto
                </Button>
                <Button id="Btn2" variant="outlined">
                  Editar
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>

      <AppPagination setCard={(p) => setCard(p)} />
    </div>
  );
}
