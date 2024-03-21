import React, { useEffect, useState } from 'react'
import verify from './images/verify.jpg'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SelPage1 = () => {

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
    const Qno = localStorage.getItem("Qno");

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
            localStorage.setItem("kan", "101")
            localStorage.setItem("noq" , "1")
            window.location.href='/play/kan?key=hsyun8936hso39j8yhsakd'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem("kan", "102")
            localStorage.setItem("noq" , "2")
            window.location.href='/play/kan?key=hsyun8936hso39j8yhsakd'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem("kan", "103")
            localStorage.setItem("noq" , "3")
            window.location.href='/play/kan?key=hsyun8936hso39j8yhsakd'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem("kan", "104")
            localStorage.setItem("noq" , "4")
            window.location.href='/play/kan?key=hsyun8936hso39j8yhsakd'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem("kan", "105")
            localStorage.setItem("noq" , "5")
            window.location.href='/play/kan?key=hsyun8936hso39j8yhsakd'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        localStorage.removeItem("kan")
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        localStorage.removeItem("kan")
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        localStorage.removeItem("kan")
                        window.location.href= `/form?key=${ssid}`
                    }
                    })
                }
            })
        }

    }else if(Qno === "2"){
        if(upii2.qno1 === "false"){
            localStorage.setItem("kan", "106")
            localStorage.setItem("noq" , "1")
            window.location.href='/play/kan?key=hsyscbbd7dbkwm90md73gd'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem("kan", "107")
            localStorage.setItem("noq" , "2")
            window.location.href='/play/kan?key=hsyscbbd7dbkwm90md73gd'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem("kan", "108")
            localStorage.setItem("noq" , "3")
            window.location.href='/play/kan?key=hsyscbbd7dbkwm90md73gd'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem("kan", "109")
            localStorage.setItem("noq" , "4")
            window.location.href='/play/kan?key=hsyscbbd7dbkwm90md73gd'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem("kan", "110")
            localStorage.setItem("noq" , "5")
            window.location.href='/play/kan?key=hsyscbbd7dbkwm90md73gd'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem("kan")
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    localStorage.removeItem("kan")
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
            localStorage.setItem("kan", "111")
            localStorage.setItem("noq" , "1")
            window.location.href='/play/kan?key=72d78nska9hhnd982ylw,po'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem("kan", "112")
            localStorage.setItem("noq" , "2")
            window.location.href='/play/kan?key=72d78nska9hhnd982ylw,po'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem("kan", "113")
            localStorage.setItem("noq" , "3")
            window.location.href='/play/kan?key=72d78nska9hhnd982ylw,po'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem("kan", "114")
            localStorage.setItem("noq" , "4")
            window.location.href='/play/kan?key=72d78nska9hhnd982ylw,po'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem("kan", "115")
            localStorage.setItem("noq" , "5")
            window.location.href='/play/kan?key=72d78nska9hhnd982ylw,po'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem("kan")
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    localStorage.removeItem("kan")
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
            localStorage.setItem("kan", "116")
            localStorage.setItem("noq" , "1")
            window.location.href='/play/kan?key=78wnxb25297yemoaeuygyutv'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem("kan", "117")
            localStorage.setItem("noq" , "2")
            window.location.href='/play/kan?key=78wnxb25297yemoaeuygyutv'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem("kan", "118")
            localStorage.setItem("noq" , "3")
            window.location.href='/play/kan?key=78wnxb25297yemoaeuygyutv'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem("kan", "119")
            localStorage.setItem("noq" , "4")
            window.location.href='/play/kan?key=78wnxb25297yemoaeuygyutv'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem("kan", "120")
            localStorage.setItem("noq" , "5")
            window.location.href='/play/kan?key=78wnxb25297yemoaeuygyutv'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem("kan")
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    localStorage.removeItem("kan")
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
            localStorage.setItem("kan", "121")
            localStorage.setItem("noq" , "1")
            window.location.href='/play/kan?key=28dnsbco963ndhaknc63mmkn'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem("kan", "122")
            localStorage.setItem("noq" , "2")
            window.location.href='/play/kan?key=28dnsbco963ndhaknc63mmkn'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem("kan", "123")
            localStorage.setItem("noq" , "3")
            window.location.href='/play/kan?key=28dnsbco963ndhaknc63mmkn'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem("kan", "124")
            localStorage.setItem("noq" , "4")
            window.location.href='/play/kan?key=28dnsbco963ndhaknc63mmkn'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem("kan", "125")
            localStorage.setItem("noq" , "5")
            window.location.href='/play/kan?key=28dnsbco963ndhaknc63mmkn'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem("kan")
                    axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                    .then(res =>{
                    if(res.data.Status === "OK"){
                        window.location.href= `/form?key=${ssid}`
                    }else{
                        alert(`Contact Admin on Instagram ID : "stawro", yes ${user} `)
                    }
                    })
                }else{
                    localStorage.removeItem("kan")
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
            localStorage.setItem("kan", "126")
            localStorage.setItem("noq" , "1")
            window.location.href='/play/kan?key=hduwiqhn;a-32hkdd7hd73bd'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem("kan", "127")
            localStorage.setItem("noq" , "2")
            window.location.href='/play/kan?key=hduwiqhn;a-32hkdd7hd73bd'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem("kan", "128")
            localStorage.setItem("noq" , "3")
            window.location.href='/play/kan?key=hduwiqhn;a-32hkdd7hd73bd'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem("kan", "129")
            localStorage.setItem("noq" , "4")
            window.location.href='/play/kan?key=hduwiqhn;a-32hkdd7hd73bd'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem("kan", "130")
            localStorage.setItem("noq" , "5")
            window.location.href='/play/kan?key=hduwiqhn;a-32hkdd7hd73bd'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
            .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem("kan")
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
            localStorage.setItem("kan", "131")
            localStorage.setItem("noq" , "1")
            window.location.href='/play/kan?key=nvcfsie52fgfal;ndudn3036'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem("kan", "132")
            localStorage.setItem("noq" , "2")
            window.location.href='/play/kan?key=nvcfsie52fgfal;ndudn3036'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem("kan", "133")
            localStorage.setItem("noq" , "3")
            window.location.href='/play/kan?key=nvcfsie52fgfal;ndudn3036'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem("kan", "134")
            localStorage.setItem("noq" , "4")
            window.location.href='/play/kan?key=nvcfsie52fgfal;ndudn3036'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem("kan", "135")
            localStorage.setItem("noq" , "5")
            window.location.href='/play/kan?key=nvcfsie52fgfal;ndudn3036'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            localStorage.removeItem("kan")
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
            localStorage.setItem("kan", "136")
            localStorage.setItem("noq" , "1")
            window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
        }else if(upii2.qno2 === "false"){
            localStorage.setItem("kan", "137")
            localStorage.setItem("noq" , "2")
            window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
        }else if(upii2.qno3 === "false"){
            localStorage.setItem("kan", "138")
            localStorage.setItem("noq" , "3")
            window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
        }else if(upii2.qno4 === "false"){
            localStorage.setItem("kan", "139")
            localStorage.setItem("noq" , "4")
            window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
        }else if(upii2.qno5 === "false"){
            localStorage.setItem("kan", "140")
            localStorage.setItem("noq" , "5")
            window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
        }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
            localStorage.removeItem("kan")
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
        localStorage.setItem("kan", "141")
        localStorage.setItem("noq" , "1")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno2 === "false"){
        localStorage.setItem("kan", "142")
        localStorage.setItem("noq" , "2")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno3 === "false"){
        localStorage.setItem("kan", "143")
        localStorage.setItem("noq" , "3")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno4 === "false"){
        localStorage.setItem("kan", "144")
        localStorage.setItem("noq" , "4")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "false"){
        localStorage.setItem("kan", "145")
        localStorage.setItem("noq" , "5")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
        localStorage.removeItem("kan")
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${one}`)
        .then(res =>{
            if(res.data.Status === "OK"){
                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${two}`)
                .then(res =>{
                if(res.data.Status === "OK"){
                    localStorage.removeItem("kan")
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
        localStorage.setItem('kan', "146")
        localStorage.setItem("noq" , "1")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno2 === "false"){
        localStorage.setItem('kan', "147")
        localStorage.setItem("noq" , "2")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno3 === "false"){
        localStorage.setItem("kan", "148")
        localStorage.setItem("noq" , "3")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno4 === "false"){
        localStorage.setItem("kan", "149")
        localStorage.setItem("noq" , "4")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "false"){
        localStorage.setItem("kan", "150")
        localStorage.setItem("noq" , "5")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null){
        localStorage.removeItem("kan")
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
        localStorage.setItem("kan", "151")
        localStorage.setItem("noq" , "1")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno2 === "false"){
        localStorage.setItem("kan", "152")
        localStorage.setItem("noq" , "2")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno3 === "false"){
        localStorage.setItem("kan", "153")
        localStorage.setItem("noq" , "3")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno4 === "false"){
        localStorage.setItem("kan", "154")
        localStorage.setItem("noq" , "4")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "false"){
        localStorage.setItem("kan", "155")
        localStorage.setItem("noq" , "5")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null){
        localStorage.removeItem("kan")
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
        localStorage.setItem("kan", "156")
        localStorage.setItem("noq" , "1")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno2 === "false"){
        localStorage.setItem("kan", "157")
        localStorage.setItem("noq" , "2")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno3 === "false"){
        localStorage.setItem("kan", "158")
        localStorage.setItem("noq" , "3")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno4 === "false"){
        localStorage.setItem("kan", "159")
        localStorage.setItem("noq" , "4")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "false"){
        localStorage.setItem("kan", "160")
        localStorage.setItem("noq" , "5")
        window.location.href='/play/kan?key=37njdnfasv259msnm_sauygd7'
    }else if(upii2.qno5 === "True" & upii2.qno4 === "True" & upii2.qno3 === "True" & upii2.qno2 === "True" & upii2.qno1 === "True" & one !== null & two !== null & ssid !== null & user !== null ){
        localStorage.removeItem("kan")
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

export default SelPage1
