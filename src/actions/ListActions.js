export function AddItem (text) {
    return {
        type: "ADD_ITEM",
        payload: text
    }
}
export function DeleteItem (id) {
    return {
        type: "DELETE_ITEM",
        payload: id
    }
}
export function ChangeDone (id) {
    return {
        type: "CHANGE_DONE",
        payload: id
    }
}