import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navi from './navi';
import Eng from './images/eng1.jpg'
import Kan from './images/kanna1.png'

const Play = () => {

    const username = localStorage.getItem('user');

    const initialSeconds = parseInt(localStorage.getItem('remainingSeconds'), 10) || 11;
    const [seconds, setSeconds] = useState(initialSeconds);

    const [Qno , setQno] = useState(null);
    const [Qno1, setQno2] = useState(null);
    const [ipad, setIpad] = useState([]);
    const [Lock, setLock] = useState([]);
    const [upii1, setUpii1] = useState([]);
    const [upii2, setUpii2] = useState([]);
    const [anmt, setAnmt] = useState([]);

    useEffect(()=>{
        generateRandomNumber();
        generateRandomNumber2();
        
        const key = "sjhdhg7dshkudfshg"
        if(username !== null){
            fetch(`https://stawro.xyz/q/amount/data/all?key=${key}`)
            .then(res => res.json())
            .then(data => setAnmt(data));

            fetch(`https://stawro.xyz/question/singel/verify/data/01/sakhd/sjkh/dsf/dfsd/${username}`)
            .then(res => res.json())
            .then(data => setUpii1(data))

            fetch(`https://stawro.xyz/question/singel/verify/data/01/sakhd/${username}`)
            .then(res => res.json())
            .then(data => setUpii2(data))
        }
        

    },[])


    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 12) + 1; // Generates a random number between 1 and 100
        setQno(newRandomNumber);
    }

    const generateRandomNumber2 = () => {
        const min = 1;
        const max = 11;
        const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setQno2(newRandomNumber);
      };

      const Del11 = () =>{
        if(upii1._id !== null & upii2._id !== null & username !== null){
            axios.post('https://stawro.xyz/chec/s/sa/user/by/dat',{username})
            .then(res =>{
                if(res.data.Status === "IN"){
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
                    .then(res =>{
                        if(res.data.Status === "OK"){
                            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
                            .then(res =>{
                                if(res.data.Status === "OK"){
                                    window.location.reload()
                                }
                            })
                        }else{
                            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
                            .then(res =>{
                                if(res.data.Status === "OK"){
                                    window.location.reload()
                                }
                            })
                        }
                    })
                }else{
                    
                }
            })
            
        }else{
            window.location.reload()
        }
      }
    const Post = (e) =>{
        e.preventDefault();

        if(username !== null & Qno !== null & upii1._id !== null & upii2._id !== null){

            axios.post('https://stawro.xyz/game/limit/length/find',{username})
            .then(res =>{
                if(res.data.len < 2){
                    axios.post("https://stawro.xyz/verify/account/key",{username})
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        alert("Play After money Credited to you'r Account")
                    }else{
                        axios.post('https://stawro.xyz/data/upi/post/to/db',{username, Qno})
                        .then(res =>{
                            if(res.data.Status === "OK"){
                                localStorage.setItem("Qno" , Qno)
                                localStorage.setItem('countdownSeconds', seconds.toString());
                                localStorage.setItem('remainingSeconds', 11);
                                window.location.href='/game'
                            }else{
                                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
                                .then(res =>{
                                    if(res.data.Status === "OK"){
                                        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
                                        .then(res =>{
                                            if(res.data.Status === "OK"){
                                                axios.post('https://stawro.xyz/data/upi/post/to/db',{username, Qno})
                                                .then(res =>{
                                                    if(res.data.Status === "OK"){
                                                        localStorage.setItem("Qno" , Qno)
                                                        localStorage.setItem('countdownSeconds', seconds.toString());
                                                        localStorage.setItem('remainingSeconds', 11);
                                                        window.location.href='/game'
                                                    }
                                                })
                                            }
                                        })
                                    }else{
                                        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
                                        .then(res =>{
                                            if(res.data.Status === "OK"){
                                                axios.post('https://stawro.xyz/data/upi/post/to/db',{username, Qno})
                                                .then(res =>{
                                                    if(res.data.Status === "OK"){
                                                        localStorage.setItem("Qno" , Qno)
                                                        localStorage.setItem('countdownSeconds', seconds.toString());
                                                        localStorage.setItem('remainingSeconds', 11);
                                                        window.location.href='/game'
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                    })

                }else{
                    alert('Only 02 Times, You had played Before')
                    Del11()
                }
            })

            
        }else{
            window.location.reload();
        }

    }

    const Post1 = (e) =>{
        e.preventDefault();
        
        if(username !== null & Qno1 !== null & upii1._id !== null & upii2._id !== null){
            const Qno = Qno1
            axios.post('https://stawro.xyz/game/limit/length/find',{username})
            .then(res =>{
                if(res.data.len < 2){
                    axios.post("https://stawro.xyz/verify/account/key",{username})
            .then(res =>{
            if(res.data.Status === "OK"){
                alert("Play After money Credited to you'r Account")
            }else{
                axios.post('https://stawro.xyz/data/upi/post/to/db',{username, Qno})
                .then(res =>{
                    if(res.data.Status === "OK"){
                        localStorage.setItem("Qno" , Qno)
                        localStorage.setItem('countdownSeconds', seconds.toString());
                        localStorage.setItem('remainingSeconds', 11);
                        window.location.href='/game/ka'
                    }else{
                        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
                        .then(res =>{
                            if(res.data.Status === "OK"){
                                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
                                .then(res =>{
                                    if(res.data.Status === "OK"){
                                        axios.post('https://stawro.xyz/data/upi/post/to/db',{username, Qno})
                                        .then(res =>{
                                            if(res.data.Status === "OK"){
                                                localStorage.setItem("Qno" , Qno)
                                                localStorage.setItem('countdownSeconds', seconds.toString());
                                                localStorage.setItem('remainingSeconds', 11);
                                                window.location.href='/game/ka'
                                            }
                                        })
                                    }
                                })
                            }else{
                                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
                                .then(res =>{
                                    if(res.data.Status === "OK"){
                                        axios.post('https://stawro.xyz/data/upi/post/to/db',{username, Qno})
                                        .then(res =>{
                                            if(res.data.Status === "OK"){
                                                localStorage.setItem("Qno" , Qno)
                                                localStorage.setItem('countdownSeconds', seconds.toString());
                                                localStorage.setItem('remainingSeconds', 11);
                                                window.location.href='/game/ka'
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
            })

                }else{
                    alert('Only 02 Times, You had played Before')
                    Del11()
                }
            })

            
        }else{
            window.location.reload();
        }

    }

  return (
    <div className='play-body'>
        <Navi/>
      <center>
        <h1 className='play-h1'>sta<span className='play-h1-span-w'>W</span>ro</h1>
        <div className='PLay-div-cnt-01-to-decorte'>
            <span className='play-span-01'>* Don't share your's username with anyone</span><br/>
            <span className='play-span-01'>* Answer <span>05</span> Question.</span><br/>
            {anmt.map((user,i) =>{
                return(
                    <span key={i} className='play-span-02'>Play and Get ₹ {user.Amount}.00</span>
                )
            })}
            <div className='div-cnt-01'>
                
                    <div onClick={Post} className='play-img-cnt-o1-eng'>
                        <img src={Eng} />
                    </div>
                    <div onClick={Post1} className='play-img-cnt-o1-kan'>
                        <img src={Kan} />
                    </div>
            </div>
        </div>
        

        <div className='play-div-cnt-02'>
            <p>Play with your own Risk</p>
        </div>

      </center>
    </div>
  )
}

export default Play