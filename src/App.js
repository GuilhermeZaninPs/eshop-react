import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Todo } from './pages/Todo'

import  { ListReducers }  from './reducers/ListReducers'

const SAVED_ITEMS = "savedItems"

function persistState (state) {
  localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}
function loadState () {
  const currentState = localStorage.getItem(SAVED_ITEMS)
  if(currentState) {
    return JSON.parse(currentState)
  } else {
    return []
  }
}

const store = createStore(ListReducers, loadState())

store.subscribe(()=>{
  persistState(store.getState())
})
function App() {


  return (
      <Provider store={store}>

        <Routes>
          <Route path="/" element={ <Todo/> }/>
        </Routes>
      </Provider>

   
  );
}

export default App;
