export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

// ADD_ITEM action creator
export function addItem(text){
    return {
        type: ADD_ITEM,
        text
    }
}

// DELETE_ITEM action creator
export function deleteItem(id){
    return {
        type: DELETE_ITEM,
        id
    }
}

// TOGGLE_COMPLETE action creator
export function toggleComplete(id){
    return {
        type: TOGGLE_COMPLETE,
        id
    }
}
          