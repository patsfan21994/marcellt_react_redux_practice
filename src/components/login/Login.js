import {ON_PASSWORD, ON_USERNAME, ON_LOGIN} from '../../modules/events'
import {useDispatch, useSelector} from "react-redux";


export function Login({_useDispatch = useDispatch, _useSelector = useSelector}){
    const dispatch = _useDispatch()
    const username = _useSelector(state => state.username)
    const password = _useSelector(state => state.password)
    // const credentials = _useSelector(state => state.credentials)

    // function onFormSubmit(event){
    //     event.preventDefault();
    //
    // }

    function onUsernameChange(event){
       dispatch({type: ON_USERNAME, value: event.target.value})
    }
    function onPasswordChange(event){
        dispatch({type: ON_PASSWORD, value: event.target.value})
    }

    return <>
        <form >
            <input onChange= {onUsernameChange} value={username} type={"text"} placeholder={"username"} />
            <input onChange= {onPasswordChange} value={password} type={"password"} placeholder={"password"}/>
            <button onClick={() => dispatch({type: ON_LOGIN})} type={"button"}>Login</button>
            {/*<header>Credentials: {credentials}</header>*/}
        </form>


    </>
}