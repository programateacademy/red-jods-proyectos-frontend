import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Decoración from '/Decoración.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ODS } from './Data';
import './Home.css'
import Pagination from '@mui/material/Pagination';


export default function Home() {

    const [page, setPage] = useState (1)


    const handleChange = (e, p) => {
        console.log(e,p)
        setPage(p)
    }

    return (
        <div>
            {/* This elements are displayed when screen is medium or large */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <h1 style={{ padding: "40px 40px 0px 40px" }}>¡Hola Súper Administrador!</h1>
                <img src={Decoración} alt="" style={{ padding: "0 0 40px 40px" }} />
            </Box>



            {/* This elements are displayed when screen is small */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <h1 style={{ padding: "10px 10px 0px 10px" }}>¡Hola Súper Administrador!</h1>
                <img src={Decoración} alt="" style={{ padding: "0 0 10px 10px", maxWidth: "280px" }} />
            </Box>
            <div className="cardBox">
                {ODS.map(item => {
                    return (

                        <Card id='Card' sx={{ maxWidth: 300 }}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={item.img}
                                title={item.Name}
                            />
                            <CardContent>
                                <h2>{item.Name}</h2>
                                <h3>{item.ODS}</h3>
                            </CardContent>
                            <CardActions id='actionsBox'>
                                <Button id='Btn1' variant="contained">Ver Proyecto</Button>
                                <Button id='Btn2' variant="outlined">Editar</Button>
                            </CardActions>
                        </Card>

                    )
                })}
            </div>

            <h1>Current page is {page}</h1>
            
            <Pagination count={10} onChange={handleChange} color="primary" />
              
            
        </div>
    )
}
