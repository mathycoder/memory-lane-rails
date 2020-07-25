import { combineReducers } from 'redux'

const userReducer = combineReducers({
    byId: usersById,
    allIds: usersAllIds
})

export default userReducer

function usersById(state = {}, action) {
    switch(action.type) {
        case 'ADD_USERS':
            console.log(action.users)
            return state

        default:
            return state;
    }
}

function usersAllIds(state = [], action) {
    switch(action.type) {
        
        default:
            return state;
    }
}

