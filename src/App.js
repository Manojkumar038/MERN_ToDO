import './App.css';

import Header from "./myComponents/Header.js";
import { Footer } from './myComponents/Footer';
import { Todos } from './myComponents/Todos';
import { AddTodo } from './myComponents/AddTodo';
import { useState , useEffect} from 'react';


function App() {

  let initTodos;
  if(localStorage.getItem('todos') === null)
    initTodos = [];
  else{
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (ele) => {
    console.log("I am on deletion of ", ele.sno );
    setTodos(todos.filter((todo) => {
      return todo !== ele;
    }))

    localStorage.setItem("todos",JSON.stringify(todos));
  };

  const addTodo = (title,desc) => {
    let sno;
    if(todos.length === 0){
      sno = 0;
    }

    else
      sno  = todos[todos.length - 1].sno + 1;
    const ele = {
      sno : sno, 
      title : title,
      desc : desc
    };
    console.log(ele);
    setTodos([...todos,ele]); 
  };

  const [todos , setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  


  return (
    <>
      <Header title="My ToDo's List" searchBar={true}></Header>

      <AddTodo addTodo={addTodo}></AddTodo>

      <Todos todos = {todos} onDelete = {onDelete}></Todos>
      
      <Footer></Footer>
    </>
  );
}
export default App;
