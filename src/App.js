import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';
import Todos from './components/Todos';
import React, { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {    //update each time we press delete
      return e !== todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go to the market',
      desc: 'You need to go to market to get job done1'
    },
    {
      sno: 2,
      title: 'Go to the mall',
      desc: 'You need to go to mall to get job done2'
    },
    {
      sno: 3,
      title: 'Go to the gul bazar',
      desc: 'You need to go to maser bajar to get job done3'
    }
  ])

  return (
    <div className="App">
      <Header title = "Todo List"/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
