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
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import '../../../styles/Users.css'

export default function Users() {
    //Using AuthContext information
    const { authData }=useContext(AuthContext);
    const { token, role }=authData;
    
    //Variable for fecthing users
    const [usersList, setUsersList]=useState([]);
    //variables for filtering throughout search
    const [search, setSearch]=useState([]);
    const [usersListSearched, setUsersListSearched]=useState([]);

    //With this we fetch the data (READ) from the API and it is saved in an array called "data"
    useEffect(() => {
        console.log(role);
        console.log(token);

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

    //This interacts with API and Create one User
    const addFilm=async (user) => {
        const { data }=await users.post("/Api/v1/user", user);
        setUsersList((oldList) => [...oldList, data]);
    };

    //This interacts with API and Delete one User (in this case just hides it)
    const removeUser=async (id) => {
        await users.delete(`/Api/v1/user/${id}`);
        setUsersList((oldList) => oldList.filter((user) => user._id!==id));
    };
    //This interacts with API and Update one User

    const editFilm=async (id, user) => {
        await users.put(`/Api/v1/user/${id}`, user);
    };

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


    //Code for handle clicks on edit and delete buttons
    const handleCellClick = (param, event) => {
        event.stopPropagation();
    };

    const handleRowClick= (param, event) => {
        event.stopPropagation();
    };
    const handleDeleteClick = (param, event) => {
        removeUser(param._id)
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
                                handleEditClick(event, cellValues)
                            }}
                            style={{ backgroundColor: "transparent" }}
                        >
                            <img src={EditButton} alt="" />
                        </Button>
                        <Button
                            variant="contained"
                            onClick={(event) => {
                                handleDeleteClick(cellValues._id)
                            }}
                            style={{ backgroundColor: "transparent" }}
                        >
                            <img src={DeleteButton} alt="" />
                        </Button>
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

                {/* Table made with the DataGrid Template from MUI */}

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

            {/* Versión sin MUI DataGrid */}
            {/* <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Contraseña</th>
                        <th>¿Es Admin?</th>
                    </tr>
                </thead>
                <tbody>
                    {usersListSearched.map((user) => (
                        <tr key={user._id}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.last_name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.password}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}

        </div>
    )
}
