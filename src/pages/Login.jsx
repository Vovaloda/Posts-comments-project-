import MyInput from "../components/UI/inputs/MyInput"
import MyButton from "../components/UI/buttons/MyButton"
import React, { useContext} from "react"
import { AuthContext } from "../context"

const Login = () => {

    const {setIsAuth} = useContext(AuthContext);
    
    const login = event => {
        event.preventDefault();
        setIsAuth(true); 
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: "100px"}}>Authorization</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Login" /> 
                <MyInput type="password" placeholder="Password"/> 
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
}

export default Login;