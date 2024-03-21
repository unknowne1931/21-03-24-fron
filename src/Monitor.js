import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Monitor = () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const [len, setLen] = useState([]);
    const [on, setON] = useState([])
    const [data, setDat] = useState([]);
    const [upi, setUpi ] = useState([]);
    const [user, setUser] = useState([]);
    const [len1, setLen1] = useState([]);
    const [len2, setLen2] = useState([]);
    const [tot, setTot] = useState([]);
    const [Alpaid, setAlpaid] = useState([]);
    const [ALLpl, setAllpl] = useState([]);
    const [Alllen4, setAlllen4] = useState([]);
    const [live, setLive] = useState([]);
    const [anmt, setAnmt] = useState([]);

    const key = "sjhdhg7dshkudf"

    const Keyy = localStorage.getItem("secure")
    if(Keyy !== "jksdifywbnduwhfjlksb328yn"){
      localStorage.removeItem('secure')
    }


    

    useEffect(()=>{
        if(token){
            fetch('https://stawro.xyz/get/agame/on/or/off')
            .then(res => res.json())
            .then(user => setON(user.user))


            fetch("https://stawro.xyz/questionnns/datata/jdsjkds/fdsfdsnbc/f/f/f/s/sdf/f/b//dg//sd/g/sdg/ds/g/dsg/ds/g/sdg/ds/gsd/g/dsg/ds/gd/get")
            .then(res => res.json())
            .then(data => setDat(data));

            fetch("https://stawro.xyz/valid/id/leng/data/Length")
            .then(res => res.json())
            .then(data => setLen(data));

            fetch(`https://stawro.xyz/upi/module/importing/for/delete/fetch?key=${key}`)
            .then(res => res.json())
            .then(data => setUpi(data))

            fetch(`https://stawro.xyz/user/module/importing/for/delete/fetch?key=${key}`)
            .then(res => res.json())
            .then(data => setUser(data));

            fetch(`https://stawro.xyz/valid/id/leng/data/Length/account/tot?key=${key}`)
            .then(res => res.json())
            .then(data => setLen1(data))

            fetch(`https://stawro.xyz/questionnns/datata/jdsjkds/fdsfdsnbc/paid/module?key=${key}`)
            .then(res => res.json())
            .then(data => setTot(data));

            fetch(`https://stawro.xyz/valid/id/leng/data/Length/child/new?key=${key}`)
            .then(res => res.json())
            .then(data => setLen2(data));

            fetch(`https://stawro.xyz/questionnns/datata/jdsjkds/fdsfdsnbc/paid/module/new/child?key=${key}`)
            .then(res => res.json())
            .then(data => setAlpaid(data));

            fetch(`https://stawro.xyz/questionnns/datata/jdsjkds/fdsfdsnbc/paid/module/new/child/all?key=${key}`)
            .then(res => res.json())
            .then(data => setAllpl(data))

            fetch(`https://stawro.xyz/valid/id/leng/data/Length/child/new/all?key=${key}`)
            .then(res => res.json())
            .then(data => setAlllen4(data));

            fetch(`https://stawro.xyz/valid/id/leng/data/Length/child/new/all/live?key=${key}`)
            .then(res => res.json())
            .then(data => setLive(data));

            const Key1 = "sjhdhg7dshkudfshg"
            fetch(`https://stawro.xyz/q/amount/data/all?key=${Key1}`)
            .then(res => res.json())
            .then(data => setAnmt(data));

            fetch(`https://stawro.xyz/user/module/importing/for/delete/fetch/verify/data?key=${key}`)
            .then(res => res.json())
            .then(data =>setVerifydat(data))

            fetch(`https://stawro.xyz/valid/id/leng/data/Length/child/new/all/verify/len?key=${key}`)
            .then(res => res.json())
            .then(data => setVerifyLen(data))
        }

    },[])

    const [verifyLen , setVerifyLen] = useState([]);
    const [Amount, setAmount] = useState([]);
    const [code, setCode] = useState([]);
    const [verifydat, setVerifydat]= useState([]);

    const Amontpost = (e) =>{
        e.preventDefault();
        axios.post("https://stawro.xyz/amount/data/post",{Amount, code})
        .then(res =>{
            if(res.data.Status === "OK"){
                alert("Amount Added")
                window.location.reload();
            }
            else if(res.data.Status === "OKK"){
                alert("Updated new Data")
            }else{
                alert('Not Updated / Added')
            }
        })
    }

    const Amntup = (e) =>{
        setAmount(e.target.value);
    }
    const Codeup = (e) =>{
        setCode(e.target.value)
    }


    const ONof = () =>{
        const name = "ON"
        const code = "193148"
        axios.post('https://stawro.xyz/game/stop/on/click',{name, code})
        .then(res =>{
            if(res.data.Status === "OK"){
                alert('Game Turn ON')
                window.location.reload()
            }else if(res.data.Status === "OKK"){
                alert('Game Turn ON')
                window.location.reload()
            }
        })
    }

    const OFFon = () =>{
        const name = "OFF"
        const code = "193148"
        axios.post('https://stawro.xyz/game/stop/on/click',{name, code})
        .then(res =>{
            if(res.data.Status === "OK"){
                alert('Game Turn OFF')
                window.location.reload()
            }else if(res.data.Status === "OKK"){
                alert('Game Turn OFF')
                window.location.reload()
            }
        })
    }

  return (
    <div>
      <center>
        {token &&
            <div>
                {email &&
                    <div>
                        <h2>Account Data</h2>
                                    
                                    
                        { Keyy &&<div className='Monit-account-key-cnt-01'>
                            <span>Game is {on.name === "ON" && <strong className='span-0fffof'>ON</strong>} {on.name === "OFF" && <strong className='span-0nnnon'>OFF</strong>}</span><br />
                            {on.name === "ON" && <button onClick={OFFon}>stop</button>}
                            {on.name === "OFF" && <button onClick={ONof}>start</button>}
                        </div>}
                        <div className='Tab-calcul'>
                            {anmt.map((user,i) =>{
                                const Amont = parseInt(len2.length)*parseInt(user.Amount);
                                return(
                                    <span key={i}>Total Amount Paid : <span>₹ {Amont}.00</span></span>
                                )
                            })}
                        </div>
                        <span className='length-account'>Payments Count : <span>{len.length}</span></span>
                        <div className='roll-01'>
                            {data.map((user,i) =>{

                                const Delt = () =>{
                                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/up/account/modeis/i/${user._id}?ip=${user.IP}&name=${user.name}&upi=${user.upi}&username=${user.username}`)
                                    .then(res =>{
                                        if(res.data.Status === "OK"){
                                            window.location.reload();
                                        }else{
                                            alert("cant Able to delete")
                                        }
                                    })
                                }

                                const Psos = () =>{
                                    const code = "193148"
                                    const username = user.username
                                    const ip = user.IP
                                    axios.post("https://stawro.xyz/game.wait/post/datat/stop/on/click",{username, ip, code})
                                    .then(res =>{
                                        if(res.data.Status === "OK"){
                                            alert(`User IP ${ip} on Waiting list`)
                                            window.location.reload()
                                        }else if(res.data.Status === "OKK"){
                                            alert(`User ${ip} in Waiting list`)
                                            window.location.reload()
                                        }else{
                                            alert('something went wrong')
                                            window.location.reload()
                                        }
                                    })
                                }

                                return(
                                    
                                        <div className='monitor-div-01' key={i}>
                                        <center>
                                            <span className='monitor-span-01'> Name : {user.name}</span><br/>
                                            <span className='monitor-span-02'>UPI : {user.upi}</span><br />
                                            <span className='monitor-span-02'>Time : {user.Time}</span><br />
                                            <span className='monitor-span-02'>Username : {user.username}</span><br />
                                            <span className='monitor-span-02'>{user.IP}</span><br />
                                            {Keyy && 
                                            <div>
                                                <button onClick={Delt}>Paid</button> <button onClick={Psos}>wait</button>
                                            </div>
                                            }
                                        </center>
                                    </div>
                                )
                            })}
                        </div><br/>


                        <div className='Monitor-imp-01'>
                            <div className='Monitor-imp-01-div-01'>
                                <span>Live</span>
                                <div className='roll-02'>

                                    {upi.map((user,i) =>{
                                        const Del1 = () =>{
                                            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${user._id}`)
                                            .then(res =>{
                                                if(res.data.Status === "OK"){
                                                    window.location.reload();
                                                }else{
                                                    alert("Delete Again")
                                                }
                                            })
                                        }
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.username}</span><br />
                                                <span className='Monit-delete-span' onClick={Del1}>Delete</span>
                                            </div>
                                        )
                                    })}

                                </div>

                            </div>
                            <div className='Monitor-imp-01-div-01'>
                                <span>Live Players : <span className='live-data-len-class'>{live.length}</span></span>
                                <div className='roll-02'>

                                {user.map((user,i) =>{
                                    const Del2 = () =>{
                                        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${user._id}`)
                                        .then(res =>{
                                            if(res.data.Status === "OK"){
                                                window.location.reload();
                                            }else{
                                                alert("Delete Again")
                                            }
                                        })
                                    }
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.username}</span><br />
                                                <span>Way : {user.Qno}</span><br/>
                                                <span className='Monit-delete-span' onClick={Del2}>Delete</span>
                                            </div>
                                        )
                                })}
                                    
                                </div>

                            </div>
                            <div className='Monitor-imp-01-div-01'>
                                <span>Total Players Won : <span className='Moin-span-may-be-01'>{len1.length}</span></span>
                                <div className='roll-02'>

                                    {tot.map((user,i) =>{
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.username}</span><br />
                                                <span>{user.Time}</span><br />
                                            </div>
                                        )
                                    })}
                                    
                                </div>

                            </div>

                            <div className='Monitor-imp-01-div-01'>
                                <span>Amount Paid : <span className='Moin-span-may-be-01'>{len2.length}</span></span>
                                <div className='roll-02'>

                                    {Alpaid.map((user,i) =>{
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>Username : {user.username}</span><br />
                                                <span>UPI : {user.upi}</span><br/>
                                                <span>IP : {user.ip}</span>
                                            </div>
                                        )
                                    })}
                                    
                                </div>

                            </div>

                            <div className='Monitor-imp-01-div-01'>
                                <span>All Players : <span className='Moin-span-may-be-01'>{Alllen4.length}</span></span>
                                <div className='roll-02'>

                                    {ALLpl.map((user,i) =>{
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.username}</span><br />
                                                <span>{user.Qno}</span><br/>
                                                <span>{user.Time}</span>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>

                            <div className='Monitor-imp-01-div-01'>
                                <span>Verify : <span className='Moin-span-may-be-01'>{verifyLen.length}</span></span>
                                <div className='roll-02'>

                                    {verifydat.map((user,i) =>{

                                        const Del4 = () =>{
                                            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/${user._id}`)
                                            .then(res =>{
                                                if(res.data.Status === "OK"){
                                                    window.location.reload();
                                                }else{
                                                    alert('Try Again')
                                                }
                                            })
                                        }
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.username}</span><br />
                                                <span>{user.verify}</span><br/>
                                                <span>{user.Time}</span><br/>
                                                {Keyy &&
                                                <span className='Monit-delete-span' onClick={Del4} >Delete</span>}
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>

                    
                            

                        </div>

                        {Keyy &&
                        
                    
                        
                        <div className='Monit-fix-amnt-div-01'>
                            <form onSubmit={Amontpost}>
                                <span></span><br />
                                <input type='number' required placeholder='Amount' name='Amount' onChange={Amntup}/><br/>
                                <input type='number' required placeholder='Code' name='code' onChange={Codeup} /><br />
                                <button type='submit'>post</button>
                            </form>
                        </div>
                        }   

                    </div>
                }
            </div>
        }
      </center>
    </div>
  )
}

export default Monitor
