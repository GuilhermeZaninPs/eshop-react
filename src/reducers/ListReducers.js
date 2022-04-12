const initialState = []

    function nextTodoId(todos) {
        const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
        return maxId + 1
      }

export const ListReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            return [...state, {
                id: nextTodoId(state),
                text: action.payload,
                done: false
            }]}
        case "CHANGE_DONE":
            return  state.map(item => {
                if(item.id !== action.payload) {
                    return item;
                }
                return {
                    ...item,
                    done: !item.done
                }
            })
            case "DELETE_ITEM":{
                return state.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;
    }
}