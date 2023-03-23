import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Projects from './components/Projects/Projects'
import NewProject from './components/NewProject/NewProject'
import Users from './components/Users/Users/Users'
import NewUser from './components/Users/NewUser/NewUser'
import EditUser from './components/Users/EditUser/EditUser'
import EditProject from './components/EditProject/EditProject'
import Recover from './components/Recover/Recover';

function Router() {

    //En un componente distinto
    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />}>
                <Route index element={<Login />} />
                <Route path='/recover' element={<Recover />} />
                <Route path='/home' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/newproject' element={<NewProject />} />
                <Route path='/users' element={<Users />} />
                <Route path='/newuser' element={<NewUser />} />
                <Route path='/edituser' element={<EditUser />} />
                <Route path='/editproject' element={<EditProject />} />
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