import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

// Creating a react registration form...
const Login = () => {
	const [data,setData] = useState({
		username : '',
		password :'',
	});
  let navigate = useNavigate();
    const {username,password} = data;

    const onChangeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }

    const onsubmitHandler = e =>{
        e.preventDefault()
        console.log(data);
        navigate('/about')
    }
  return (
	<div>
		<center>
            <form  onSubmit={onsubmitHandler}>
                <input type="text" placeholder="username" name="username" onChange={onChangeHandler} value={username}/> <br/><br/>
                <input type="text" placeholder="password" name="password" onChange={onChangeHandler} value={password}/><br/><br/>
                <input type="submit" value ="submit"/><br/>
            </form>
        </center>
	</div>
  )
}

export default Login;