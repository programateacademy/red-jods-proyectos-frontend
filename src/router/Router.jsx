import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login';
import Projects from '../pages/Projects/Projects'
import CreateProject from '../pages/CreateProject/CreateProject'
import Users from '../pages/Users/Users/Users'
import CreateUser from '../pages/Users/CreateUser/CreateUser'
import EditUser from '../pages/Users/EditUser/EditUser'
import EditProject from '../pages/EditProject/EditProject'
import Recover from '../pages/Recover/Recover';
import ViewProject from '../components/viewProject/viewProject';

function Router() {

    //En un componente distinto
    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />}>
                <Route index element={<Login />} />
                <Route path='/recover' element={<Recover />} />
                <Route path='/home' element={<Home />} />
                <Route path='/myprojects' element={<Projects />} />
                <Route path='/createproject' element={<CreateProject />} />
                <Route path='/users' element={<Users />} />
                <Route path='/createuser' element={<CreateUser />} />
                <Route path='/edituser' element={<EditUser />} />
                <Route path='/editproject' element={<EditProject />} />
                <Route path='/home/viewProject' element={<ViewProject/>} />
            </Route>
        )
    )

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Router;