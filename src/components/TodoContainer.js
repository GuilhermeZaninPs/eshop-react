import React from 'react'

import * as C from '../AppStyled'
import 'bootstrap/dist/css/bootstrap.min.css'


import { List } from '../components/List'
import { InputAdd } from '../components/InputAdd'

export const TodoContainer = (props) => {
  
    return (
        
          <C.box className='container-fluid shadow p-3 mb-5 bg-white rounded'>
              <h2>To-do List App</h2>
              <InputAdd />
              <List />
          </C.box>
        
    );
}