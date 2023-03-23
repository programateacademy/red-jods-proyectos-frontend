import axios from "axios";
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';

export default axios.create({
  baseURL: "https://red-jods-proyectos-backend.onrender.com/"
});

const URL = "https://red-jods-proyectos-backend.onrender.com"

//Using AuthContext information
const { authData } = useContext(AuthContext);
const { token, role } = authData;


export const addProject = async (data) => {
  try {
    return await URL.post("/Api/v1/project", data, {
    headers: {
      Authorization:`Bearer ${ token }`
    }
  });
  } catch (e) {
    console.log("Error while calling project Api", e);
  }
};

export const getProjects = async (token) => {
  try {
    return await axios.get(`${URL}/project`, {
      headers: {
        "x-access-token": token,
      },
    });
  } catch (e) {
    console.log("Error while calling getProject API", e);
  }
};

export const getProject = async (id, token) => {
  try {
    return await axios.get(`${URL}/project/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  } catch (e) {
    console.log("Error while calling getProject api", e);
  }
};

export const editProject = async (project, id, token) => {
  try {
    return await axios.put(`${URL}/project/${id}`, project, {
      headers: {
        "x-access-token": token,
      },
    });
  } catch (e) {
    console.log("Error while calling editProject api", e);
  }
};

export const deleteProject = async (id, token) => {
  try {
    return await axios.delete(`${URL}/project/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  } catch (e) {
    console.log("Error while callign deleteProject api", e);
  }
};

export const signIn = async (user, token) => {
  try {
    // console.log(user)
    return await axios.post(URL + "/signin", user, {
      headers: {
        "x-access-token": token,
      },
    });
  } catch (e) {
    console.log("Error while calling signIn Api", e);
  }
};

export const getHome = async (token) => {
  try {
    return await axios.get(URL + "/home", {
      headers: {
        "x-access-token": token,
      },
    });
  } catch (e) {
    console.log("Error while calling getMovies API", e);
  }
};

export const resetPassword = async (email) => {
  try {
    return await axios.post(URL + "/send-password-link", email);
  } catch (e) {
    console.log("Error while calling getMovies API", e);
  }
};

export const changePassword = async (password, token) => {
  try {
    return await axios.post(URL + "/change-password", password, {
      headers: {
        "x-access-token": token,
      },
    });
  } catch (e) {
    console.log("Error while calling getMovies API", e);
  }
};