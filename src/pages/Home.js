import React, { useState } from 'react';
import { Navigate} from 'react-router-dom';
import netflixlogo from '../files/images/netflix.png';
import music from '../files/audio/music.mp3';
import naa_roja from '../files/video/naa roja.mp4';     

export const Home = () => {
  const [auth,setAuth] = useState(false)
  if(auth) {
    return <Navigate to={"/login"}/>
  }
  return (
    <div>
      <center>
          <h1>Welcome Home</h1>
          <button onClick={() => setAuth(true)}>LogIn</button><br/>
          {/* <button>about</button> */}
          <img src={netflixlogo} height="250" width="auto/"/>
          <audio controls>
            <source src={music} type='audio/ogg' />
          </audio>

          <video width="720" height="480" controls>
            <source  src={naa_roja} type='video/mp4' />
          </video>

      </center>
    </div>
  )
};
