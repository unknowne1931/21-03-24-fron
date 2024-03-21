import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [username , setUsernme] = useState([]);

    const Userup = (e) =>{
        setUsernme(e.target.value);
    }

    const Post = (e)=>{
        e.preventDefault();
        axios.post('https://stawro.xyz/user/login/data',{username})
        .then(res =>{
            if(res.data.Status === "OK"){
                localStorage.setItem('ssid', res.data.user._id);
                localStorage.setItem('user', res.data.user.username)
                window.location.href='/'
            }else{
                alert('Username Not Found')
            }
        })
    }

  return (
    <div>
      <center>
        <h2 className='Login-h2'>Login Page</h2>
        <div className='login-div-01'>
            <form onSubmit={Post}>
                <input type='text' placeholder='Username' onChange={Userup} required /><br/>
                <button type='submit'>submit</button>
            </form>
        </div>
      </center>
    </div>
  )
}

export default Login
