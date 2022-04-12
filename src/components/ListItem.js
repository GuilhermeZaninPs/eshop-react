import React from "react"
import { Button } from 'react-bootstrap';

import { useSelector, useDispatch } from "react-redux"

import { ChangeDone, DeleteItem } from '../actions/ListActions'


const selectTodoById = (state, todoId) => {
    return state.find(todoItem => todoItem.id === todoId)
}
export const ListItem = ({ id }) => {
    const dispatch = useDispatch()
    const todo = useSelector(state => selectTodoById(state, id))
    return (
        <li className={todo.done ? "done list-item shadow-sm" : "list-item shadow-sm"}>
            <div onClick={() => { dispatch(ChangeDone(todo.id)) }} 
                className='div-done'>
                {todo.text}
            </div>   
            <div className="container-btn">
                <Button 
                    className="button-list" 
                    variant='outline-danger' size='sm' 
                    onClick={() => { dispatch(DeleteItem(todo.id)) }}>
                        DEL
                </Button>
            </div>
        </li>

    )
}