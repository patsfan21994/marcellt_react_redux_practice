import {
    ON_CREATE_ACCOUNT, ON_NEW_USERNAME, ON_NEW_PASSWORD
} from "../../modules/events";
import {useDispatch, useSelector} from "react-redux";

export function CreateAccount({_useDispatch = useDispatch, _useSelector = useSelector}){
    const dispatch = _useDispatch()
    const username = _useSelector(state => state.createdName)
    const password = _useSelector(state => state.createdPassword)


    function onNewUsername(event){
        dispatch({type: ON_NEW_USERNAME, value: event.target.value})
    }
    function onNewPassword(event){
        dispatch({type: ON_NEW_PASSWORD, value: event.target.value})
    }


    return <>
        <form >
            <input onChange= {onNewUsername} value={username} type={"text"} placeholder={"username"} />
            <input onChange= {onNewPassword} value={password} type={"password"} placeholder={"password"}/>
            <button onClick={() => dispatch({type: ON_CREATE_ACCOUNT})} type={"button"}>Create Account</button>
        </form>



    </>
}