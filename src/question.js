import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Question = () => {

  const username = localStorage.getItem('user');
  const qno = localStorage.getItem('qno');
  const noq = localStorage.getItem('noq');
  const ip = localStorage.getItem('ip');

  const [data, setData] = useState([]);
  const Qno = localStorage.getItem("qno");
  const [verrii, setVerrii] = useState([]);
  const [upii1 , setUpii1] = useState([]);
  const [upii2 , setUpii2] = useState([]);
  const [val, setVal] = useState([]);
  const [ipad, setIpad] = useState([]);
  const [wait, setWait] = useState([]);

    

    const resetTimer = () => {
      setRunning(false);
      setSeconds(11);
      localStorage.setItem('remainingSeconds', 11);
    };


    const initialSeconds = parseInt(localStorage.getItem('remainingSeconds'), 10) || 11;
    const [seconds, setSeconds] = useState(initialSeconds);
    const [running, setRunning] = useState(false);

    const startTimer = () => {
      setRunning(true);
    };

    useEffect(() => {
      startTimer()
      //timer
  
      let intervalId;

    
  
      if (running && seconds > 0) {
        intervalId = setInterval(() => {
          setSeconds((prevSeconds) => {
            const newSeconds = prevSeconds - 1;
            localStorage.setItem('remainingSeconds', newSeconds);
            return newSeconds;
          });
        }, 1000); // Update the timer every 1000ms (1 second)
      }
    
      return () => {
        clearInterval(intervalId);
      };
      //timer
    }, [running, seconds])
  
  
  
  
    localStorage.setItem('countdownSeconds', seconds.toString());
  
  
    if(seconds === 0){
      if(upii1._id !== null & upii2._id !== null){
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Time Out")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
      }else{
        Refrs()
      }
      
    }else if(seconds > 11){
      if(upii1._id !== null & upii2._id !== null & username !== null){
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Time Out")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
      }else{
        Refrs()
      }
      
    }

  
    ///ti

  useEffect(()=>{

        

        if(qno !== null){
          fetch(`https://stawro.xyz/question/singel/01/${qno}`)
          .then(res => res.json())
          .then(data => setData(data));
        }

        if(username !== null){
          fetch(`https://stawro.xyz/question/singel/verify/data/01/sakhd/sjkh/dsf/dfsd/${username}`)
          .then(res => res.json())
          .then(data => setUpii1(data))

          fetch(`https://stawro.xyz/question/singel/verify/data/01/sakhd/${username}`)
          .then(res => res.json())
          .then(data => setUpii2(data))

          fetch(`https://stawro.xyz/question/singel/verify/data/01/${username}`)
          .then(res => res.json())
          .then(data => setVerrii(data))
        }

        if(ip !== null){
          fetch(`https://stawro.xyz/get/wait/module/agame/on/or/off/${ip}`)
         .then(res => res.json())
         .then(data => {
          setWait(data.user)
          if(data.user){
            alert('Play on Next upcoming Game')
            window.location.href='/'
          }else{

          }
          })
        }
        
    

  },[])

  const Refrs = () =>{

    if(username !== null){
      fetch(`https://stawro.xyz/question/singel/verify/data/01/${username}`)
        .then(res => res.json())
        .then(data => setVerrii(data))
    }

    if(qno !== null){
      fetch(`https://stawro.xyz/question/singel/01/${qno}`)
      .then(res => res.json())
      .then(data => setData(data));
    }

    if(username !== null){
      fetch(`https://stawro.xyz/question/singel/verify/data/01/sakhd/sjkh/dsf/dfsd/${username}`)
      .then(res => res.json())
      .then(data => setUpii1(data))

      fetch(`https://stawro.xyz/question/singel/verify/data/01/sakhd/${username}`)
      .then(res => res.json())
      .then(data => setUpii2(data))
    }
    
  }


  const Button1 = () =>{
    const Option  = "A"
    resetTimer();
    localStorage.setItem('remainingSeconds', 11);
    if(Option !== null & noq !== null & Qno !== null & username !== null & upii1._id !== null & upii2._id !== null ){

    axios.post("https://stawro.xyz/answer/check/question/correct/or/wrong",{Option, noq, Qno, username})
    .then(res =>{
      if(res.data.Status === "OK"){
        window.location.href='/game'
 
      }else if(res.data.Status === "OKK"){
        localStorage.removeItem('qno')
        localStorage.setItem('72bacsc', res.data.user2.username);
        window.location.href=`/game?one=${upii1._id}&two=${upii2._id}`
      }
      else{
        
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
        
      }
    })
    }else{
      Refrs()
    }
  }

  const Button2 = () =>{
    resetTimer();
    localStorage.setItem('remainingSeconds', 11);
    const Option  = "B"
    if(Option !== null & noq !== null & Qno !== null & username !== null & upii1._id !== null & upii2._id !== null ){
      axios.post("https://stawro.xyz/answer/check/question/correct/or/wrong",{Option, noq, Qno, username})
      .then(res =>{
        if(res.data.Status === "OK"){
          window.location.href='/game'
        }else if(res.data.Status === "OKK"){
          localStorage.removeItem('qno')
          localStorage.setItem('72bacsc', res.data.user2.username);
          window.location.href=`/game?one=${upii1._id}&two=${upii2._id}`
        }
        else{
          
          axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
          .then(res =>{
            if(res.data.Status === "OK"){
              axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
              .then(res =>{
                if(res.data.Status === "OK"){
                  alert("Wrong Answer, Better luck next Time")
                  window.location.href='/'
                }else{
                  window.location.href='/'
                }
              })
            }else{
              axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
              .then(res =>{
                if(res.data.Status === "OK"){
                  window.location.href='/'   
                }else{
                  window.location.href='/'
                }
              })
            }
          })
          
        }
      })
    }else{
      Refrs()
    }
    
  }

  const Button3 = () =>{
    resetTimer();
    localStorage.setItem('remainingSeconds', 11);
    const Option  = "C"
    if(Option !== null & noq !== null & Qno !== null & username !== null & upii1._id !== null & upii2._id !== null){
      axios.post("https://stawro.xyz/answer/check/question/correct/or/wrong",{Option, noq, Qno, username})
      .then(res =>{
        if(res.data.Status === "OK"){
          window.location.href='/game'
        }else if(res.data.Status === "OKK"){
          localStorage.removeItem('qno')
          localStorage.setItem('72bacsc', res.data.user2.username);
          window.location.href=`/game?one=${upii1._id}&two=${upii2._id}`
        }
        else{
          
          axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
          .then(res =>{
            if(res.data.Status === "OK"){
              axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
              .then(res =>{
                if(res.data.Status === "OK"){
                  alert("Wrong Answer, Better luck next Time")
                  window.location.href='/'
                }else{
                  window.location.href='/'
                }
              })
            }else{
              axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
              .then(res =>{
                if(res.data.Status === "OK"){
                  window.location.href='/'   
                }else{
                  window.location.href='/'
                }
              })
            }
          })
          
        }
      })
    }else{
      Refrs()
    }
    
  }



  const Button4 = () =>{
    resetTimer();
    localStorage.setItem('remainingSeconds', 11);
    const Option  = "D"
    if(Option !== null & noq !== null & Qno !== null & username !== null & upii1._id !== null & upii2._id !== null){
      axios.post("https://stawro.xyz/answer/check/question/correct/or/wrong",{Option, noq, Qno, username})
      .then(res =>{
        if(res.data.Status === "OK"){
          window.location.href='/game'
        }else if(res.data.Status === "OKK"){
          localStorage.removeItem('qno')
          localStorage.setItem('72bacsc', res.data.user2.username);
          window.location.href=`/game?one=${upii1._id}&two=${upii2._id}`
        }
        else{
          axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
          .then(res =>{
            if(res.data.Status === "OK"){
              axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
              .then(res =>{
                if(res.data.Status === "OK"){
                  alert("Wrong Answer, Better luck next Time")
                  window.location.href='/'
                }else{
                  window.location.href='/'
                }
              })
            }else{
              axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
              .then(res =>{
                if(res.data.Status === "OK"){
                  window.location.href='/'   
                }else{
                  window.location.href='/'
                }
              })
            }
          })
        }
      })
    }else{
      Refrs()
    }
  }

  const Qut = () =>{
    if(upii1._id !== null & upii2._id !== null){
      axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
          .then(res =>{
            if(res.data.Status === "OK"){
              axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
              .then(res =>{
                if(res.data.Status === "OK"){
                  window.location.href='/'
                }else{
                  window.location.href='/'
                }
              })
            }else{
              axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
              .then(res =>{
                if(res.data.Status === "OK"){
                  window.location.href='/'   
                }else{
                  window.location.href='/'
                }
              })
            }
          })
    }else{
      window.location.reload();
    }
  }

  return (
    <div>
      {verrii.username
      ?
      <center>
        <span>Not Found Username</span>
      </center>
      :
      <div>
        <center>
        <div className='question-div-01'>
            <span className='question-div-01-span-01'>Seconds : <span className='question-div-01-span-01-span-01'>{seconds}</span></span><span></span>
            <div className='question-div-02'>
                <span className='question-div-02-span-01'>{data.question}</span><br />

                {data.img !== "" &&
                  <div className='question-div-cnt-04'>
                    <img src={data.img}/>
                  </div>
                }
                
                <div className='question-div-03'>
                  <button onClick={Button1}>{data.optionA}</button> <button onClick={Button2}>{data.optionB}</button><br />
                  <button onClick={Button3}>{data.optionC}</button> <button onClick={Button4}>{data.optionD}</button>
                </div>                
            </div>
        </div>
        <div>
          <button onClick={Qut} className='quit-btn-01'>Quit</button>
        </div>
        </center>
      </div>
        }
    </div>
  )
}

export default Question;