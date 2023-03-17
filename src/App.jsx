import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Projects from './components/Projects/Projects'
import NewProject from './components/NewProject/CreateNewProject'
import Admins from './components/Administrators/Admins/Admins'
import NewAdmin from './components/Administrators/NewAdmin/NewAdmin'
import EditAdmin from './components/Administrators/EditAdmin/EditAdmin'
import EditProject from './components/EditProject/EditProject'

function App() {
//Tiene que ir en un componente distinto
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/newproject' element={<NewProject />} />
        <Route path='/admins' element={<Admins />} />
        <Route path='/newadmin' element={<NewAdmin />} />
        <Route path='/editadmin' element={<EditAdmin />} />
        <Route path='/editproject' element={<EditProject />} />
      </Route>
    )
  )


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
