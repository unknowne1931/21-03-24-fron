import React, { useEffect, useState } from 'react'
import verify from './images/verify.jpg'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SelPage = () => {

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const one = queryParm.get('one')
    const two = queryParm.get('two')
    const ip = localStorage.getItem('ip')

    const user = localStorage.getItem('user');
    const username = localStorage.getItem('user');
    const ssid = localStorage.getItem('ssid');
    const [upii2, setUpii2] = useState([]);
    const [upii1, setUpii1] = useState([]);
    const Qno = localStorage.getItem('Qno');

    useEffect(()=>{
        if(username !== null){
            fetch(`https://stawro.xyz/question/singel/verify/data/01/sakhd/${username}`)
            .then(res => res.json())
            .then(data => setUpii2(data))

            fetch(`https://stawro.xyz/question/singel/verify/data/01/sakhd/sjkh/dsf/dfsd/${username}`)
            .then(res => res.json())
            .then(data => setUpii1(data))
        }
        
    },[])



    if(Qno === "1"){
        if(upii2.qno1 === "false"){
            localStorage.setItem('qno', "1")
            localStorage.setItem("noq" , "1")
            window.location.href='/play?key=hsyun8936hso39j8yhsakd'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem('qno', "2")
            localStorage.setItem("noq" , "2")
            window.location.href='/play?key=hsyun8936hso39j8yhsakd'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem('qno', "3")
            localStorage.setItem("noq" , "3")
            window.location.href='/play?key=hsyun8936hso39j8yhsakd'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem('qno', "4")
            localStorage.setItem("noq" , "4")
            window.location.href='/play?key=hsyun8936hso39j8yhsakd'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem('qno', "5")
            localStorage.setItem("noq" , "5")
            window.location.href='/play?key=hsyun8936hso39j8yhsakd'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        localStorage.removeItem('qno')
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        localStorage.removeItem('qno')
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        localStorage.removeItem('qno')
                        window.location.href= `/form?key=${ssid}`
                    }
                    })
                }
            })
        }

    }else if(Qno === "2"){
        if(upii2.qno1 === "false"){
            localStorage.setItem('qno', "6")
            localStorage.setItem("noq" , "1")
            window.location.href='/play?key=hsyscbbd7dbkwm90md73gd'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem('qno', "7")
            localStorage.setItem("noq" , "2")
            window.location.href='/play?key=hsyscbbd7dbkwm90md73gd'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem('qno', "8")
            localStorage.setItem("noq" , "3")
            window.location.href='/play?key=hsyscbbd7dbkwm90md73gd'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem('qno', "9")
            localStorage.setItem("noq" , "4")
            window.location.href='/play?key=hsyscbbd7dbkwm90md73gd'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem('qno', "10")
            localStorage.setItem("noq" , "5")
            window.location.href='/play?key=hsyscbbd7dbkwm90md73gd'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem('qno')
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    localStorage.removeItem('qno')
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        window.location.href= `/form?key=${ssid}`
                    }
                    })
                }
            })
        }


    }else if(Qno === "3"){
        if(upii2.qno1 === "false"){
            localStorage.setItem('qno', "11")
            localStorage.setItem("noq" , "1")
            window.location.href='/play?key=72d78nska9hhnd982ylw,po'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem('qno', "12")
            localStorage.setItem("noq" , "2")
            window.location.href='/play?key=72d78nska9hhnd982ylw,po'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem('qno', "13")
            localStorage.setItem("noq" , "3")
            window.location.href='/play?key=72d78nska9hhnd982ylw,po'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem('qno', "14")
            localStorage.setItem("noq" , "4")
            window.location.href='/play?key=72d78nska9hhnd982ylw,po'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem('qno', "15")
            localStorage.setItem("noq" , "5")
            window.location.href='/play?key=72d78nska9hhnd982ylw,po'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem('qno')
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    localStorage.removeItem('qno')
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        window.location.href= `/form?key=${ssid}`
                    }
                    })
                }
            })
        }


    }else if(Qno === "4"){
        if(upii2.qno1 === "false"){
            localStorage.setItem('qno', "16")
            localStorage.setItem("noq" , "1")
            window.location.href='/play?key=78wnxb25297yemoaeuygyutv'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem('qno', "17")
            localStorage.setItem("noq" , "2")
            window.location.href='/play?key=78wnxb25297yemoaeuygyutv'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem('qno', "18")
            localStorage.setItem("noq" , "3")
            window.location.href='/play?key=78wnxb25297yemoaeuygyutv'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem('qno', "19")
            localStorage.setItem("noq" , "4")
            window.location.href='/play?key=78wnxb25297yemoaeuygyutv'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem('qno', "20")
            localStorage.setItem("noq" , "5")
            window.location.href='/play?key=78wnxb25297yemoaeuygyutv'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem('qno')
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    localStorage.removeItem('qno')
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        window.location.href= `/form?key=${ssid}`
                    }
                    })
                }
            })
        }


    }else if(Qno === "5"){
        if(upii2.qno1 === "false"){
            localStorage.setItem('qno', "21")
            localStorage.setItem("noq" , "1")
            window.location.href='/play?key=28dnsbco963ndhaknc63mmkn'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem('qno', "22")
            localStorage.setItem("noq" , "2")
            window.location.href='/play?key=28dnsbco963ndhaknc63mmkn'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem('qno', "23")
            localStorage.setItem("noq" , "3")
            window.location.href='/play?key=28dnsbco963ndhaknc63mmkn'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem('qno', "24")
            localStorage.setItem("noq" , "4")
            window.location.href='/play?key=28dnsbco963ndhaknc63mmkn'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem('qno', "25")
            localStorage.setItem("noq" , "5")
            window.location.href='/play?key=28dnsbco963ndhaknc63mmkn'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem('qno')
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    localStorage.removeItem('qno')
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        window.location.href= `/form?key=${ssid}`
                    }
                    })
                }
            })
        }


    }else if(Qno === "6"){
        if(upii2.qno1 === "false"){
            localStorage.setItem('qno', "26")
            localStorage.setItem("noq" , "1")
            window.location.href='/play?key=hduwiqhn;a-32hkdd7hd73bd'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem('qno', "27")
            localStorage.setItem("noq" , "2")
            window.location.href='/play?key=hduwiqhn;a-32hkdd7hd73bd'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem('qno', "28")
            localStorage.setItem("noq" , "3")
            window.location.href='/play?key=hduwiqhn;a-32hkdd7hd73bd'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem('qno', "29")
            localStorage.setItem("noq" , "4")
            window.location.href='/play?key=hduwiqhn;a-32hkdd7hd73bd'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem('qno', "30")
            localStorage.setItem("noq" , "5")
            window.location.href='/play?key=hduwiqhn;a-32hkdd7hd73bd'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem('qno')
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        window.location.href= `/form?key=${ssid}`
                    }
                    })
                }
            })
        }


    }else if(Qno === "7"){
        if(upii2.qno1 === "false"){
            localStorage.setItem('qno', "31")
            localStorage.setItem("noq" , "1")
            window.location.href='/play?key=nvcfsie52fgfal;ndudn3036'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem('qno', "32")
            localStorage.setItem("noq" , "2")
            window.location.href='/play?key=nvcfsie52fgfal;ndudn3036'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem('qno', "33")
            localStorage.setItem("noq" , "3")
            window.location.href='/play?key=nvcfsie52fgfal;ndudn3036'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem('qno', "34")
            localStorage.setItem("noq" , "4")
            window.location.href='/play?key=nvcfsie52fgfal;ndudn3036'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem('qno', "35")
            localStorage.setItem("noq" , "5")
            window.location.href='/play?key=nvcfsie52fgfal;ndudn3036'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            localStorage.removeItem('qno')
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        window.location.href= `/form?key=${ssid}`
                    }
                    })
                }
            })
        }


    }else if(Qno === "8"){
        if(upii2.qno1 === "false"){
            localStorage.setItem('qno', "36")
            localStorage.setItem("noq" , "1")
            window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem('qno', "37")
            localStorage.setItem("noq" , "2")
            window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem('qno', "38")
            localStorage.setItem("noq" , "3")
            window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem('qno', "39")
            localStorage.setItem("noq" , "4")
            window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem('qno', "40")
            localStorage.setItem("noq" , "5")
            window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            localStorage.removeItem('qno')
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        window.location.href= `/form?key=${ssid}`
                    }
                    })
                }
            })
        }
        
    }
    else if(Qno === "9"){
    if(upii2.qno1 === "false"){
        localStorage.setItem('qno', "41")
        localStorage.setItem("noq" , "1")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno2 === "false"){
        localStorage.setItem('qno', "42")
        localStorage.setItem("noq" , "2")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno3 === "false"){
        localStorage.setItem('qno', "43")
        localStorage.setItem("noq" , "3")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno4 === "false"){
        localStorage.setItem('qno', "44")
        localStorage.setItem("noq" , "4")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "false"){
        localStorage.setItem('qno', "45")
        localStorage.setItem("noq" , "5")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
        localStorage.removeItem('qno')
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
        .then(res =>{
            if(res.data.Status === "OK"){
                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem('qno')
                    window.location.href= `/form?key=${ssid}`
                }else{
                    alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                }
                })
            }else{
                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                .then(res =>{
                if(res.data.Status === "OK"){
                    window.location.href= `/form?key=${ssid}`
                }else{
                    window.location.href= `/form?key=${ssid}`
                }
                })
            }
        })
    }
    
}else if(Qno === "10"){
    if(upii2.qno1 === "false"){
        localStorage.setItem('qno', "46")
        localStorage.setItem("noq" , "1")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno2 === "false"){
        localStorage.setItem('qno', "47")
        localStorage.setItem("noq" , "2")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno3 === "false"){
        localStorage.setItem('qno', "48")
        localStorage.setItem("noq" , "3")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno4 === "false"){
        localStorage.setItem('qno', "49")
        localStorage.setItem("noq" , "4")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "false"){
        localStorage.setItem('qno', "50")
        localStorage.setItem("noq" , "5")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null){
        localStorage.removeItem('qno')
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
        .then(res =>{
            if(res.data.Status === "OK"){
                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                .then(res =>{
                if(res.data.Status === "OK"){
                    window.location.href= `/form?key=${ssid}`
                }else{
                    alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                }
                })
            }else{
                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                .then(res =>{
                if(res.data.Status === "OK"){
                    window.location.href= `/form?key=${ssid}`
                }else{
                    window.location.href= `/form?key=${ssid}`
                }
                })
            }
        })
    }
    
}

