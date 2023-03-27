import 'semantic-ui-css/semantic.min.css'

import React, { useState, useEffect } from "react";
import api from "../../services/api/index";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import Flor from "../../assets/img/logo.svg"

const appTitle="ListApp de Tareas";

const ListApp=(tasks) => {
  const [todoList, setTodoList]=useState(tasks);

  const addTodo=async (item) => {
    const { data }=await api.post("/Api/v1/project", item);
    setTodoList((oldList) => [...oldList, data]);
  };

  const removeTodo=async (id) => {
    await api.delete(`/Api/v1/project/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id!==id));
  };

  const editTodo=async (id, item) => {
    await api.put(`/Api/v1/project/${id}`, item);
  };

  return (
    <div className="ui container center aligned" style={{backgroundImage: Flor}}>
      <Section>
        <h1>{appTitle}</h1>
        <img src="/vite.png" alt="" style={{maxHeight: "80px", paddingTop: "10px"}}/>
        <h3>ListApp de Tareas Diarias</h3>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={todoList}
        />
      </Section>
    </div>
  );
};

export default ListApp;