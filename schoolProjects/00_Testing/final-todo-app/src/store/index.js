import * as Redux from 'redux'
import {ADD_ITEM, DELETE_ITEM, TOGGLE_COMPLETE} from '../actions'
import initialState from './initialState'
import {devToolsEnhancer} from 'redux-devtools-extension';


const todosReducer = (stateCopy = initialState, action) => {
    switch(action.type){
        case ADD_ITEM :
            return {
                ...stateCopy,
                todos: [
                    ...stateCopy.todos,
                    {
                        _id: Date.now(),
                        description: action.text,
                        isComplete: false
                    }
                ]
            }
        case DELETE_ITEM :
            return {
                ...stateCopy,
                todos: stateCopy.todos.filter(t => t._id !== action._id)
            }
        case TOGGLE_COMPLETE :
            return{
                ...stateCopy,
                todos: stateCopy.todos.map(
                    t => action._id === t._id ? {...t, isComplete: !t.isComplete}: t
                )
            }
        default :
            return stateCopy
    }
}

const store = Redux.createStore(
    todosReducer,
    devToolsEnhancer()
)

export default store;