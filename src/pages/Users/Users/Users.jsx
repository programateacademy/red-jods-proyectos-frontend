import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Decoración from '/src/assets/img/Decoración.png'
import users from "../../../services/api/index";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/material/locale';
import EditButton from '/src/assets/img/EditButton.svg'
import DeleteButton from '/src/assets/img/DeleteButton.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import './Users.css'
import swal from 'sweetalert';

export default function Users() {
    //Using AuthContext information
    const { authData, setAuthData }=useContext(AuthContext);
    const { token, id }=authData;
    //Variable for fecthing users
    const [usersList, setUsersList]=useState([]);
    //variables for filtering throughout search
    const [search, setSearch]=useState([]);
    const [usersListSearched, setUsersListSearched]=useState([]);
    //With this we fetch the data (READ) from the API and it is saved in an array called "data"
    useEffect(() => {
        async function fetchData() {
            const { data }=await users.get("/Api/v1/user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsersList(data);
            setUsersListSearched(data);
        }
        fetchData();
    }, []);

    //Code for search bar
    const handleChangeSearch = e => {
        setSearch(e.target.value);
        filtering(e.target.value);
    }

    const filtering=(searchTerm) => {
        var searchResult=usersList.filter((element) => {
            if (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase()) || 
                element.last_name.toString().toLowerCase().includes(searchTerm.toLowerCase()
            )) {
                return element;
            }
        });
        setUsersListSearched(searchResult);
    }

    // Hook de react router dom para navegar al darle submit
    const navigate=useNavigate();

    //Code for handle clicks on edit and delete buttons
    const handleCellClick=(param, event) => {
        event.stopPropagation();
    };

    const handleRowClick=(param, event) => {
        event.stopPropagation();
    };
    const handleDeleteClick=(param, event) => {
        removeUser(param._id)
    };

    const handleEditClick =(param) => {
        setAuthData({ ...authData, id: param.row });
        navigate("/edituser");
    };

    //Array with the field names in the admins table
    const columns=[
        { field: 'name', headerName: 'Nombre', width: 200 },
        { field: 'last_name', headerName: 'Apellido', width: 200 },
        { field: 'email', headerName: 'Correo Electrónico', width: 200 },
        { field: 'phone', headerName: 'Teléfono', width: 200 },
        { field: 'role', headerName: 'Rol', width: 200 },
        { 
            field: 'Acciones', 
            headerName: 'Acciones', 
            renderCell: (cellValues, row) => {
                return (
                    <div>
                        <Button
                            variant="contained"
                            onClick={(event) => {
                                handleEditClick(cellValues)
                            }}
                            style={{ backgroundColor: "transparent" }}
                        >
                            <img src={EditButton} alt="" />
                        </Button>
                        {/* 
                            //Comentado mientras no se habilite la funcion de ocultar o cambiar el estado a inactivo
                            <Button
                            variant="contained"
                            onClick={(event) => {
                                handleDeleteClick(cellValues)
                            }}
                            style={{ backgroundColor: "transparent" }}
                        >
                            <img src={DeleteButton} alt="" />
                        </Button> 
                        */}
                    </div>             
                )
            },
            width: 140 
        },
    ];

    //Theme to change the DataGrid Language
    const theme=createTheme(
        {
            palette: {
                primary: { main: '#1976d2' },
            },
        },
        esES,
    );

    return (
        <div>
            {/* This elements are displayed when screen is medium or large */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div>
                        <h1 style={{ padding: "40px 40px 0px 40px" }}>Usuarios</h1>
                        <img src={Decoración} alt="" style={{ padding: "0 0 0 40px", Width:"300px", flexGrow: "50%" }} />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Create User Button */}
                    <Link to="/createuser">
                        <Button
                            style={{ backgroundColor: "green", color: "white", margin: "40px" }}
                        >
                            Crear Usuario
                        </Button>
                    </Link>
                    {/* RNF-03: it is required to have a search in the lists and to be able to search by name. */}
                    <input
                        type="text"
                        value={search}
                        placeholder="¿Qué persona deseas buscar?"
                        onChange={handleChangeSearch}
                        className="ui input circular icon"
                        style={{ backgroundColor: "transparent", border: "2px solid #558AF2", color: "#558AF2", textAlign: "center", padding: "15px", borderRadius: "30px", width: "600px", margin: "0 0 15px 40px" }}
                    />
                </div>
            </Box>
            {/* This elements are displayed when screen is small */}
            <Box sx={{ display: { xs: 'block', md: 'none' }, justifyContent: 'center', alignItems: 'center'}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div>
                        <h1 style={{ padding: "20px 10px 0px 10px" }}>Usuarios</h1>
                        <img src={Decoración} alt="" style={{ padding: "0 0 10px 10px", maxWidth: "280px" }} />
                    </div>
                    {/* Create User Button */}
                    <Link to="/createuser">
                        <Button
                            style={{ backgroundColor: "green", color: "white", margin: "20px" }}
                        >
                            Crear Admin
                        </Button>
                    </Link>
                    {/* RNF-03: it is required to have a search in the lists and to be able to search by name. */}
                    <input
                        type="text"
                        value={search}
                        placeholder="¿Qué persona deseas buscar?"
                        onChange={handleChangeSearch}
                        className="ui input circular icon"
                        style={{ backgroundColor: "transparent", border: "2px solid #558AF2", color: "#558AF2", textAlign: "center", padding: "15px", borderRadius: "30px", minWidth: "260px", marginBottom: "15px"}}
                    />
                </div>
            </Box>
            {/* Table made with the DataGrid Template from MUI */}
            <ThemeProvider theme={theme}>
                <div className='datagrid'>
                    <DataGrid
                        rows={usersListSearched}
                        getRowId={(row) => row._id}
                        columns={columns}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 10 } },
                        }}
                        pageSizeOptions={[5, 10, 15, 20]}
                        onCellClick={handleCellClick}
                        onRowClick={handleRowClick}
                        AutoWidth
                    />
                </div>
            </ThemeProvider>
        </div>
    )
}
