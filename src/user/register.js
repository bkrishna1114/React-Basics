import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

// Creating a react registration form...
const Register = () => {
	const [data,setData] = useState({
		name : '',
        email : '',
		password :'',
        retype_password:'',
	});
    const {name,email,password,retype_password} = data;

    const onChangeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const onsubmitHandler = e =>{
        e.preventDefault();
        if(name.length <=5){
            alert("name lenght should'nt be less than 5")
        }
        else if(password!==retype_password){
            alert('password not matching')
        }
        else{
            console.log(data)
            // putting data to firebase...
            axios.put('https://reactbasics-968c1-default-rtdb.firebaseio.com/registration.json',data).then( () =>alert('Registration Successful')
            )
        }
    };

  return (
	<div>
		<center>
            <br/>
            <br/>
            <form  onSubmit={onsubmitHandler}>
                <input type="text" placeholder="name" name="name" onChange={onChangeHandler} value={name}/> <br/><br/>
                <input type="email" placeholder="email" name="email" onChange={onChangeHandler} value={email}/> <br/><br/>
                <input type="password" placeholder="password" name="password" onChange={onChangeHandler} value={password}/><br/><br/>
                <input type="password" placeholder="re-type password" name="retype_password" onChange={onChangeHandler} value={retype_password}/><br/><br/>
                {password !=retype_password ?<h5 style={{'color':'red','fontSize':'7px','padding':'0px'}}>password did'nt matching</h5>:null}
                <input type="submit" value ="Register"/><br/>
            </form>
        </center>
	</div>
  )
}

export default Register;