import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {

    const [username , setUsernme]= useState([]);

    const Userup = (e) =>{
        setUsernme(e.target.value);
    }

    const Post = (e) =>{
        e.preventDefault();
        axios.post('https://stawro.xyz/user/login/check/data/exist',{username})
        .then(res =>{
            if(res.data.Status === "OK"){
                alert(`This '${username}' exist Try New one`)
            }else if(res.data.Status === "OKK"){
                alert(`Account Created`)
                window.location.href='/user'
            }else{
                alert('Try Again')
            }
        })
    }
  return (
    <div>
      <center>
        <h2 className='signup-h2-01'>sign-up</h2>
        <div className='signup-div-01'>
            <form onSubmit={Post}>
                <input type='text' placeholder='Username' onChange={Userup} required/><br/>
                <button type='submit'>sign-up</button>
            </form>
        </div>
      </center>
    </div>
  )
}

export default Signup
