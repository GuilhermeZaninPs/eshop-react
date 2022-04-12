import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem'



const selectTodosId = state => state.map(todo => todo.id)

export const List = () => {
    const itemsId = useSelector(selectTodosId)
   
    return (
        <div className="container-list-item">
            <ul>
                {itemsId.map((itemTodoId) => <ListItem key={itemTodoId} id={itemTodoId}/>)}
            </ul>
        </div>
    )
}