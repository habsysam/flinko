import React, { useState } from 'react'
import "../../App.css"
import img1 from "../../image/Flinko_Logo.png"
import img2 from "../../image/download_write.png"
import img3 from "../../image/bg_img.png"


function Signin(props) {
    const [eye, seteye] = useState(true)
    const [update, setupdate] = useState(
        {
            email: "",
            password: ""
        }
    )
    const [userval, setuserval] = useState(true)
    const [erroruser, seterroruser] = useState("")

    const [userpass, setpass] = useState(true)
    const [errorpass, seterrorpass] = useState("")

    let values = (e) => {
        // console.log(e);
        let copyvalue = { ...update }
        // console.log(copyvalue);
        copyvalue[e.target.name] = e.target.value
        // console.log(copyvalue);
        setupdate(copyvalue)
    }

    const login = (e) => {
        e.preventDefault()
        const isname = validateName(update.email)
        const ispassword = validationpassword(update.password)
        if (isname && ispassword) {
            props.history.push("./flinko")
        }
    }
    // name validation
    const validateName = (uservals) => {
        if (uservals) {
            if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(uservals)) {
                setuserval(true)
                seterroruser("")
                return true
            } else {
                setuserval(false)
                seterroruser("*please enter your valid name")
                return false
            }
        } else {
            setuserval(false)
            seterroruser("*please enter your name")
            return false
        }
    }

    // password validationpassword

    const validationpassword = (valpass) => {
        if (valpass) {
            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(valpass)) {
                setpass(true)
                seterrorpass("")
                return true
            } else {
                setpass(false)
                seterrorpass("*Please enter your valid password")
                return false
            }
        } else {
            setpass(false)
            seterrorpass("*please enter your password")
            return false
        }
    }
    const hide = () => {
        seteye(!eye)
    }
    const render = () => {
        props.history.push("/signup")
    }
    return (
        <div className='container'>
            <div className='row d-flex justify-content-evenly'>

                <div className='col-md-6'>

                    <div>
                        <img src={img1} className="i1" />
                        <img src={img2} className="i2" />

                        <img src={img3} className="i3" />
                    </div>

                </div>

                <div className='col-md-5 val '>
                    <h3 className='extra-bold sin' >Sign in </h3>
                    <span className='new'>New user?</span>
                    <span><a className='create' onClick={render}>Create an account</a></span>

                    <form onSubmit={login} >
                        <div className='email'>
                            <label > <span className='start'>*</span> Email</label>
                        </div>
                        <div className='email-input'>
                            <input type="text" name='email' value={update.email} onChange={(e) => { values(e) }} placeholder='Enter your eamil' />

                        </div>
                        {!userval ? <p style={{ color: "red", fontSize: "12px" }}>{erroruser}</p> : null}

                        <div className='pass'>
                            <label > <span className='start'>*</span> Password</label>
                        </div>
                        <div className='pass-input'>
                            <input type={eye ? "password" : "text"} placeholder='Enter your password' name='password' value={update.password} onChange={(e) => { values(e) }} /><a className='eye' onClick={hide}>{eye ? <i class=" far  fa-eye-slash"></i> : <i class="far fa-eye"></i>}</a>

                        </div>
                        <p> {!userpass ? <p style={{ color: "red", fontSize: "12px" }}>{errorpass}</p> : null} </p>
                        
                        <div className='btn'>
                       
                            <button type='submit' className=' w-full flex  justify-center py-2 px-4 text-white btn outline-none  last  '>Sign in</button>
                        </div>
                    </form>



                </div>
            </div>


        </div>
    )
}

export default Signin