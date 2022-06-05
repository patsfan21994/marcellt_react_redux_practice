import {Login} from './components/login/Login'


import './App.css';
import {useSelector} from "react-redux";
import {CreateAccount} from "./components/create-account/CreateAccount";

function App() {
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    if (!isLoggedIn){
        return <>
            <Login/>
            <CreateAccount/>
        </>

    }
    return <>
        <h1>Hello World</h1>
    </>



}

export default App;
