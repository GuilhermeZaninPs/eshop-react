import React from 'react'
import './Todo.css';
import { Header } from '../components/Header'
import { TodoContainer } from '../components/TodoContainer'



export const Todo = () => {
  
  
  return (
    <div>
      <div>
        <Header name="Save your list" />
      </div>
        <TodoContainer />
    </div>
  );
}

export default Todo;
