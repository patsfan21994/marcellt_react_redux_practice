export const ON_LOGIN = 'events/ON_LOGIN'
export const ON_CREATE_ACCOUNT = 'events/ON_CREATE_ACCOUNT'
export const ON_USERNAME = 'events/ON_USERNAME'
export const ON_PASSWORD= 'events/ON_PASSWORD'
export const ON_NEW_USERNAME = 'events/ON_NEW_USERNAME'
export const ON_NEW_PASSWORD = 'events/ON_NEW_PASSWORD'



const initState = {
    currentUser: null,
    username: '',
    createdName: '',
    createdPassword: '',
    password: '',
    userList: [],
    isLoggedIn: false
}


export function reducer(state = initState, action){
    switch(action?.type){
        case ON_CREATE_ACCOUNT:
            const existingUser = state.userList.find(user => user.value.createdName === action.value.username)
            console.log(existingUser)
            if(existingUser){
                return {...state}
            }
            return {
                ...state,
                userList: [
                    ...state.userList,
                    action.value
                ]
            }
        case ON_NEW_USERNAME:
            return{
                ...state,
                createdName: action.value
            }
        case ON_NEW_PASSWORD:
            return{
                ...state,
                createdPassword: action.value
            }
        case ON_USERNAME:
            return{
                ...state,
                username: action.value
            }
        case ON_PASSWORD:
            return{
                ...state,
                password: action.value
            }
        case ON_LOGIN:
            const validatedUser = state.userList.find(user => user.username === action.value.username && user.password === action.value.password)
            console.log(validatedUser)
            if (validatedUser){
                return {
                    ...state,
                    currentUser: validatedUser
                }
            }
            return {
                ...state
            }
        default:
            return{
                ...state
            }
    }
}