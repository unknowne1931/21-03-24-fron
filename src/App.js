import React, { useEffect, useState,createContext } from 'react'
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Play from './Play';
import "./App.css"
import Question from './question';
import Claimform from './claimform';
import Adminlog from './Adminlog';
import axios from 'axios';
import Updateques from './updateques';
import Qustview from './qustview';
import Monitor from './Monitor';
import Login from './login';
import Home from './home';
import Signup from './signup';
import Navi from './navi';
import Acount from './acount';
import SelPage from './sel';
import SelPage1 from './kannsel';
import Question1 from './questionkan';



export const user = createContext();

const App = () => {
  

  const [email, setEmail] = useState([])
  const token = localStorage.getItem("token");
  const id = localStorage.getItem('ssid');
  const username = localStorage.getItem('user');
  const [on, setOn] = useState([])

  if(on.name === "OFF"){
    localStorage.setItem("play", "no")
  }else{
    localStorage.removeItem("play")
  }

  const wit = localStorage.getItem("wait")
  useEffect(()=>{

    fetch('https://stawro.xyz/get/agame/on/or/off')
    .then(res => res.json())
    .then(user => setOn(user.user))

    fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(ipadr =>{
         localStorage.setItem("ip", ipadr.ip)
        })
  

    if(token != null){
      axios.post("https://stawro.xyz/verify/token",{token})
    .then(res=>{
      if(res.data.Status === "OK"){
        setEmail(res.data.decode.email)
        localStorage.setItem("email",res.data.decode.email)
      }else{
        localStorage.removeItem("token")
        localStorage.removeItem("item");
        localStorage.removeItem("email");
      }
    })
    }

    

    const Log = () =>{
      axios.post('https://stawro.xyz/verify/login/user',{id, username})
      .then(res =>{
        if(res.data.Status === "OK"){
          alert('ok')
          localStorage.setItem('ssid', res.data.user._id);
          localStorage.setItem('user' ,res.data.user.username);
        }else{
          alert('bad')
          localStorage.removeItem('ssid');
          localStorage.removeItem('user');
          window.location.reload();
        }
      })
    }

    if(id !== null & username !== null){
      Log()
    }

    if(username != null){
      axios.post('https://stawro.xyz/verify/account/key',{username})
      .then(res =>{
        if(res.data.Status === "OK"){
          localStorage.setItem("play", "no")
        }else{
          localStorage.removeItem('play')
        }
      })
    }


  },[])

  const okk = localStorage.getItem('play');

  return (
    <div>
      <center>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={id ? <Play/> : <Home />}/>
            <Route path='/play' element={id ? <div>{okk === "no" ? <Play/> : <Question/>}</div> : <Login />}/>
            <Route path='/play/kan' element={id ? <div>{okk === "no" ? <Play/> : <Question1/>}</div> : <Login />}/>
            <Route path='/form' element={id ? <div>{okk === "no" ? <Play /> : <Claimform/>}</div> : <Login />}/>
            <Route path='/login' element={token ? <Updateques /> : <Adminlog/>}/>
            <Route path='/add' element={token ? <Updateques/> : <Play/>} />
            <Route path='/view' element={token ? <Qustview/> : <Play/>} />
            <Route path='/monit' element={token ? <Monitor /> : <Play />} />
            <Route path='/user' element={id ? <Play /> : <Login />} />
            <Route path='/signup' element={id ? <Play /> : <Signup />} />
            <Route path='/account' element={id ? <Acount /> : <Login />} />
            <Route path='/game' element={id ?  <div>{okk === "no" ? <Play /> :<SelPage/>}</div> : <Login/> } />
            <Route path='/game/ka' element={id ?  <div>{okk === "no" ? <Play /> :<SelPage1/>}</div> : <Login/> } />
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  )
}

export default App
