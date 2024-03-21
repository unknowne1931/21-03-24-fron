import React from 'react'
import stawroimg from './images/stawro.png' 
import Navi from './navi'

const Home = () => {
    const Pro = () =>{
        window.location.href='https://www.instagram.com/stawro'
    }

    const Login = () =>{
        window.location.href='/user'
    }

    const Regis = () =>{
        window.location.href='/signup'
    }
    
  return (
    <div>
      <center>
        <h1 className='Home-h1-01'>sta<span>W</span>ro</h1>
        <div className='Home-div-01'>
            <span className='Home-span-01'>Play and get Rewards </span><br/><br/>
            <span className='Home-span-02'>Login or Sign-Up</span><br/>
            <button className='Home-btn-01' onClick={Login}>Login</button> <button className='Home-btn-02'onClick={Regis}>Sign-Up</button>
        </div>
        <div className='Home-div-02'>
            <span><strong>*</strong> We Credit a Reward Money within 05 Minute.</span><br/>
            <span><strong>*</strong> Login for save your data With us.</span><br/>
            <span><strong>*</strong> We save your Username ,IP ,Phone pay UPI, Phone pay Number & Name.</span><br/>
            <span><strong>*</strong> For more contact on Instagram.</span>
            <div onClick={Pro} className='Home-Pro-cnt-01'>
                <img src={stawroimg} />
            </div><span onClick={Pro} className='Home-span-03'>stawro</span>
        </div>
      </center>
    </div>
  )
}

export default Home
