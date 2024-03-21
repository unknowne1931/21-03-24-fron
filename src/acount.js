import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navi from './navi';
import { useLocation } from 'react-router-dom';

const Acount = () => {

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const val = queryParm.get('value')

    const [upi, setUpi] = useState([]);
    const [name, setName] = useState([]);
    const username = localStorage.getItem('user')

    const UPIup = (e) =>{
        setUpi(e.target.value);
    }

    const Nameup = (e) =>{
        setName(e.target.value);
    }

    const [data, setData ] = useState([]);
    const [update, setUpdate] = useState(true);
    const [coup, setCoup] = useState([]);
    const [coup1, setCoup1] = useState([]);

    useEffect(() =>{
        const key = process.env.REACT_APP_API_KEY

        if(username !== null){
            fetch(`https://stawro.xyz/get/accountdata01/by/${username}?key=${key}`)
            .then(res => res.json())
            .then(data => setData(data))

            fetch(`https://stawro.xyz/valid/get/01/data/paid/module/datad/${username}?key=${key}`)
            .then(res => res.json())
            .then(user => setCoup(user))

            fetch(`https://stawro.xyz/valid/get/01/data/paid/module/datad/1/${username}?key=${key}`)
            .then(res => res.json())
            .then(user =>setCoup1(user))
            }
    },[])

    const Post = (e) =>{
        e.preventDefault();
        if(upi !== null & name !== null & username !== null){
            axios.post('https://stawro.xyz/acount/data/01/post',{upi, name, username})
            .then(res =>{
                if(res.data.Status === "OKK"){
                    alert('Data Updated')
                    if(val === "dsefgds"){
                        window.location.href='/form'
                    }else{
                        window.location.reload();
                    }
                }else if(res.data.Status === "OK"){
                    alert('Data Added')
                    if(val === "dsefgds"){
                        window.location.href='/form'
                    }else{
                        window.location.reload();
                    }
                }else{
                    alert('Something went Wrong')
                }
            })
        }else{
            window.location.reload()
        }
        
    }

    const Updt = () =>{
        setUpdate(false);
    }

    const Viedt = () =>{
        setUpdate(true);
    }

  return (
    <div>
        
      <center>
      <Navi/>
        <h2 className='Account-h2-01'>Account Data</h2>
        <div className='Account-div-cnt-01'>
            <span>Add you'r UPI data or Phone pay Data</span>
            <div className='Account-div-cnt-02'>
                <div>
                    {update ?
                    <button className='Account-btn-01' onClick={Updt}>Update / Add</button>
                    :
                    <button className='Account-btn-02' onClick={Viedt} >View data</button>
                    }
                </div>

                {update ?
                    <div>
                        <div className='Account-div-cnt-03'>
                            <span>Name : <strong>{data.name}</strong> </span><br/>
                            <span>UPI / Phone pay : <strong>{data.upi}</strong></span>
                        </div>
                    </div>
                :
                <form className='Account-form-cnt-01' onSubmit={Post} >
                    <input type='text' placeholder='UPI / Phone pay No'onChange={UPIup} required /><br/>
                    <input type='text'placeholder='Name' onChange={Nameup} required /><br/>
                    <button type='submit'>post</button>
                </form>
                }

                {val=== "dsefgds" &&
                    <form className='Account-form-cnt-01' onSubmit={Post} >
                        <input type='text' placeholder='UPI / Phone pay No'onChange={UPIup} required /><br/>
                        <input type='text'placeholder='Name' onChange={Nameup} required /><br/>
                        <button type='submit'>post</button>
                    </form>
                }

            </div>
        </div>
        <div>
            <div className='account-coupn-holdr'>
                {coup.map((user,i) =>{
                    return(
                        <div key={i} className='account-no-claimed-cpn'>
                            <span className='account-₹-coupn'>₹ {user.Ru}.00</span><br/>
                            <span>{user.name}</span><br/>
                            <span>{user.upi}</span><br/>
                            <span>{user.Time}</span><br/>
                            <span className='account-pendinnng-spn'>pending ....</span>
                        </div>
                    )
                })}
            </div>
            <div className='account-coupn-holdr'>
                {coup1.map((user,i) =>{
                    return(
                        <div key={i} className='account-no-claimed-cpn'>
                            <span className='account-₹-coupn'>₹ {user.Ru}.00</span><br/>
                            <span>{user.name}</span><br/>
                            <span>{user.Time}</span><br/>
                            <span className='account-pendinnng-spn'>Claimed</span>
                        </div>
                    )
                })}
            </div>
        </div>
      </center>
    </div>
  )
}

export default Acount