else if(Qno === "11"){
    if(upii2.qno1 === "false"){
        localStorage.setItem('qno', "51")
        localStorage.setItem("noq" , "1")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno2 === "false"){
        localStorage.setItem('qno', "52")
        localStorage.setItem("noq" , "2")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno3 === "false"){
        localStorage.setItem('qno', "53")
        localStorage.setItem("noq" , "3")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno4 === "false"){
        localStorage.setItem('qno', "54")
        localStorage.setItem("noq" , "4")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "false"){
        localStorage.setItem('qno', "55")
        localStorage.setItem("noq" , "5")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null){
        localStorage.removeItem('qno')
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
        .then(res =>{
            if(res.data.Status === "OK"){
                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                .then(res =>{
                if(res.data.Status === "OK"){
                    window.location.href= `/form?key=${ssid}`
                }else{
                    alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                }
                })
            }else{
                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                .then(res =>{
                if(res.data.Status === "OK"){
                    window.location.href= `/form?key=${ssid}`
                }else{
                    window.location.href= `/form?key=${ssid}`
                }
                })
            }
        })
    }
    
}else if(Qno === "12"){
    if(upii2.qno1 === "false"){
        localStorage.setItem('qno', "56")
        localStorage.setItem("noq" , "1")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno2 === "false"){
        localStorage.setItem('qno', "57")
        localStorage.setItem("noq" , "2")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno3 === "false"){
        localStorage.setItem('qno', "58")
        localStorage.setItem("noq" , "3")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno4 === "false"){
        localStorage.setItem('qno', "59")
        localStorage.setItem("noq" , "4")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "false"){
        localStorage.setItem('qno', "60")
        localStorage.setItem("noq" , "5")
        window.location.href='/play?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
        localStorage.removeItem('qno')
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
        .then(res =>{
            if(res.data.Status === "OK"){
                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                .then(res =>{
                if(res.data.Status === "OK"){
                    window.location.href= `/form?key=${ssid}`
                }else{
                    alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                }
                })
            }else{
                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                .then(res =>{
                if(res.data.Status === "OK"){
                    window.location.href= `/form?key=${ssid}`
                }else{
                    window.location.href= `/form?key=${ssid}`
                }
                })
            }
        })
    }
    
}
else{
    window.location.href='/'
}

    
    const Home = () =>{
        window.location.href='/'
    }

  return(
    <div>
        {user &&
            <center>
                <h1></h1><br/>
                <div className='sel-page-div-01'>
                    <img src={verify} alt='img' />
                </div>
                <button className='Sel-btn-01' onClick={Home}></button>
            </center>
        }
    </div>
  )
}

export default SelPage
