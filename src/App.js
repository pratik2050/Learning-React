import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []; 
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {    //update each time we press delete
      return e !== todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));

  }


  const addTodo = (title, desc) => {
    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length-1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, myTodo]);

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]) 
  

  return (
    <div>
      <Router>
        <Header title = "Todo List"/>       
        <Routes>
          <Route exact path="/" element={ <>
                                            <AddTodo addTodo = {addTodo}/>
                                            <Todos todos = {todos} onDelete = {onDelete}/>
                                          </>
                                        }>
          </Route>
          <Route exact path="/about" element = {<About/>}/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
