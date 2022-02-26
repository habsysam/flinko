
import React, { useState } from "react"
import img1 from "../image/Flinko_Logo.png"
import Platform from './Platform';
import Pricing from './Pricing';
import Insight from './Insight';
import ContactUs from './ContactUs';
import Flinko from './Flinko';
import Signup from './btn-nav/Signup';
import Signin from './btn-nav/Signin';
import '../App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Navbar() {
    const [show, setshow] = useState(true)
    const hide = () => {
        setshow(!show)
    }
    return (
        <div>
            <>



                <div>
                    {
                        show ? <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
                            <div class="container-fluid">

                                <Link className='navbar-brand' to="/flinko"><a href=""><img src={img1} className="px-3 py-2" width="150px" /></a></Link>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarText"
                                    aria-controls="navbarText"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i class="fas fa-bars"></i>
                                </button>
                                <div className=''>
                                    <div class="collapse navbar-collapse nav-auto" id="navbarText">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">

                                                <Link className='nav-link active mx-1' to="/platform">Platform</Link>
                                            </li>
                                            <li class="nav-item">

                                                <Link className='nav-link active mx-1' to="/pricing">Pricing</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link className='nav-link active mx-1' to="/insight">Insight</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link className='nav-link active mx-1' to="/contactus">Contact Us</Link>
                                            </li>
                                            <li className='nav-item'>
                                                <Link to="/signup"><button type="button" class="btn btn-primary  rounded-pill px-4 py-2 mx-1 navbtn" onClick={hide}>Start free trail</button></Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link className='nav-link active text-primary mx-1' style={{ color: "darkslateblue" }} to="/signin" onClick={hide}>Sign In</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </nav>
                            : null
                    }
                </div>






            </>
        </div >
    )
}

export default Navbar