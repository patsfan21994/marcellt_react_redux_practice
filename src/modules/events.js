export const ON_LOGIN = 'events/ON_LOGIN'
export const ON_USERNAME = 'events/ON_USERNAME'
export const ON_PASSWORD= 'events/ON_PASSWORD'


const initState = {
    isLoggedIn: false,
    username: '',
    password: '',
    credentials: ''
}


export function reducer(state = initState, action){
    switch(action?.type){
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
            return {
                ...state,
                isLoggedIn: state.credentials.username === 'admin' && state.credentials.password === 'pass'
            }
        default:
            return{
                ...state
            }
    }
}