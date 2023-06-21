import React, { useState } from 'react';
import { Navigate, RedirectFunction} from 'react-router-dom'

export const Home = () => {
  const [auth,setAuth] = useState(false)
  if(auth) {
    return <Navigate to={"/login"}/>
  }
  return (
    <div>
      <center>
          <h1>Welcome Home</h1>
          <button onClick={() => setAuth(true)}>LogIn</button>
      </center>
    </div>
  )
};
