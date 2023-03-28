import Box from "@mui/material/Box";
import Decoración from "../../assets/img/Decoración.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./Home.css";
import AppPagination from "../../components/pagination/pagination";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import projects from "../../services/api/index";
import { getItem } from "localforage";
import Percentage from '../../components/Percentage/Percentage'
import ReactPaginate from 'react-paginate';


export default function Home() {
  const [card, setCard] = useState([]);
  //Using AuthContext information
  const { authData, setAuthData }=useContext(AuthContext);
  const { token, role, name, email, id }=authData;

  //Variable for fecthing projects
  const [usersList, setUsersList]=useState([]);
  //variables for filtering throughout search
  const [search, setSearch]=useState([]);
  const [usersListSearched, setUsersListSearched]=useState([]);
  //With this we fetch the data (READ) from the API and it is saved in an array called "data"
  useEffect(() => {
    async function fetchData() {
      const { data }=await projects.get(`/Api/v1/project`, {
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
  const handleChangeSearch=e => {
    setSearch(e.target.value);
    filtering(e.target.value);
  }

  const filtering=(searchTerm) => {
    var searchResult=usersList.filter((element) => {
      if (element.title.toString().toLowerCase().includes(searchTerm.toLowerCase())
        ||
        element.axis.toString().toLowerCase().includes(searchTerm.toLowerCase())
        ||
        element.ods[0].nameOds.toString().toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return element;
      }
    });
    setUsersListSearched(searchResult);
  }

  // Hook de react router dom para navegar al darle submit
  const navigate=useNavigate();

  const handleViewClick=(item) => {
    const project=item;
    setAuthData({ ...authData, id: project });
    navigate('/viewproject');
    };

  // Code por pagination
  const [pageNumber, setPageNumber]=useState(0);
  const elementsPerPage=6;

  const handlePageChange=({ selected }) => {
    setPageNumber(selected);
  };

  const displayedElements=usersListSearched.slice(
    pageNumber*elementsPerPage,
    (pageNumber+1)*elementsPerPage
  );

  return (
    <>
      <div className="container_box">
        {/* This elements are displayed when screen is small */}
        <Box className="container2" sx={{ display: { xs: "grid", md: "none" } }}>
          {(email==='usuario.noregistrado@gmail.com')? null:
            <h1>¡Hola {name}, eres {role}!</h1>
          }
          <img src={Decoración} alt="" />
          <input
            type="text"
            value={search}
            placeholder="¿Qué proyecto deseas buscar?"
            onChange={handleChangeSearch}
            className="ui input circular icon"
            style={{ backgroundColor: "transparent", border: "2px solid #558AF2", color: "#558AF2", textAlign: "center", padding: "15px", borderRadius: "30px", width: "70%", margin: "40px 40px 15px 40px" }}
          />
        </Box>
        <div className="cardBox">
          {displayedElements.map((item) => {
            return (
              <Card key={item._id} id="Card" sx={{ width: 280 }}>
                <CardMedia
                  sx={{ height: 280 }}
                  image={item.ods[0].url}
                  title={item.title}
                />
                <CardContent>
                  <h2>{item.title}</h2>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3>{item.ods[0].nameOds}</h3>
                    <div style={{ marginLeft: "20px" }}>
                      <Percentage task={item.task} />
                    </div>
                  </div>
                </CardContent>
                <CardActions id="actionsBox">
                  <Button id="Btn1" variant="contained" onClick={() => handleViewClick(item)}>
                    Ver Proyecto
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="container_pagination">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={Math.ceil(usersListSearched.length/elementsPerPage)}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
          pageLinkClassName={'pagination__item'}
        />
      </div>
    </>
    
  );
}