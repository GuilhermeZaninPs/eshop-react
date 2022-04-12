import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux';

import { AddItem } from '../actions/ListActions'

export const InputAdd = () => {
    
  const [text, setText] = useState('')
  const dispatch = useDispatch()

    
    const handleTextValue = (e) => {
        setText(e.target.value)

    }
    const handleAddBtn = (event) => {
        event.preventDefault()
        if (text){
          console.log(dispatch(AddItem(text)))
            setText('')
        } else {
        alert('Type a task or item')
    }

    }

    return (
        <form onSubmit={handleAddBtn} className='form-input-add'>
            <input className='input-form shadow-sm' type="text" value={text} placeholder="Type a task or item" onChange={handleTextValue}></input>
            <Button type="submit" className='button-form shadow-sm' variant="primary" size='sm'>Add</Button>
        </form>
    )
}